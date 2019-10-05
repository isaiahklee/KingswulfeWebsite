<?php
    //opens connection to mysql server
    include('connection.php');
    //select DB
    $userDB = mysqli_select_db($dbc, 'kingswul_test');
    if(!$userDB){
        die('Can\'t connect to DB');
    }//else{
    //    echo('connected').'<br/>';
    //}

    $passkey = $_GET['passkey'];
    $sql1 = "SELECT * FROM temp WHERE code='$passkey'";
    $result1 = mysqli_query($dbc, $sql1);

    if($result1){
        //is key in table?
        $count = mysqli_num_rows($result1);
        
        //if the passkey is in temp DB, retrieve the data
        if($count == 1){
            $rows=mysqli_fetch_array($result1);
            $namex = $rows['username'];
            $emailx = $rows['email'];
            $passwordx = $rows['password'];

            //remove spaces to prevent sql attacks
            $name = str_replace(' ', '', $namex);
            $email = str_replace(' ', '', $emailx);
            $password = str_replace(' ', '', $passwordx);

            //insert into the users table
            $sql2 = "INSERT INTO users SET username='$name', email='$email', password='$password'";
            $result2 = mysqli_query($dbc, $sql2);



        }else{
            echo "wrong conf code";
        }
        if($result2){
            header("Location:confirmation2.php");
            //remove from temp
            $sql3="DELETE FROM temp WHERE code = '$passkey'";
            $result3=mysqli_query($dbc, $sql3);
        }
    }
?>