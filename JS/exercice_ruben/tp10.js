/* Pour ce petit tp vous allez créer votre propre erreur à l’aide de « throw new Error() »
- Créez un programme qui demande à l’utilisateur de choisir entre 3 sorts (boule
    de feu – trait de glace et chaine d’éclair).
    - boule de feu = 40 dégats, trait de glace = 35 dégats et chaine d’éclair = 25 dégat.
    - Si l’utilisateur choisis l’un de ses trois sorts, une alerte apparait disant que vous
    avez choisis le « nom du sort » qui fait les dégats annoncé ci-desus.
    - Si l’utilisateur choisis un sort autre que les trois ci-dessus, vous créez une erreur
    et l’affichez.
    « Switch case » vous sera utile pour cette exercice.
    throw new Error("Les autres sorts ne sont pas de votre niveau")
*/

try {
    let sort = prompt(
      "Choisissez un nouveau sort parmis les suivant : boule de feu - trait de glace - chaine d'éclair"
    );
    let degat;
  
    switch (sort) {
      case "boule de feu":
        degat = 40;
        break;
      case "trait de glace":
        degat = 35;
        break;
      case "chaine d'éclair":
        degat = 25;
      default:
        throw new Error("Les autres sorts ne sont pas de votre niveau");
    }
    alert(
      "Félicitation vous avez choisis " +
        sort +
        " qui fait " +
        degat +
        " dégats."
    );
  } catch (error) {
    alert(error);
  }