// Créez une fonction qui affiche « c’est le matin » si l’heure est inférieur à midi,
// « c’est l’après midi » si l’heure est entre 12h et 18h et « c’est le soir » si l’heure
// est au dessus.

function time(a) {
    let heure = prompt('Donnez moi une heure!!!');
    heure = +heure;

    if (isNaN(heure)) {
        alert("Ce n'est pas une heure!!!")
    } else
        if (heure < 12 && heure > 7){
            alert("C'est le Matin");
        } 
        else if (heure > 12 && heure < 18 ){
            alert("C'est l'après midi");
        }
        else {
            alert("C'est le soir!!!");
    }
}

console.log(time());
