<?php
session_start();
session_destroy();
header('Location: /login-stuff/registration-headers/youhaveloggedout.php');
exit;
?>