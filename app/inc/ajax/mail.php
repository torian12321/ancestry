<?php

if (
isset($_POST['name'])    && $_POST['name']    	!= '' &&
isset($_POST['surname']) && $_POST['surname']   != '' &&
isset($_POST['email']) 	 && $_POST['email'] 	!= '' && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
){
	$to      = $_POST['email'];
    $subject = "Ancestry subscription";
    $header  = "MIME-Version: 1.0\r\n" . "From: info@ancestry.ie \r\n" . "Content-Type: text/html; charset=iso-8859-1\r\n";
	$message =
		"Hi "    . $_POST['name']  . "\n" .
		"Your subscription to ancestry has been successfully performed.\n\n" .
		"Thanks for contact us.";

	mail($to, $subject, $message, $header);

	// Any aditional action, like add user data to a database, should be done here

    echo '1';
}else{
	echo '0';
}
?>