<!-- The Actual Header -->
<header id="big-header">

    <div id="logo-and-text">
        <img src="images/KingswulfeBanner2.png" alt="cool logo" style="border: black 1px solid;" height="140px" />
        <!--
        <img src="images/me.png" alt="cool logo" height="75" hspace="100" />
        <div id="header-text">
            <h1>Isaiah Kingswulfe Lee</h1>
            <p>Programmer, Artist, Creator</p>
        </div>
        -->
    </div>
    <div id="loginform">
        <form action="http://localhost/phptesting/submitfile.php" method="POST">
            <p>
                <label for="userlabel">Username: </label>
                <input type="text" name="username" autocomplete="off" size="15" maxlength="20" />
            </p>
            <p>
                <label for="passlabel">Password: </label>
                <input type="password" name="password" size="15" maxlength="20" />
            </p>
            <div id="login-buttons">
                <input type="submit" value="Log In" onclick="playSound();" />
                or
                <label for="regbutton">
                    <input type="button" value="Register" onclick="window.location.href = 'login-stuff/register.html'"
                        value="w3docs" />
                </label>
                if you don't have an account
            </div>
        </form>
    </div>
</header>

<!-- The Top Nav Bar and Login stuff-->
<br />
<div class="top-container">
    <nav id="navbar">
        <h2>Navigation</h2>
        <ul id="top-menu">
            <li><a href="index.php" title="The place where I belong">Home</a></li>
            <li><a href="info.php" title="The amount of info here may overload your browser. Proceed with caution.">Info
                    Page</a></li>
            <li><a href="translate.php" title="From Russia with love">Translate</a></li>
            <li><a href="game.php" title="The last game you'll ever play">Projects</a></li>
            <li><a href="goonspace.html" title="go directly to ludicrous speed">Jump to Plaid</a></li>
            <li><a href="404.php" title="forced error">404</a></li>
        </ul>
    </nav>
</div>