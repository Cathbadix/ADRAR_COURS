<?php
require_once("dbconnect.php");

function CreateUser() {
    if (isset($_POST['nickname']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['password_repeat'])) {

        $nickname = $_POST['nickname'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $password_repeat = $_POST['password_repeat'];
    
        if (!empty($nickname) && !empty($email) && !empty($password) && !empty($password_repeat)) {
    
            if ($password === $password_repeat) {
    
                //on hache le mot de passe, hacher le mot de passe reviens à le chiffrer de manière irréversible
                //on ne stocke jamais le mot de passe en clair mais uniquement son hash dans la base de données
                $password_hash = password_hash($password, PASSWORD_DEFAULT);
    
                $dbh = dbConnect();
    
                $insert_user = "INSERT INTO users (user_nickname, user_email, user_password) VALUES (:user_nickname, :user_email, :user_password)";
                $stmt = $dbh->prepare($insert_user);
    
                $stmt->execute([
                    ":user_email" => $email,
                    ":user_nickname" => $nickname,
                    ":user_password" => $password_hash,
                ]);
            }
        }
    header('Location: sign_in.php');
    }
}

function ConnexionUser() {
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
                }
            }
            header('Location: index.php');
        }
    }
}