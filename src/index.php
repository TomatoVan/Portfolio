<?php 

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$text = $_POST['text'];

	$mailTo = "kovzel.leo@gmail.com";
	$headers = "From : ".$email;
	$txt = "You have received an e-mail from ".$name.".\n\n".$text;

	mail($mailTo, $txt, $headers);
	header("Location: index.php?mailsend");
}

