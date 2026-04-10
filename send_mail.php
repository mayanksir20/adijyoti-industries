<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Form se data nikalna (Security ke sath)
    $name     = strip_tags(trim($_POST["name"]));
    $phone    = strip_tags(trim($_POST["phone"]));
    $category = $_POST["category"];
    $bank     = $_POST["bank_name"];
    $message  = strip_tags(trim($_POST["message"]));

    // 2. Aapka Target Gmail Address
    $to = "adijyotiindustriesopc@gmail.com"; 
    
    // 3. Email ka Subject
    $subject = "New Inquiry: $name - Adijyoti Industries";

    // 4. Email ki Body (Kaise dikhega aapko Gmail mein)
    $email_body = "Aapko website se ek nayi inquiry mili hai:\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Interested In: $category\n";
    $email_body .= "Current Bank: $bank\n\n";
    $email_body .= "Message:\n$message\n";

    // 5. Headers (Professional domain email use karein taaki spam na ho)
    $headers = "From: info@adijyotiindustries.com\r\n"; 
    $headers .= "Reply-To: $to\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 6. Mail bhejna
    if (mail($to, $subject, $email_body, $headers)) {
        // Success alert aur redirect
        echo "<script>alert('Thank you! Inquiry sent to Adijyoti Industries.'); window.location.href='index.html';</script>";
    } else {
        // Error handling
        echo "<script>alert('Sorry, failed to send inquiry. Please try again.'); window.history.back();</script>";
    }
} else {
    echo "Direct access restricted.";
}
?>