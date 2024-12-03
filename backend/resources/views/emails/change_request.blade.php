<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Faculty Preference Change Request</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border: 1px solid #e4e4e4;">
        <div style="text-align: center; padding: 20px 0; background-color: #800000; color: #fff;">
            <h1 style="margin: 0;">Preference Change Request</h1>
        </div>
        <div style="padding: 20px;">
            <p style="line-height: 1.6; color: #333; text-align: justify;">
                Dear {{ $admin->last_name }}, {{ $admin->first_name }} 
                @if($admin->middle_name) {{ $admin->middle_name }} @endif,
            </p>
            <p style="line-height: 1.6; color: #333; text-align: justify;">The following faculty member has submitted a request to change their preferences:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                    <td style="padding: 10px; border: 1px solid #e4e4e4;"><strong>Faculty Name:</strong></td>
                    <td style="padding: 10px; border: 1px solid #e4e4e4;">
                        {{ $faculty->last_name }}, {{ $faculty->first_name }}
                        @if($faculty->middle_name) {{ $faculty->middle_name }}@endif
                        @if($faculty->suffix_name) {{ $faculty->suffix_name }} @endif
                    </td>
                </tr>

                <tr>
                    <td style="padding: 10px; border: 1px solid #e4e4e4;"><strong>Email:</strong></td>
                    <td style="padding: 10px; border: 1px solid #e4e4e4;">{{ $faculty->email }}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #e4e4e4;"><strong>Request Type:</strong></td>
                    <td style="padding: 10px; border: 1px solid #e4e4e4;">Preference Change</td>
                </tr>
            </table>
            
            <p style="line-height: 1.6; color: #333; text-align: justify; margin-top: 20px;">Please review this request at your earliest convenience. You can manage this request through the admin dashboard.</p>
            
            <a href="{{ $admin_dashboard_link }}" style="display: block; width: 200px; margin: 20px auto; padding: 10px 0; text-align: center; background-color: #800000; color: #fff; text-decoration: none; border-radius: 5px;">Review Request</a>
        </div>
    </div>
    <div style="background-color: #f4f4f4; text-align: center; padding: 10px; font-size: 12px; color: #888;">
        <p>If you have any questions, please contact us at <a href="mailto:puptflss@gmail.com" style="color: #800000; text-decoration: none;">pupt.flss2025@gmail.com</a>.</p>
        <div style="margin: 10px 0;">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" style="width: 24px; margin: 0 5px; display: inline-block; vertical-align: middle;"></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" style="width: 24px; margin: 0 5px; display: inline-block; vertical-align: middle;"></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style="width: 24px; margin: 0 5px; display: inline-block; vertical-align: middle;"></a>
        </div>
        <p>&copy; 2024 PUP-T FLS SYSTEM. All rights reserved.</p>
    </div>
</body>
</html>
