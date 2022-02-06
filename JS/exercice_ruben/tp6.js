//Créer une fonction qui demande l'age à l'utilisateur et qui retourne un message d'alerte lui disant
//Que son age sera bientôt age + 1
function getage(a) {
    var age = prompt();
    var resultat = parseInt(age);
    alert("Vous aurez bientôt:"+ " " + (resultat+=1));
    console.log(typeof resultat)
}
console.log(getage())