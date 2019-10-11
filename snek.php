<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8" />

    <title>Isaiah's Info</title>

    <link rel="stylesheet" type="text/css" href="css/snek.css" />

    <!-- favicon.ico and apple-touch-icon.png? in root directory -->
    <link rel="shortcut icon" href="../images/favicon.ico" />
</head>

<body>
    <div id="big-wrapper">

        <?php include('phpincludes/_nav.php');?>

        <!--Intro and Instructions (Make NAV and boxes for formatting)-->
        <article id="instructions">
            <br \>
            <p>This is a game of snake. The goal is to fill the board.</p>
            <p>Every point you collect lengthens your body by one.</p>
            <p>Be careful not to hit the walls of the board or cross your own body.</p>
            <p>WASD to move, and trying to move backwards into your own body stalls the game giving you a moment to
                think.
            </p>
            <br \>
        </article>
        <div id="snek-canvas">

        </div>
        <?php include('phpincludes/_footer.php');?>
    </div>
</body>

<script src="js/footer.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js"></script>
<script src="js/snek/snek-main.js"></script>
<script src="js/snek/snakebody.js"></script>


</html>