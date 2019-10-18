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
    <link rel="stylesheet" type="text/css" href="css/index-style.css" />

    <!-- favicon.ico and apple-touch-icon.png? in root directory -->
    <link rel="shortcut icon" href="../images/favicon.ico" />

    <!-- JS goes here if we want to load it during page load -->

</head>

<body>
    <div id="big-wrapper">
        <?php include('phpincludes/_nav.php');?>
        <br />
        <div>
            <h1>Attention:</h1>
            <h2>This project is currently under maintenance and is not online right now.</h2>
            <br />
            <br />
            <br />
            <h3>
                This page will take a url, run a python script, and return a list of unusual words from that url.
                In this context, an unusual word is defined to be not in the top 10'000 as determined by n-gram
                frequency
                analysis of the Google's Trillion Word Corpus.
            </h3>
            <br />
            <div id="text-boxes">
                <form>
                    URL to scrape: <input id="scrapeURL" type="text" size="60">
                    <input type="button" onclick=changeHref() value="Submit" />
                </form>
                <br />
                <p>please ensure to write the full url, including http:// or https://</p>
                <br />
                <form>
                    Unusual Words:
                    <br />
                    <textarea readonly id="unusualtext" rows="10"
                        cols="60"><?php include('shell_exec.php');?></textarea>
                </form>
            </div>
        </div>
        <?php include('phpincludes/_footer.php');?>
    </div>
    <script src="js/unusualwords.js"></script>
    <script src="js/footer.js"></script>
</body>

</html>