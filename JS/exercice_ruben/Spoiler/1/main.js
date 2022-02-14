/* Dans cet exercice, vous allez réaliser un bouton Spoiler !
Nous allons pouvoir réviser les notions de conditions, et de styles.
Voici comment va se dérouler notre bouton Spoiler :
- Un bouton s’affiche sur la page proposant d’afficher le message
- L’utilisateur clique sur le bouton, ce qui va activer une condition
• La variable hidden vaut true ? Dans ce cas, on affiche le message, on change
le texte du bouton en « Cacher », et on passe la variable hidden en false
• La variable hidden vaut false ? Dans ce cas, on cache le message, on change
le texte du bouton en « Afficher », et on passe la variable hidden en true */


let buttonSelector = document.querySelector("#spoiler-button-js");
let paraSelector = document.querySelector(".content-js");

let hidden = true;

buttonSelector.addEventListener("click", display);



function display() {
    if(hidden == true) {
        paraSelector.textContent ="Ceci est un Spoil";    
        hidden = false;    
    } else {
        paraSelector.textContent = "";
        hidden = true;
    }
}