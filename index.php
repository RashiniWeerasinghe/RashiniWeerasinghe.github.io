<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mailHeader = "From: ". $name. "<". $email . ">\r\n" ;

$recipient = 'hasithasuranjana12@gmail.com';

mail($recipient,$name,$message,$mailHeader ) or die('Error!');

echo('Message sent!')
?>