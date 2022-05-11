<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>TP GET & POST</title>
</head>

<body>
    <div class="container">
        <h2>Formulaire avec GET</h2>
        <form action="test.php" method="GET">
            <input type="text" name="a">
            <input type="text" name="b">
            <input type="text" name="c">
            <input type="submit">
        </form>

        </br>
        <?php
        var_dump($_GET);
        ?>
        <h2>Formulaire avec POST</h2>
        <form action="test.php" method="POST">
            <input type="text" name="a">
            <input type="text" name="b">
            <input type="text" name="c">
            <input type="submit">
        </form>

        <?php
        var_dump($_GET);
        ?>
    </div>

</body>

</html>