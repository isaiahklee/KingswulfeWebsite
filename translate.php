<?php 
    $corepath = $_SERVER['DOCUMENT_ROOT'];
    $sesspass = $corepath .= '/phpincludes/_sessionstart.php';
    include($sesspass);
?>

<!DOCTYPE HTML>
<html lang="en">

<head>
    <meta charset="utf-8" />

    <title>From Russia with love</title>

    <!-- css stylesheet\s location\s -->
    <link rel="stylesheet" type="text/css" href="css/index-style.css" />

    <!-- favicon.ico and apple-touch-icon.png? in root directory -->
    <link rel="shortcut icon" href="images/favicon.ico" />

    <!-- JS goes here if we want to load it during page load -->

</head>

<body>
    <div id="big-wrapper">
        <?php include('phpincludes/_nav.php');?>

        <h1>
            From Russia with love
        </h1>
        <div id="translation-station">
            <form>
                <br />
                Sentence to Translate
                <br />
                <textarea placeholder="Type here..." id="transText" rows="5" cols="40"></textarea>
            </form>
            <form>
                <input type="button" value="Translate" id="transbutton" />
            </form>
            <a href=" http://translate.yandex.com/" title="from russia, with love">Powered by
                Yandex.Translate</a>
            <form>
                <br />
                Translated Sentence
                <br />
                <textarea readonly id="transText2" rows="5" cols="40"></textarea>
            </form>
        </div>
        <?php include('phpincludes/_footer.php');?>
    </div>

    <script src="js/footer.js"></script>
    <script src="js/langMash.js"></script>

</body>

</html>