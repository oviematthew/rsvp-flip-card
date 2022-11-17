<?php
$subject = 'You Got Message'; // Subject of your email
$to = 'ovieenams@gmail.com';  //Recipient's E-mail




$fullname = $_REQUEST['fullname'];
$guests = $_REQUEST['guests'];


$email_from = $name.'<'.$email.'>';


$message .= 'Name : ' . $fullname . "\n";
$message .= 'Number Of Guests : ' . $guests . "\n";


if (@mail($to, $subject, $message, $email_from))
{
	// Transfer the value 'sent' to ajax function for showing success message.
	header("Location: index.html");
    
    echo("Filled Successfully");
}
else
{
	// Transfer the value 'failed' to ajax function for showing error message.
	header("Location: failed.html");
}
?>