// var button = document.querySelector('button');
// let sectionCreate = document.createElement("section");
// let H1Create = document.createElement("h1");
// let PCreate = document.createElement("p");


 
// document.body.append(sectionCreate);
// sectionCreate.append(H1Create);
// H1Create.textContent = "Ceci est mon titre";
// sectionCreate.append(PCreate);
// PCreate.textContent = "Ceci est un paragraphe";

// let sectionCreate = document.createElement("section");
// let imgCreate = document.createElement("img");
// let pCreation = document.createElement("p");

// imgCreate.src =`https://picsum.photos/seed/${randomNumber()}/200/300`
// pCreation.textContent = "Lorem ipsum dolor, sit \"amet\" consectetur adipisicing elit Modi quae voluptates, sed hic exercitationem fugit quia quasi accusantium et dolorum at beatae! Sint iusto eo";

// document.body.append(sectionCreate);
// sectionCreate.append(imgCreate);
// sectionCreate.append(pCreation);


// /**
//  * Génère un nombre aléatoire 
//  * @param {Number} max 
//  * @returns {Number}
//  */
// function randomNumber(max = 100){
//     return Math.round(Math.random()*max)
// }

let sectionCreate, imgCreate, pCreation;

function createElements(){
    sectionCreate = document.createElement("section");
    imgCreate = document.createElement("img");
    pCreation = document.createElement("p");
}

function fillElements(){
    imgCreate.src =`https://picsum.photos/seed/${randomNumber()}/200/300`
    pCreation.textContent = "Lorem ipsum dolor, sit \"amet\" consectetur adipisicing elit Modi quae voluptates, sed hic exercitationem fugit quia quasi accusantium et dolorum at beatae! Sint iusto eo";    
}

function appendElements(){
    document.body.append(sectionCreate);
    sectionCreate.append(imgCreate);
    sectionCreate.append(pCreation);
}

function addSection(){
    createElements();
    fillElements();
    appendElements();
}

addSection();
addSection();
addSection();
addSection();


/**
 * Génère un nombre aléatoire 
 * @param {Number} max 
 * @returns {Number}
 */
function randomNumber(max = 100){
    return Math.round(Math.random()*max)
}