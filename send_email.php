<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Construct email message
    $email_message = "First Name: $first_name\n";
    $email_message .= "Last Name: $last_name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Phone: $phone\n";
    
    // Additional text before the subject
    $extra_text = "New Message From Nacissu Website: ";
    
    $email_subject = $extra_text . $subject; // Concatenate the additional text and the subject
    
    $email_message .= "Subject: $email_subject\n"; // Include the subject in the email message
    $email_message .= "Message:\n$message";

    // Send email
    $to = "nacissu0@gmail.com"; // Change this to your email address
    $headers = "From: $email";
    if (mail($to, $email_subject, $email_message, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "There was an error sending your message.";
    }
} else {
    // If someone tries to access this file directly, redirect them to the contact page
    header("Location: contact.html");
    exit;
}

