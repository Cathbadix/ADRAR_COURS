<?php

function dbConnect()
{
    try {
        $dbh = new PDO("mysql:host=localhost;dbname=tp_bdd;charset=utf8", "root", "");
    } catch (PDOException $exception) {
        die("Erreur connexion à la base de données");
    }
    return $dbh;
}

