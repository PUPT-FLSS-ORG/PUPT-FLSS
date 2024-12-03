<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\PreferenceController;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Test welcome blade
Route::get('/', function () {
    return view('welcome');
});

// Test preferences submitted email
Route::get('/test-preferences-submitted', function () {
    $data = [
        'faculty_name' => 'Juan Dela Cruz',
    ];
    return view('emails.preferences_submitted', $data);
});


Route::get('/test-preferences-all-open', function () {
    $faculty_name = 'Juan Dela Cruz';
    $global_deadline = '2024-11-23'; // Example deadline
    $deadline_date = Carbon::parse($global_deadline);
    $today = Carbon::now();
    $days_left = $deadline_date->diffInDays($today);

    $data = [
        'faculty_name' => $faculty_name,
        'global_deadline' => $deadline_date->format('M d, Y'),
        'days_left' => $days_left,
    ];

    return view('emails.preferences_all_open', $data);
});

Route::get('/test-preferences-single-open', function () {
    $faculty_name = 'Juan Dela Cruz';
    $individual_deadline = '2024-11-23'; // Example deadline
    $deadline_date = Carbon::parse($individual_deadline);
    $today = Carbon::now();
    $days_left = $deadline_date->diffInDays($today);

    $data = [
        'faculty_name' => $faculty_name,
        'individual_deadline' => $deadline_date->format('M d, Y'), // Format the Carbon date here
        'days_left' => $days_left,
    ];

    return view('emails.preferences_single_open', $data);
});

// Test load schedule published email
Route::get('/test-load-schedule-published', function () {
    $data = [
        'faculty_name' => 'Juan Dela Cruz',
        // Add more data if required by the template
    ];
    return view('emails.load_schedule_published', $data);
});


// Test change request email
Route::get('/test-change-request', function () {
    $data = [
        'faculty' => (object)[
            'last_name' => 'Dela Cruz',
            'first_name' => 'Juan',
            'middle_name' => 'J',
            'suffix_name' => 'Sr.',
            'email' => 'juan.delacruz@example.com',
        ],
        'admin' => (object)[
            'last_name' => 'Ferrer',
            'first_name' => 'Marissa',
            'middle_name'=> 'L.',
            'email' => 'marissa.ferrer@example.com',
        ],
        'admin_dashboard_link' => 'https://app.pupt-flss.com/admin-dashboard',
    ];
    return view('emails.change_request', $data);
});
