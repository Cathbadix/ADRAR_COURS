// Voici comment va se dérouler notre bouton Spoiler :
// - Un bouton s’affiche sur la page proposant d’afficher le message
// - L’utilisateur clique sur le bouton, ce qui va activer une condition
// • La variable hidden vaut true ? Dans ce cas, on affiche le message, on change
// le texte du bouton en « Cacher », et on passe la variable hidden en false
// • La variable hidden vaut false ? Dans ce cas, on cache le message, on change
// le texte du bouton en « Afficher », et on passe la variable hidden en true

let spoilerButtonSelector = document.querySelector("#spoiler-button-js");
let spoilerContentSelector = document.querySelector("#content-js");


spoilerButtonSelector.addEventListener("click", () => {
    if (spoilerContentSelector.className === "") {
        spoilerContentSelector.classList.add("visibility");
    } else {
        spoilerContentSelector.classList.remove("visibility");
    }
});