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

var num1 = document.getElementById("num1").innerHTML;
var num2 = document.getElementById("num2").innerHTML;


function addition(num1, num2) {
    let resultat = num1 + num2;
    return alert("le résultat de votre addition est "+ " " + (resultat));
}


function soustraction(num1, num2) {
    let resultat = num1 - num2;    
    return alert("le résultat de votre soustraction est "+ " " + (resultat));
}


function multiplication(num1, num2) {
    let resultat = num1 * num2;
    return alert("le résultat de votre multiplication est "+ " " + (resultat));
}


function division(num1, num2) {
    let resultat = num1 / num2;
    return alert("le résultat de votre division est "+ " " + (resultat));
}

// addition(10,10)
// soustraction(10,10)
// multiplication(10,10)
// division(10,10)