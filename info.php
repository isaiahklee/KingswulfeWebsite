<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8" />

    <title>Isaiah's Info</title>

    <link rel="stylesheet" type="text/css" href="css/index-style.css" />

    <!-- favicon.ico and apple-touch-icon.png? in root directory -->
    <link rel="shortcut icon" href="favicon.ico" />
</head>

<body>

    <div id="big-wrapper">

        <?php include('phpincludes/_nav.php');?>

        <!--Intro and Instructions (Make NAV and boxes for formatting)-->
        <article id="info=stuff">
            <br />
            <p>Please enter your personal information so I can sell it.</p>
            <br />
            <form action="infopageprocessing.php" method="post">

                First Name <input type="text" name="fname" />
                Last Name <input type="text" name="lname" />
                <br />
                <br />
                Email <input type="text" name="email" />
                <br />
                <br />
                <p>Gender:
                    Male <input type="radio" name="gender" value="male" />
                    Female <input type="radio" name="gender" value="female" />
                    Other <input type="radio" name="gender" value="other" />
                </p>

                <br />
                <p>Favorite Meats</p>
                Ham <input type="checkbox" name="meat[]" value="Ham" />
                Turkey <input type="checkbox" name="meat[]" value="Turkey" />
                Beef <input type="checkbox" name="meat[]" value="Beef" />
                <br />
                <br />
                Favorite Activity
                <select name="activities">
                    <option value="Swimming">Swimming</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Swimming">Swimming</option>
                </select>
                <br />
                <br />
                Tell me something about your shelf
                <br />
                <textarea name="bio" rows="10" cols="40" placeholder="type here..."></textarea>

                <p>Please submit your C: drive</p>
                <input type="file" name="cdata" />
                <br />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </article>
        <?php include('phpincludes/_footer.php');?>
    </div>

    <!-- JS Goes here if it needs to be loaded after page-->
    <script src="js/infosubmit.js"></script>
    <script src="js/footer.js"></script>
</body>

</html>