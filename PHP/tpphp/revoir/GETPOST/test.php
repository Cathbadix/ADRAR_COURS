<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>Nom + méthode</h1>

    <?php
        include "requetes.php";

        if (isset($_POST['pseudo2'])) {
            name($_POST['pseudo2']);
        }

        if (isset($_GET['pseudo'])) {
            name($_GET['pseudo']);
        }
    ?>

    </br></br>

    <a href="index.php">RETOUR INDEX</a>

</body>
</html>
