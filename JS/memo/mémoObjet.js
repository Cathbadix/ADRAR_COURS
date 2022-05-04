/**
 * Déclaration affectation d'un objet
 * whoAmI est une méthode sans paramètre qui affiche les information de human
 */

let human = {
    name: "john",
    foreName: "doe",
    age: 12,

    whoAmI() {
        console.log(`Hello my name is ${this.name} ${this.foreName}, i'm ${this.age} years old`);
    }
}

human.whoAmI();

/**
 * Objet representant un barre de navigation 
 * C'est en lien avec le DOM 
 */
let selector = document.querySelector("nav");

let navBar = {
    selector: document.querySelector("nav"),
    width: "500px",
    height: "350px",
    /**
     * Methode qui affiche dans la console l'élément brut
     */
    display() {
        console.log(`${this.selector}`)
    },
    /**
     *  Méthode qui change la couleur de l'élément
     */
    changeColor() {
        this.selector.style.backgroundColor = "gray";
    }
}

navBar.display();
navBar.changeColor();

//Les classe 

//Constructeur classique de classe 
function JeuVideo(nom, type, support) {
    this.nom = nom;
    this.type = type;
    this.support = support;
    this.presentation = () => {
        console.log(this.nom + " est un jeu de " + this.type + " disponible sur " + this.support)
    }
}
let ageOfEmpire = new JeuVideo("Age of empire", "stratégie", "pc");


// mémoMéthode

/**
 *Il est possible d'ajouter des fonction dans des objets cela s'appellent des méthdode 
 *
 */

//Je déclare une variable humain, je lui affecte un objet vide

let human = {};

//Je lui ajoute une propriété name qui vaut bob
human.name = "bob";

//Je lui ajoute une méthode displayName qui affiche sont nom.

human.displayName = function () {
    console.log("hi my names is " + this.name);
}

//Ici on execute la méthode propre à human
human.displayName();

//affichos notre objet pour mieux le comprendre

console.log(human)

//On s'aperçois qu'il y a une propriété et une méthode dans notre objet.
//Il n'y a pas forcement plus de détails dans le console.log mais les informations les plus importantes son présente

