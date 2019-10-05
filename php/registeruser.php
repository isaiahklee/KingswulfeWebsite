<?php
    //opens connection to mysql server
    include('connection.php');

    //select DB in server
    $userDB = mysqli_select_db($dbc, 'kingswul_test');
    if(!$userDB){
        die('Can\'t connect to DB');
    }

    //Sanity checking on user input (BUT, I want to do this with with javascript eventually...) 
    //trim to prevent injection attacks
    $email = trim($_POST['email']);
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $password2 = trim($_POST['password2']);
    
    
    //check email is proper format
    if (filter_var($email, FILTER_VALIDATE_EMAIL)){
        //test for dup emails
        $sanityQuery2 = "SELECT * FROM users WHERE email='$email'";
        $result = mysqli_query($dbc, $sanityQuery2);
        $num = mysqli_num_rows($result);

        if($num == 0){
            //email is good, check name

            if (preg_match("/^[A-Za-z0-9]{6,20}$/", $username)){
                //test for dup names
                $sanityQuery = "SELECT * FROM users WHERE username='$username'";
                $result = mysqli_query($dbc, $sanityQuery);
                $num = mysqli_num_rows($result);

                if($num == 0){
                    //name and email are good, 
                    //check if two entered passwords are same
                    if($password == $password2){

                        //gen rand confirmation code
                        $confirm_code = md5(uniqid(rand()));

                        //strip tags to stop hackz
                        $username = strip_tags($username);
                        $password = strip_tags($password);
                        $email = strip_tags($email);

                        //insert into temp DB
                        $sql = "INSERT INTO temp SET code='$confirm_code', username='$username', password='$password', email='$email'";
                        $result = mysqli_query($dbc, $sql);
                        $sentmail = FALSE;
                        if($result){
                            //do stuff
                            $message = "Your confirmation link \r\n Click on this link to activate your account.\r\n";
                            $message .= "http://www.kingswulfe.com/php/confirmation.php?passkey="."$confirm_code";
                            $headers = 'From: isaiahlee@kingswulfe.com' . "\r\n" . 
                                        'X-Mailer: PHP/' . phpversion();
                            $sentmail=mail($email, 'Registration Confirmation', $message, $headers);
                            header("Location:../login-stuff/registration-headers/success.php");
                            //var_dump($sentmail);
                            //sentMail($sentmail);
                            //return;
                        }else{
                            //oh no
                            echo("Didn't find result in DB :-O");
                        }
                    }else{
                        header("Location:../login-stuff/registration-headers/passNoMatch.php");
                        return;
                    }
                }else{
                    header("Location:../login-stuff/registration-headers/nameInUse.php");
                    return;
                }  
            }else{
                header("Location:../login-stuff/registration-headers/InvalidName.php");
                return;
            }
        }else{
            header("Location:../login-stuff/registration-headers/emailInUse.php");
            return;
        }
    }else{   
        header("Location:../login-stuff/registration-headers/InvalidEmail.php");
        return;
    }

    function sentMail($sent){
        //if the email is successfully sent
        if($sent){
            echo("Your confirmation link has been sent to your email");
            
        }else{
            echo("Cannot send confirmation link to your e-mail address.");
            
        }
    }

    //insert into DB
    //$query="INSERT INTO users (username, email, password) VALUES ('".$_POST['username']."', 'default@default.com', '".$_POST['password']."')";
    //$result = mysqli_query($dbc, $query);
    //echo $result;
?>