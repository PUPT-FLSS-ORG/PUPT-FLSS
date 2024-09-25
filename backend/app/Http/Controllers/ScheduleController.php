<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ScheduleController extends Controller
{
    /**
     * Automatically assigns courses to sections and populates the schedules.
     * Maintained as a GET method to align with your requirements.
     */
    public function autoAssignCoursesToSections()
    {
        // Step 1: Get the active semester
        $activeSemester = DB::table('active_semesters')
            ->where('is_active', 1)
            ->first();

        if (!$activeSemester) {
            return response()->json(['message' => 'No active semester found'], 404);
        }

        // Step 2: Fetch all assigned courses for the active semester
        $assignedCourses = DB::table('curricula as c')
            ->select(
                'p.program_id',
                'p.program_code',
                'p.program_title',
                'cp.curricula_program_id',
                'c.curriculum_id',
                'c.curriculum_year',
                'yl.year_level_id',
                'yl.year as year_level',
                's.semester_id',
                's.semester',
                'ca.course_assignment_id',
                'co.course_id',
                'co.course_code',
                'co.course_title',
                'co.lec_hours',
                'co.lab_hours',
                'co.units',
                'co.tuition_hours'
            )
            ->join('curricula_program as cp', 'c.curriculum_id', '=', 'cp.curriculum_id')
            ->join('programs as p', 'cp.program_id', '=', 'p.program_id')
            ->join('year_levels as yl', 'cp.curricula_program_id', '=', 'yl.curricula_program_id')
            ->join('semesters as s', 'yl.year_level_id', '=', 's.year_level_id')
            ->leftJoin('course_assignments as ca', function ($join) {
                $join->on('ca.curricula_program_id', '=', 'cp.curricula_program_id')
                     ->on('ca.semester_id', '=', 's.semester_id');
            })
            ->leftJoin('courses as co', 'ca.course_id', '=', 'co.course_id')
            ->where('s.semester', $activeSemester->semester_id)
            ->orderBy('p.program_id')
            ->orderBy('yl.year')
            ->orderBy('s.semester')
            ->get();

        $response = [];

        foreach ($assignedCourses as $row) {
            // Organize data hierarchically: Program -> Year Level -> Semester -> Sections -> Courses
            $programIndex = $this->findOrCreateProgram($response, $row);
            $yearLevelIndex = $this->findOrCreateYearLevel($response[$programIndex]['year_levels'], $row);
            $semesterIndex = $this->findOrCreateSemester($response[$programIndex]['year_levels'][$yearLevelIndex]['semesters'], $row);

            // Step 3: For each section in the program-year level, assign the same course and schedule
            $sections = DB::table('sections_per_program_year')
                ->where('program_id', $row->program_id)
                ->where('year_level', $row->year_level)
                ->get();

            foreach ($sections as $section) {
                // Assign course to section and schedule
                $this->assignCourseToSectionAndSchedule($row, $section, $response[$programIndex]['year_levels'][$yearLevelIndex]['semesters'][$semesterIndex]['sections']);
            }
        }

        return response()->json([
            'active_semester_id' => $activeSemester->active_semester_id,
            'academic_year_id' => $activeSemester->academic_year_id,
            'semester_id' => $activeSemester->semester_id,
            'programs' => $response
        ]);
    }


    private function findOrCreateProgram(&$response, $row)
    {
        $programIndex = array_search($row->program_id, array_column($response, 'program_id'));

        if ($programIndex === false) {
            $response[] = [
                'program_id' => $row->program_id,
                'program_code' => $row->program_code,
                'program_title' => $row->program_title,
                'year_levels' => []
            ];
            return count($response) - 1;
        }

        return $programIndex;
    }

    private function findOrCreateYearLevel(&$yearLevels, $row)
    {
        foreach ($yearLevels as $index => $yearLevel) {
            if ($yearLevel['year_level'] == $row->year_level && $yearLevel['curriculum_id'] == $row->curriculum_id) {
                return $index;
            }
        }

        $yearLevels[] = [
            'year_level' => $row->year_level,
            'curriculum_id' => $row->curriculum_id,
            'curriculum_year' => $row->curriculum_year,
            'semesters' => []
        ];
        return count($yearLevels) - 1;
    }

    private function findOrCreateSemester(&$semesters, $row)
    {
        foreach ($semesters as $index => $semester) {
            if ($semester['semester'] == $row->semester) {
                return $index;
            }
        }

        $semesters[] = [
            'semester' => $row->semester,
            'sections' => [] 
        ];
        return count($semesters) - 1;
    }

    private function assignCourseToSectionAndSchedule($row, $section, &$sections)
    {
        // Step 3.1: Check if course_assignment_id is null
        if (is_null($row->course_assignment_id)) {
            return;
        }

        // Step 3.2: Find or create the section in the response array
        $sectionIndex = $this->findOrCreateSection($sections, $section);

        // Step 3.3: Check if the course is already assigned to the section in `section_courses`
        $existingSectionCourse = DB::table('section_courses')
            ->where('sections_per_program_year_id', $section->sections_per_program_year_id)
            ->where('course_assignment_id', $row->course_assignment_id)
            ->first();

        if (!$existingSectionCourse) {
            // Assign course to the section in `section_courses`
            $sectionCourseId = DB::table('section_courses')->insertGetId([
                'sections_per_program_year_id' => $section->sections_per_program_year_id,
                'course_assignment_id' => $row->course_assignment_id,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        } else {
            // Use existing section_course_id
            $sectionCourseId = $existingSectionCourse->section_course_id;
        }

        // Step 3.4: Check if a schedule already exists for this section_course
        $existingSchedule = DB::table('schedules')
            ->where('section_course_id', $sectionCourseId)
            ->first();

        if ($existingSchedule) {
            // Fetch faculty and room details if they are assigned
            $faculty = $existingSchedule->faculty_id ? DB::table('faculty')
                ->join('users', 'faculty.user_id', '=', 'users.id')
                ->where('faculty.id', $existingSchedule->faculty_id)
                ->select('faculty.id', 'users.name as professor', 'faculty.faculty_email')
                ->first() : null;

            $room = $existingSchedule->room_id ? DB::table('rooms')
                ->where('room_id', $existingSchedule->room_id)
                ->first() : null;

            $scheduleId = $existingSchedule->schedule_id;
        } else {
            // Since the admin will assign faculty and room later, set them to null
            $faculty = null;
            $room = null;

            // Insert schedule into the `schedules` table with null values
            $scheduleId = DB::table('schedules')->insertGetId([
                'section_course_id' => $sectionCourseId,
                'day' => null, // Admin will assign
                'start_time' => null, // Admin will assign
                'end_time' => null, // Admin will assign
                'faculty_id' => null, // Admin will assign
                'room_id' => null, // Admin will assign
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }

        // Step 3.5: Fetch the populated schedule (either existing or newly created)
        $schedule = DB::table('schedules')
            ->where('section_course_id', $sectionCourseId)
            ->first();

        // Step 3.6: Append the course to the section's courses array
        // Ensure 'courses' key exists
        if (!isset($sections[$sectionIndex]['courses'])) {
            $sections[$sectionIndex]['courses'] = [];
        }

        // Avoid duplicating course entries in the response
        $existingCourse = collect($sections[$sectionIndex]['courses'])->firstWhere('course_assignment_id', $row->course_assignment_id);
        if ($existingCourse) {
            // Optionally, update the existing course's schedule if needed
            return;
        }

        // Assigning null if faculty or room is not set
        $professor = $faculty ? $faculty->professor : null;
        $faculty_id = $faculty ? $faculty->id : null;
        $faculty_email = $faculty ? $faculty->faculty_email : null;

        $room_id = $room ? $room->room_id : null;
        $room_code = $room ? $room->room_code : null;

        $sections[$sectionIndex]['courses'][] = [
            'course_assignment_id' => $row->course_assignment_id,
            'course_id' => $row->course_id,
            'course_code' => $row->course_code,
            'course_title' => $row->course_title,
            'lec_hours' => $row->lec_hours,
            'lab_hours' => $row->lab_hours,
            'units' => $row->units,
            'tuition_hours' => $row->tuition_hours,

            // Encapsulating schedule details in a "schedule" object
            'schedule' => [
                'schedule_id' => $scheduleId,   // The newly added or existing schedule ID
                'day' => $schedule->day, // Can be null
                'start_time' => $schedule->start_time, // Can be null
                'end_time' => $schedule->end_time // Can be null
            ],

            // Adding professor and faculty details
            'professor' => $professor, // null if not assigned
            'faculty_id' => $faculty_id,  // null if not assigned
            'faculty_email' => $faculty_email, // null if not assigned

            // Encapsulating room details in a "room" object
            'room' => [
                'room_id' => $room_id, // null if not assigned
                'room_code' => $room_code // null if not assigned
            ]
        ];
    }

    private function findOrCreateSection(&$sections, $section)
    {
        foreach ($sections as $index => $sec) {
            if ($sec['section_per_program_year_id'] == $section->sections_per_program_year_id) {
                return $index;
            }
        }

        $sections[] = [
            'section_per_program_year_id' => $section->sections_per_program_year_id,
            'section_name' => $section->section_name,
            'courses' => []
        ];

        return count($sections) - 1;
    }
}