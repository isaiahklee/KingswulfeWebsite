<?php 
    $corepath = $_SERVER['DOCUMENT_ROOT'];
    $sesspass = $corepath .= '/phpincludes/_sessionstart.php';
    include($sesspass);
?>

<!DOCTYPE HTML>
<html lang="en">

<head>
    <meta charset="utf-8" />

    <title>Isaiah Kingswulfe Lee</title>

    <!-- css stylesheet\s location\s -->
    <link rel="stylesheet" type="text/css" href="../css/index-style.css" />

    <!-- favicon.ico and apple-touch-icon.png? in root directory -->
    <link rel="shortcut icon" href="images/favicon.ico" />

    <!-- JS goes here if we want to load it during page load -->

</head>

<body>
    <div id="big-wrapper">

        <?php include('../phpincludes/_nav.php');?>

        <br />

        <!-- TO DO add html core with php functionality, autofilling page based on who is logged in. 
                somehow restrict access to this page if the user is not logged in
                because it would just display a bunch of errors
            I want the ability to have a user sprite. some web options. and a thing that 
            when you type in an unlock code, unlocks (so displays new) web links to "restricted" parts of the website,
            like the game map for mals dnd. 
            -->
        <div id='user-menu'>
            <form>
                <input id="user-logout-button" type='button' value='Logout'
                    onclick='window.location.href = \"/login-stuff/logout.php\"' />
                <br />
                <input id="user-picture-button" type='button' value='Change Profile Picture'
                    onclick='window.location.href = \"\"' />
                <br />
                <input id="user-delete-button" type='button' value='Delete Account'
                    onclick='window.location.href = \"\"' />
            </form>
        </div>

        <?php include('../phpincludes/_footer.php');?>
    </div>
    <!-- JS Goes here if it needs to be loaded after page-->
    <script src="../js/footer.js"></script>
</body>

</html>