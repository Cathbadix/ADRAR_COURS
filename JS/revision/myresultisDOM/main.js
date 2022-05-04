// j enregistre la valeur des nombres random dans des variables.
var firstNumber = Math.floor(Math.random(10) * 11);
var secondNumber = Math.floor(Math.random(10) * 11);

// j'enregistre mes selections d'élements dans des variables.
var a = document.getElementById('a').textContent = firstNumber;
var b = document.getElementById('b').textContent = secondNumber;
// dans ma variable C, je lui demande de faire le calcul des valeurs
var c = a * b;
// console.log(c);
// j enregistre la selection de l'élément dans une variable
var resultat = document.querySelector(".resultat");
// j'enregistre lesselections d'element dans des variables
var inputReponse = document.getElementById('reponse');
var inputEnvoyer = document.getElementById('envoyer');
var inputrelancer = document.getElementById('relancer');


// j'ajoute un evenement au click sur mon input submit, qui lancera la function anonyme
inputEnvoyer.addEventListener("click", function(){
    // J'enregistre la valeur récupéré dans mon input repose et l'enregistre dans une variable
    let reponse = Number(inputReponse.value);
    // je compare la valeur reçus de mon input avec la réponse présente dans ma variable C
    // je retourne la valeur dans mon paragraphe résultat.
    
    // reponse === c ? resultat.textContent = `Bravo la réponse est bien ${c}` : resultat.textContent = `Dommage la réponse était ${c}`;
    
    if (reponse === c){
        resultat.textContent = `Bravo la réponse est bien ${c}`;

    } else {
        resultat.textContent = `Dommage la réponse était ${c}`;
    }
});

inputrelancer.addEventListener("click", function(){
    window.location.reload();
})