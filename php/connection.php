<?php
    $db_config = include('../../config/config.php');
    $servername = $db_config['db_host'];
    $serverusername = $db_config['db_user'];
    $serverpass = $db_config['db_pass'];
    //opens connection to mysql server
    $dbc = mysqli_connect($servername, $serverusername, $serverpass);
    if(!$dbc){
        die('Connection failed: '.mysqli_connect_error());
    }
    //select DB
    //$userDB = mysqli_select_db($dbc, 'realtest');
    //if(!$userDB){
     //   die('Can\'t connect to DB');
    //}
?>