/* Pour voir si tout vas bien jusque ici nous allons créer un calculateur en boite de dialogue
(une sorte de calculatrice simplifiée).
Objectif :
- Demandez de faire un choix entre addition – soustraction – multiplication – division
- Indice : pour un retour à la ligne « \n » tant que l’utilisateur ne choisis pas une des quatre
proposition il serait bien de répéter la question.
- Demandez de rentrer un nombre, puis un deuxieme
- Indice : Répéter la demande si un nombre n’est pas rentré, je vous laisse chercher la
fonction qui permet de checker cela.
- Crée 4 fonctions correspond aux 4 méthodes de calculs
- Selon le choix de l’utilisateur appelé la fonction correspondante
- Affichez le résultat isNaN
- Proposez à l’utilisateur de recommencer \n\n
*/

// Je demande une première valeur à l'utilisateur ainsi qu'une deuxième valeur.
var num1 = prompt("Premier nombre");
var num2 = prompt("Deuxième nombre");
// Je transforme les valeurs récupérés en int afin de pouvoir les calculer.
num1 = parseInt(num1);
num2 = parseInt(num2);
//j'initialise ma variable recommencer à false
var recommencer = false;

// Tand que l'utilisateur n'a pas fait un choix, je lui repose la question
do {
    do {
        var choix = prompt("Choix addition, soustraction, multiplication, division")
    choix = choix.toLowerCase();
    } while (choix == "");

    //(choix === addition || choix === soustraction || choix === multiplication || choix === division);


    // En fonction du choix de l'utilisation, mon switch me permmettra de retourner la case correspondante
    // Et traitera les deux valeurs donnée avec l'appel de la fonction correspondant à la case.
    switch (choix) {
        case "addition":
            alert("le résultat de votre addition est "+ " " + addition(num1,num2));
            break;
        case "soustraction":
            alert("le résultat de votre soustraction est "+ " " + soustraction(num1,num2));
            break;   
        case "multiplication":
            alert("le résultat de votre multiplication est "+ " " +  multiplication(num1,num2));
            break;
        case "division":
            alert("le résultat de votre division est "+ " " + division(num1,num2));
            break;   
    }
    // recommencer renverra une boite de dialogue, recommencer est initié à false
    // si l'utilisateur clique sur ok le code se relance, sinon il s'arrête
    recommencer = confirm("Veux-tu recommencer?");
// si l'utilisateur clique sur ok, on relance
} while (recommencer);

// Ceci est ma fonction pour l'addition.
function addition(num1, num2) {
    let resultat = num1 + num2;
    return resultat;
}

// Ceci est ma fonction pour la soustraction.
function soustraction(num1, num2) {
    let resultat = num1 - num2;    
    return resultat;
}

// Ceci est ma fonction pour la multiplication.
function multiplication(num1, num2) {
    let resultat = num1 * num2;
    return resultat;
}

// Ceci est ma fonction pour la division.
function division(num1, num2) {
    let resultat = num1 / num2;
    return resultat;
}

// addition(10,10)
// soustraction(10,10)
// multiplication(10,10)
// division(10,10)