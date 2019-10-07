<?php
    include('../_sessionstart.php');
    //opens connection to mysql server
    include('connection.php');
    //select DB
    $userDB = mysqli_select_db($dbc, 'realtest');
    if(!$userDB){
        die('Can\'t connect to DB');
    }//else{
     //   echo('connected').'<br/>';
    //}
    
    if ( !isset($_POST['username'], $_POST['password']) ) {
        // Could not get the data that should have been sent.
        die ('Please fill both the username and password field!');
    }
    
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    //query db to see if that user exists 
    //TODO ADD SECURITY
    $userQuery = "SELECT * FROM users WHERE username='$username'";
    $result = mysqli_query($dbc, $userQuery);
    $num = mysqli_num_rows($result);
    if($num == 0){
        //user doesn't exist
        header("Location:../login-stuff/registration-headers/wrongusername.php");
        return;
    }

    //check password
    //TODO add sql security
    $passQuery = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = mysqli_query($dbc, $passQuery);
    $num = mysqli_num_rows($result);
    if($num == 0){
        //pass is wrong
        header("Location:../login-stuff/registration-headers/wrongpassword.php");
        return;
    }

    header("Location:../login-stuff/registration-headers/successfullogin.php");

    //test
    //$query="UPDATE users SET email='doesThisWork' WHERE id=2";
    //$result = mysqli_query($dbc, $query);
    //echo $result;
?>