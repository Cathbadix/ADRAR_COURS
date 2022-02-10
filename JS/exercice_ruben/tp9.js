// Faites une comparaison en utilisant un switch une variable prénom.
// Dans le switch vous pouvez checker 3 prénoms filles, 3 garçon.
// Votre programme demande votre prénom (prompt).
// Si vous rentrez un des 3 prénoms garçon un console log « vous êtes un garçon ».
// Si vous rentre un des 3 prénoms filles, un console log « vous êtes une filles ».
// Sinon console.log « vous n’avez pas rentré de prénom ».
// Attention, la comparaison ne doit pas être sensible à la casse (case insensitive).
// - Bonus : Créez une condition ternaire ( ex : si tu as moins de 18 ans tu est mineur sinon tu
// es majeur) .
const prenom = prompt();
prenom = prenom.toLowerCase();

var messageG = "Vous êtes un garçon";
var messageF = "Vous êtes une fille";

switch (prenom) {
    case "pierre":
        console.log(messageG);
        break;
    case "paul":
        console.log(messageG);
        break;
    case "jacque":
        console.log(messageG);
        break;
    case "pierrette":
        console.log(messageF);
        break;
    case "pauline":
        console.log(messageF);
        break;
    case "jacqueline":
        console.log(messageF);
        break;
    default:
        console.log("Vous n'avez pas rentré de prènom!");
}

var age = prompt(age);

age = +age;

age < 18 ? console.log("Vous êtes mineur") : console.log("Vous êtes majeur");