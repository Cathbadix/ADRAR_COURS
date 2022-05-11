<?php
    session_start();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel='stylesheet' type='text/css' media='screen' href='assets/css/main.css'>
    <script src='main.js'></script>
</head>
<body>
    <header>
        <nav>
            <ul>
                <a href='index.php'><button class='btn btn-primary'>Accueil</button></a>
                <?php
                if (isset($_SESSION["username"])) {
                    $navlinks = "<a href='sign_out.php'><button class='btn btn-danger'>Deconnexion</button></a>";
                } else {
                    $navlinks = "
                    <a href='sign_up.php'><button class='btn btn-primary'>Inscription</button></a>
                    <a href='sign_in.php'><button class='btn btn-primary'>Connexion</button></a>
                    ";
                }
                echo "

                        {$navlinks}
                    ";
                ?>
                <!-- <li>
                    <a href="sign_up.php"><button>Inscription</button></a>
                </li>
                <li>
                    <a href="sign_in.php"><button>Connexion</button></a>
                </li>
                <li>
                    <a href="sign_out.php"><button>Deconnexion</button></a>
                </li> -->
            </ul>
        </nav>
    </header>
    <section class="dialogue">
        <p>Bonjour et bienvenue <?php if (isset($_SESSION["username"])) echo $_SESSION["username"]?></p>
    </section>
</body>
</html>