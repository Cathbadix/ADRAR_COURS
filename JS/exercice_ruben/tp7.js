// Créez une fonction permettant d’afficher l’IMC d’une personne, en rentrant comme paramètre
// son poids et sa taille.
// Pour info : La formule de l’IMC est poids(en kg) / taille²(en mètre).
// L’utilisateur devra rentré son poids en kg, donc à vous de faire la conversion cm->mètre, de
// faire le calcul nécessaire pour l’IMC et d’afficher le résultat arrondi à 1 chiffre après la virgule.
// let poids = prompt("Quel est votre poids en kg ?");
// let taille = prompt("Quel est votre taille en cm ?");


function getimc(poids,taille) {
    var poids = prompt("Quel est votre poids en kg?");
    var taille = prompt("Quel est votre taille en cm?");

    poids = +poids;
    taille = +taille;
    taille = taille/100;


    let myimc = (poids / (taille * taille));
    let arrondi = myimc.toFixed(1);

    alert(arrondi);
}
console.log(getimc());
