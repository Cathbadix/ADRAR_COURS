/**
 * vous allez créée un dés 100 
 * Un carré qui réagit au clique et lance un dés 100
 * il doit changer l'affichage dans le carré avec le résultat du dés
 * chaque lancé doit être ajouter en dessous dans un historique 
 * 
 * Bonus:
 * Si le résulat du dés est suppérieur à 95 c'est une réussite critique
 * Si le résultat du dés* est inférieur à 5 c'est un echec critique
*/

var div = document.querySelector('div');
var button = document.querySelector('button');
var log = document.querySelector('p');
var h1 = document.querySelector('h1');

button.addEventListener("click", function(){
    let rand = Math.floor(Math.random() * 100);
    div.textContent = rand;
    log.textContent += rand + " ";

    if (rand >= 95){
        h1.textContent = "Réussite Critique";
    } else if (rand <= 5) {
        h1.textContent = "Echec Critique";
    } else {
        h1.textContent = "Relance le dé"        
    }
});



