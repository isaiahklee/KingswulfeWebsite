<html>

<head>
    <meta charset="utf-8" />

    <title>Isaiah's Oh No</title>

    <link rel="stylesheet" type="text/css" href="css/index-style.css" />

    <!-- favicon.ico and apple-touch-icon.png? in root directory -->
    <link rel="shortcut icon" href="favicon.ico" />
</head>

<body id="main">
    <div id="big-wrapper">

        <!-- this is -->
        <?php include('_nav.php');?>
        <!-- wild! -->
        <br />

        <article>
            Welcome <?php echo $_POST["fname"]." ".$_POST["lname"]; ?><br>
            Your email address is: <?php echo $_POST["email"]; ?><br>
            You identify as <?php echo $_POST["gender"]; ?><br>
            Your favorite meat/s is/are: <?php 
    foreach($_POST["meat"] as $result) {
        echo $result." " ;
    }?><br>
            Your favorite activity is: <?php echo $_POST["activities"]; ?><br>
            You said, "<?php echo $_POST["bio"]; ?>" about yourself.<br>
            You submitted <?php echo $_POST["cdata"]; ?>, but that's not your c drive, is it. <br>

        </article>

        <?php
            //check to make sure required field are filled out? then, send data to my sql server as an entry.
          
            // Required field names
            $required = array('fname', 'lname', 'email', 'gender', 'meat', 'activities', 'bio', 'cdata');

            // Loop over field names, make sure each one exists and is not empty
            $error = false;
            foreach($required as $field) {
                if (empty($_POST[$field])) {
                    $error = true;
                }
            }
            if($error){
                echo "<br />"."There has been an error and not all info was submitted correctly, please go back and try again";
            }else{
                //post to the server for data collection
            }
        ?>

        <footer id="footer">
            <p id="C4"></p>
            <span id="footer-copyright-text">
                Copyright kingswulfe cpyYear() Isaiah K. Lee. All Rights Reserved.
            </span>
        </footer>
    </div>
</body>

<script src="js/footer.js"></script>

</html>