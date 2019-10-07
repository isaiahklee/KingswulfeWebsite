<?php include('_sessionstart.php');?>
<!DOCTYPE HTML>
<html lang="en">

<head>
    <meta charset="utf-8" />

    <title>Isaiah Kingswulfe Lee</title>

    <!-- css stylesheet\s location\s -->
    <link rel="stylesheet" type="text/css" href="css/index-style.css" />

    <!-- favicon.ico and apple-touch-icon.png? in root directory -->
    <link rel="shortcut icon" href="images/favicon.ico" />

    <!-- JS goes here if we want to load it during page load -->

</head>

<body>
    <div id="big-wrapper">

        <?php include('_nav.php');?>

        <br />

        <div id="page-middle">

            <!-- THIS SECTION is for the reactive side bar.-->
            <aside id="my-aside" role="complementary">
                <div class="text-center">
                    <div class="my-face" style="background-image: url(images/deletthis.jpg);"></div>
                    <h3 id="my-title">Isaiah Kingswulfe Lee</h1>
                        <span class="my-subtext"><a href="isaiahklee0@gmail.com">isaiahklee0@gmail.com</a></span>
                </div>
                <nav id="my-aside-nav" role="navigation" class="navbar">
                    <ul>
                        <li class="active"><a href="#home" data-nav-section="home"
                                onclick="switchSection('home');">Home</a>
                        </li>
                        <li><a href="#about" data-nav-section="about" onclick="switchSection('about');">About</a></li>
                        <li><a href="#education" data-nav-section="education"
                                onclick="switchSection('education');">Education</a></li>
                        <li><a href="#projects" data-nav-section="projects"
                                onclick="switchSection('projects');">Projects</a></li>
                        <li><a href="#skills" data-nav-section="skills" onclick="switchSection('skills');">Skills</a>
                        </li>
                        <li><a href="#contact" data-nav-section="contact"
                                onclick="switchSection('contact');">Contact</a></li>
                    </ul>
                </nav>
            </aside>

            <!-- THE MEAT and potatoes of the pages content-->
            <section id="main-section">
                <div id="oofbutton">
                    <form>
                        <input type="button" value="DO NOT PRESS" onclick="playSound();" />
                    </form>
                </div>
                <br />
                <div id="inserted-html">

                </div>
            </section>

        </div>
        <?php include('_footer.php');?>
    </div>
    <!-- JS Goes here if it needs to be loaded after page-->
    <script src="js/index.js"></script>
    <script src="js/footer.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

</body>

</html>