<?php

namespace App\Http\Controllers;

use App\Jobs\SendFacultyPreferenceEmailJob;
use App\Jobs\SendFacultyScheduleEmailJob;
use App\Models\Faculty;
use App\Models\PreferencesSetting;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{

    /**
     * Send email to all faculty members to submit their preferences.
     */
    public function emailAllFacultyPreferences()
    {
        $faculties = Faculty::all();

        foreach ($faculties as $faculty) {
            SendFacultyPreferenceEmailJob::dispatch($faculty);
        }

        // Return a response after the jobs are dispatched
        return response()->json(['message' => 'Preference emails are being sent asynchronously'], 200);
    }

    /**
     * Send email to a specific faculty to submit their preferences.
     */
    public function emailSingleFacultyPreferences(Request $request)
    {
        $facultyId = $request->input('faculty_id');

        // Retrieve the faculty details from the Faculty model
        $faculty = Faculty::find($facultyId);
        if (!$faculty) {
            return response()->json(['message' => 'Faculty not found'], 404);
        }

        // Retrieve preferences settings for the faculty to check for individual deadline
        $settings = PreferencesSetting::where('faculty_id', $facultyId)->first();
        if (!$settings || !$settings->individual_deadline) {
            return response()->json(['message' => 'Individual deadline not set for this faculty'], 404);
        }

        // Parse the deadline and calculate the days left
        $individualDeadline = Carbon::parse($settings->individual_deadline);
        $daysLeft = $individualDeadline->diffInDays(Carbon::now());

        // Prepare data for the email
        $data = [
            'faculty_name' => $faculty->user->name,
            'email' => $faculty->user->email,
            'individual_deadline' => $individualDeadline->format('M d, Y'),
            'days_left' => $daysLeft,
        ];

        // Send the email
        Mail::send('emails.preferences_single_open', $data, function ($message) use ($data) {
            $message->to($data['email'])
                ->subject('Load & Schedule Preferences Submission Update');
        });

        // Return response with individual deadline and days left
        return response()->json([
            'message' => 'Preference status notification sent successfully',
            'individual_deadline' => $individualDeadline->format('M d, Y'),
            'days_left' => $daysLeft,
        ], 200);
    }

    //========
    public function emailPrefSubmitted(Request $request)
    {
        $facultyId = $request->input('faculty_id');

        $faculty = Faculty::find($facultyId);

        if ($faculty) {
            $this->sendPreferencesSubmittedNotification($faculty);
            return response()->json(['message' => 'Preferences submission notification sent successfully'], 200);
        } else {
            return response()->json(['message' => 'Faculty not found'], 404);
        }
    }

    protected function sendPreferencesSubmittedNotification($faculty)
    {
        $data = [
            'faculty_name' => $faculty->user->name,
            'email' => $faculty->user->email,
        ];

        Mail::send('emails.preferences_submitted', $data, function ($message) use ($data) {
            $message->to($data['email'])
                ->subject('Your Load & Schedule Preferences has been submitted successfully');
        });
    }

    //========

    /**
     * Send email to a specific faculty to view their load and schedule.
     */
    public function emailAllFacultySchedule()
    {
        $faculties = Faculty::all();

        foreach ($faculties as $faculty) {
            SendFacultyScheduleEmailJob::dispatch($faculty);
        }

        return response()->json(['message' => 'Emails are being sent asynchronously'], 200);
    }

    /**
     * Send email to a specific faculty to view their load and schedule.
     */
    public function emailSingleFacultySchedule(Request $request)
    {
        $facultyId = $request->input('faculty_id');
        $faculty = Faculty::find($facultyId);

        if (!$faculty) {
            return response()->json(['message' => 'Faculty not found'], 404);
        }

        $data = [
            'faculty_name' => $faculty->user->name,
            'email' => $faculty->user->email,
        ];

        Mail::send('emails.load_schedule_published', $data, function ($message) use ($data) {
            $message->to($data['email'])
                ->subject('Your Official Load & Schedule is now available');
        });

        return response()->json(['message' => 'Faculty load and schedule email notification sent successfully'], 200);
    }

    public function notifyAdminsOfPreferenceChange(Request $request)
    {
        $facultyId = $request->input('faculty_id');
    
        // Retrieve the faculty details
        $faculty = Faculty::find($facultyId);
        if (!$faculty || !$faculty->user) {
            return response()->json(['message' => 'Faculty not found or missing user details'], 404);
        }
    
        // Retrieve all active admins
        $admins = \App\Models\User::where('role', 'admin')
            ->where('status', 'Active')
            ->get();
    
        if ($admins->isEmpty()) {
            return response()->json(['message' => 'No active admins found'], 404);
        }
    
        // Dispatch a job for each admin
        foreach ($admins as $admin) {
            \App\Jobs\NotifyAdminOfPreferenceChangeJob::dispatch($faculty, $admin);
        }
    
        return response()->json([
            'message' => 'Admin notifications are being sent asynchronously',
        ], 200);
    }
    
}
