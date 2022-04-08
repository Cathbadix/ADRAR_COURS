/* 
  Reprenez l'exercice précedent et ajouter une dimension à votre tableau
  Adaptez votre contenus selon le choix fait dans le tableau.
  Si c'est des personnes , mettez l'age en deuxième valeur par exemple.
  Dans mon cas c'est des outils je vais donc mettre un poids.

  Avec ce tableau à deux dimension, vous allez maintenant créée un titre (h2)
  Créée un paragraphe (p).
  Les remplir et les afficher dans le body

  Une fois que vous avez fait cela ajouter bootstrap et jouer avec classList,
  Ajouter des class à vos éléments.
  Dans un premier temp mettez votre background-color body en bleu
  Normalement les lien de l'exercice precedent devrait donc avoir disparus (ils sont bleu !)
  Changer donc la couleur de tout vos lien pour une couleur clair.
  */

let arrayOfTools = [
  ["marteaux",2],
  ["truelle", 0.5],
  ["pelle", 4],
  ["goudron"],
  ["béton"],
  ["maillet", 3],
  ["piquet", 6],
  ["scie",0.2],
  ["equerre",0.1],
  ["perceuse", 0.5],
]

//Selection des liens, cela retourne un tableau de tout les a
let arrayOfA = document.querySelectorAll("a");
//J'affiche le tableau
console.log(arrayOfA);

//Pour chaque élément du tableau alors 
arrayOfTools.forEach(element => {
  //Je créée un h2 et un p 
  let createTitle = document.createElement("h2");
  let createParagraphe = document.createElement("p");

  //je met mon titre et le poid dans les élément ATTENTION ICI element vaut déja element[0] puis element[1] etc pas la peine donc de mettre element[0][0]
  createTitle.textContent = element[0];
  createParagraphe.textContent = element[1];

  //je l'ai fait apparaitre dans mon body
  document.body.append(createTitle);
  document.body.append(createParagraphe);

});

/*************************/
/*************************/
//J'ajoute une classe sur mon body
document.body.classList.add("bg-primary");

//Pour chaque lien j'ajoute une classe dessus c'est pas le plus optimal, j'aurai pus le mettre sur ul
arrayOfA.forEach(key =>{
  key.classList.add("text-light")
})