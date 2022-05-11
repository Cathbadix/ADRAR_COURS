<?php

function name($name) {
    if (isset($_POST['pseudo2'])) {
        echo "<p>Votre pseudo est <b>$name</b>, vous utilisez la méthode <b>POST</b></p>";
    }
    if (isset($_GET['pseudo'])) {
        echo "<p>Votre pseudo est <b>$name</b>, vous utilisez la méthode <b>GET</b></p>";
    }
}