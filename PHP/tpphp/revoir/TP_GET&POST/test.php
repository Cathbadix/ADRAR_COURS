<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP GET & POST</title>
</head>

<body>

    <?php
    if (!empty($_GET)) {
        echo "<h1>" . $_GET['a'] . " " . htmlspecialchars($_GET['b']) . " " . $_GET['c'] . "</h1>";
        echo "</br>";
        echo "<a href='index.php'>RETOUR</a>";
    }

    if (!empty($_POST)) {
        echo "<h1>" . $_POST['a'] . " " . $_POST['b'] . " " . $_POST['c'] . "</h1>";
        echo "</br>";
        echo "<a href='index.php'>RETOUR</a>";
    }

    var_dump($_GET);


    var_dump($_POST);
    ?>

</body>

</html>