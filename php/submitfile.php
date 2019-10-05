<?php
    //opens connection to mysql server
    include('connection.php');
    //select DB
    $userDB = mysqli_select_db($dbc, 'kingswul_test');
    if(!$userDB){
        die('Can\'t connect to DB');
    }//else{
     //   echo('connected').'<br/>';
    //}

    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    //query db to see if that user exists
    $userQuery = "SELECT * FROM users WHERE username='$username'";
    $result = mysqli_query($dbc, $userQuery);
    
    $num = mysqli_num_rows($result);
    //echo $num;
    if($num == 0){
        //user doesn't exist
        header("Location:../login-stuff/registration-headers/wrongusername.php");
        return;
    }
    //check password
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