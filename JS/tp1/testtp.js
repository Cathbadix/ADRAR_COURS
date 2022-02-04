// console.log("Hello World");
// 
// alert("Warning");
// 
// confirm("êtes vous sur de vouloir quitter?");
// 
// if(confirm() === true){
    // alert("ok je lance");
// }else{
    // alert("je ne lance pas");
// }
// 
// 
// prompt()
// var save = prompt()
// alert(save);

//function afficher(a) {
//    console.log(a);
//}
//
//console.log(afficher("salut"));

//Créer une fonction qui demande l'age à l'utilisateur et qui retourne un message d'alerte lui disant
//Que son age sera bientôt age + 1
function getage(a) {
    var age = prompt();
    var resultat = parseInt(age);
    alert("Vous aurez bientôt:"+ " " + (resultat+=1));
    console.log(typeof resultat)
}
console.log(getage())