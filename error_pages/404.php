<?php 
    $corepath = $_SERVER['DOCUMENT_ROOT'];
    $sesspass = $corepath .= '/phpincludes/_sessionstart.php';
    include($sesspass);
?>

<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8" />

    <title>Isaiah's Oh No</title>

    <link rel="stylesheet" type="text/css" href="../css/index-style.css" />

    <!-- favicon.ico and apple-touch-icon.png? in root directory -->
    <link rel="shortcut icon" href="favicon.ico" />
</head>

<body>
    <div id="big-wrapper">

        <?php include('../phpincludes/_nav.php');?>

        <br />
        <h1><strong>404 page not found</strong></h1>
        <br />
        <p>It looks like the page you are looking for doesn't exist.</p>
        <br />
        <?php include('../phpincludes/_footer.php');?>
    </div>

    <script src="../js/footer.js"></script>
</body>

</html>