<?php
require_once("dbconnect.php");

if (isset($_POST['email']) && isset($_POST['password'])) {

    $email = $_POST['email'];
    $password = $_POST['password'];

    if (!empty($email) && !empty($password)) {

        $dbh = dbConnect();

        //pour connecter un utilisateur il faut que celui ci existe
        //on fait donc une requête en ce sens
        $get_user = "SELECT * FROM users WHERE user_email = :email";
        $stmt = $dbh->prepare($get_user);

        $stmt->execute([
            ":email" => $email
        ]);

        //on récupère notre ligne de résultat
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($user) { //si on recup quelque chose
            //on vérifie le mot de passe avec password_verify qui va comparer le mot de passe en clair avec le mot de passe haché de la bdd
            if (password_verify($password, $user["user_password"])) {
                //si le mot de passe est bien le bon, on peut commencer une session, ou rediriger ou faire ce qu'on veut
                session_start();
                $_SESSION["userid"] = $user["user_id"];
                $_SESSION["username"] = $user["user_nickname"];
                header('Location: index.php');
            } else {
                echo "email ou mot de passe erronés";
            }
        } else {
            echo "email ou mot de passe erronés";
        }
    } else {
        echo "erreur valeur vide";
    }
} else {
    echo "erreur formulaire";
}
