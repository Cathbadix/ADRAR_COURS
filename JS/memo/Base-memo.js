
/*
    Les différents types
    Number
    String
    Booléen
    BigString
    Undefined ou Null 
    */  
    //Conversion
    let variableStringAConvertir = "12";
    Number(variableStringAConvertir)
    parseInt();
    variableStringAConvertir = +variableStringAConvertir;
/*
    Déclaration de variable

    */
    //déclaration affectation
    var maVariableUn = 0; //variable Globale 
    let maVariableDeux = 0; //variable qui sera contenu dans une certaine scope (par exemple dans une fonction, elle ne pourra etre appelé ailleur)
    const maConst = 0;
    //réafectation 
    maVariableUn = 10; 
    //Déclaration sans affectation
    let hello;
/*
    Affichage

    */
    console.log(); // peut contenir un variable, affiche le contenus dans la console
    //alert();    //affiche une boite de dialogue 

    /*saisis utilisateur */
    //prompt();

    /*confirmation*/
    //confirm();

/*
    Déclaration de fonction
    avec ou sans return
    avec ou sans parametre, avec un defaut si parametre 
    */
    function somme(a,b) {
        var resultat = a + b;
        console.log("le resultat est" , resultat);
        //Gabarit literal 
        console.log(`le resultat est ${resultat}`);
    }
    sommeArrow = (a, b) => {
        return a + b;
    }
/* 
    Appel de fonction 

    */

    somme(5, 6);

 /* opérateur de comparaison
    */
   if( 10 == 10){ //Si c'est égal non strict === pour une égalité stricte valeur et type 
    'true'
   }else if (10 < 10) { //sinon si c'est inférieur  exite aussi avec le égale. inférieur ou égale à <=
        'false'
   }else if (10 > 10){ //sinon si c'est Supérieur
    'false'
   }else if (10 < 10 && 10 < 11){ //sinon si c'est inférieur  et si c'est inférieur

   }else if (10 < 10 || 10 < 11){ //sinon si c'est inférieur  ou si c'est inférieur

   }else{

   }

   /* Boucle */

   let resultat = 0;

   while(resultat < 10){
    resultat++;
    console.log(resultat);
   }
   
   for(var i = 0; i < 10; i++){
       console.log(i);
   }

   /* Attraper une erreur */
   
   try{
       console.log(coco);
   }
   catch{
       console.error("titi" + Error.stack);
   }

   try{
       coco;
   }catch(e){
       console.log(`une erreur est surevenue ${e}`)
   }

   //Array

let tableauDanimaux = ["vache","canard","biche"]; // un Tableau a une dimension 
//si je veut appelé un élément alors
console.log(tableauDanimaux[0]); //L'index d'un tableau commence à zero

//tableau a deux dimension 
let tableauFilm = [["batman", "zack snyder"], ["avatar", "james cameron"]];
//appel d'un élément
console.log(tableauFilm[0][1]); //affiche james cameron

/*il esxiste des méthode pour modifier ou travailler un tableau 
fruits = ['pomme', 'banane', 'poire', 'fraise']
•fruits.length : retourne le nombre d'éléments dans le tableau (ici retourne 4)
•fruits[0] : sélectionne le premier élément
•fruits[length - 1] : sélectionne le dernier élément
•fruits.push('pamplemousse') : ajoute un élément à la fin du tableau
•fruits.unshift('pamplemousse') : ajoute un élément au début du tableau
•fruits.pop() : supprime le dernier élément
•fruits.shift() : supprime le premier élément
•fruits.indexOf('banane') : retourne l'index d'un élément
•fruits.join() : concatène les éléments dans une chaîne de caractères avec virgules, mais il est possible de spécifier un autre séparateur dans les paranthèses
•fruits.slice() : crée une copie du tableau (à associer à une autre variable donc)
•fruits.splice([début], [nbASupprimer], [élément(s)]) : retire, remplace ou ajoute des éléments.
*/
//L'objet Math
//Math permet d'effectué des opération courante sur vos élément

let randomNumber = Math.random()*100; // un problème ce pose avec ce résultat
console.log(randomNumber); //la sortie à un certain nombre de chiffre après la virgule

let randomNumberFloor = Math.floor(Math.random()*100)

console.log(randomNumberFloor);

//Je ne met pas toutes les méthode de l'objet Math, à vous de chercher sur mdn ou autre

//DOM

//Selection d'élément avec l'objet document

//document.querySelector("elementASelectioné");
//pour travailler avec une élément il sera plus simple de l'affecté à une variable 

let titleSelector = document.querySelector("h1"); //selectionne le premier h1 de votre page
let linkSelector = document.querySelectorAll("a"); //selectionne tout les titres de votre pages
//Les agrèges dans un tableau 
//affichons les pour voir ce qu'il ce passe 
console.log(titleSelector);//Affiche l'élément 
console.log(linkSelector);//Affiche le tableau
console.log(linkSelector[1])//Affiche lien 2
/*
getElementsByTagName() - Sélectionne tous les éléments avec la balise entre parenthèses
getElementById() - Sélectionne un seul élément : le premier ayant l'ID entre parenthèses
getElementsByClassName() - Sélectionne tous les éléments avec la classe entre parenthèses
querySelector() - Sélectionne un seul élément : celui avec le sélecteur entre parenthèses
querySelectorAll() - Sélectionne tous les éléments avec le sélecteur entre parenthèses
*/

/*
Modifier les éléments
textContent - Modifie le texte d'un élément
innerHTML - Modifie l'HTML d'un élément
*/

linkSelector[1].textContent= " changement de texte dans le lien"
linkSelector[0].textContent = tableauFilm[0][1]; //j'affiche l'entrée de mon tableau precedement déclaré

//événement

//addEventListener("evenement", function ou callback)

linkSelector[l].addEventListener("click", function(){
    console.log("Hello");
})
linkSelector[0].addEventListener("click", hello);
hello = () =>{
    console.log("hello");
}