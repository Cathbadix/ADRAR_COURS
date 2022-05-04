/**
 * Dans ce petit tp, vous allez crée un petit carré avec un fleche pour remonter 
 * faite en sorte que votre body soit scrollable, body{ height: 300vh;}
 * lorsque vous êtes tout en bas de la page, vous cliquez sur le carré et devez remonter
 * tout en haut de votre page.
 * faite également un évènement qui affiche la position actuel du scroll
 */


//On selectionne notre élément

// ceci est un évènement sur le document entier qui réagis au scroll
document.addEventListener("scroll",function(){
    //affiche la position actuel du scroll
   console.log(window.scrollY);
})

let articleEvent = document.querySelector("article");

articleEvent.addEventListener("click",function(){
    window.scrollTo(0,0);
});
