<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8" />

    <title>Wii, would like to play</title>

    <link rel="stylesheet" type="text/css" href="css/index-style.css" />

    <style>
    #drag-stuff p {
        font-size: 20px;
        font-weight: bold;

    }

    #top-drag,
    #bot-drag {
        border: black 1px dotted;
        border-radius: 10px;
        height: 260px;
        padding: 6px;
        margin: 6px;
        background-image: url("images/wallet.jpg");
    }

    #top-drag {
        background-image: url("images/sidewalk.jpg");
    }

    .game-button {
        background-color: rgb(37, 146, 132);
        border: black solid 1px;
        border-radius: 1px;
        color: white;
        padding: 10px 25px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        width: 160px;
    }

    .game-button:hover {
        background-color: green;
    }
    </style>

    <!-- favicon.ico and apple-touch-icon.png? in root directory -->
    <link rel="shortcut icon" href="favicon.ico" />
</head>

<body>

    <div id="big-wrapper">
        <?php include('_nav.php');?>

        <section>
            <br />
            <h3 class="intro-paragraph">Welcome to the projects page. </h3>
            <h3 class="intro-paragraph">This page is a collection of various projects, games, and curiosities I've
                worked
                on.</h3>
            <br />
            <form name="playForm">
                <input type="checkbox" name="wantsToPlay" /> I accept the dangers inherent in attempting these games
                <br />
                <br />
                <input type="button" class="game-button" onclick="boxAuth('Slithery Snake');" value="Slithery Snake" />
                <br />
                <br />
                <input type="button" class="game-button" onclick="boxAuth('Ray Stroke');" value="Ray Stroke" />
                <br />
                <br />
                <input type="button" class="game-button" onclick="boxAuth('Unusual Words');" value="Unusual Words" />
            </form>
            <!--
            <br />
            <a href="js-games/snek.html">Click for snek game</a>
            <br />
            <a href="js-games/ray.html">Click for ray stroke</a>
            -->

        </section>
        <br />
        <br />
        <h2>You happen to have stumbled onto some loose bitcoins. <br /> Quick, throw them into your wallet!</h2>
        <br />
        <div id="drag-stuff">
            <p>The Ground</p>
            <section id="top-drag" ondrop="drop(event)" ondragover="allowDrop(event)">

                <img src="images/coin.png" height=240px width=240px class="picture" draggable="true"
                    ondragstart="drag(event)" id="drag1">
                <img src="images/coin.png" height=240px width=240px class="picture" draggable="true"
                    ondragstart="drag(event)" id="drag2">
                <img src="images/coin.png" height=240px width=240px class="picture" draggable="true"
                    ondragstart="drag(event)" id="drag3">
            </section>
            <p>Your Wallet</p>
            <section id="bot-drag" ondrop="drop(event)" ondragover="allowDrop(event)">

            </section>
        </div>
        <?php include('_footer.php');?>
    </div>
    <script src="js/game.js"></script>
    <script src="js/footer.js"></script>

</body>

</html>