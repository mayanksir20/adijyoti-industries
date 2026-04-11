<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect Form Data
    $name = strip_tags(trim($_POST["full_name"]));
    $phone = strip_tags(trim($_POST["phone_number"]));
    $interest = strip_tags(trim($_POST["interest"]));

    // --- CONFIGURATION ---
    $to = "adijyotiindustries@gmail.com"; // Yahan apni mail id dalo
    $subject = "New Quick Inquiry: $interest";

    // Email Content
    $email_content = "You have received a new inquiry from your website FAQ page.\n\n";
    $email_content .= "Full Name: $name\n";
    $email_content .= "Phone Number: $phone\n";
    $email_content .= "Interest: $interest\n";

    // Email Headers
    $headers = "From: Adijyoti Web <noreply@adijyotiindustries.com>\r\n";
    $headers .= "Reply-To: $to\r\n";

    // Send Email
    if (mail($to, $subject, $email_content, $headers)) {
        // Success: Redirect back to FAQ with a success message
        echo "<script>alert('Thank you! We will contact you soon.'); window.location.href='index.html';</script>";
    } else {
        // Error
        echo "<script>alert('Oops! Something went wrong. Please try again.'); window.history.back();</script>";
    }
} else {
    // Redirect if someone tries to access file directly
    header("Location: index.html");
    exit;
}
?>