/**
 * Déclarer une variable tablier
 * Donner lui comme affectation le type objet
 * Il devra avoir pour attribut , une couleur, un tissu, une cordelette, sale, casser, pocheAFric
 * Faite une méthode utilisé, une méthode laver, une méthode réparer et une méthode cuisiner
 * Si le tablier est utilisé plus de 5 fois alors la cordelette ce casse 
 * et vous ne pouvez pas appeler la méthode cuisiner
 * sinon vous devez le réparer pour remettre le compteur à 0.
 * Si le tablier est utilisé + de 4 fois alors il est sale 
 * afficher "pouarf tu travaille avec un tablier sale"
 * sinon si il est sale est à plus de quinze
 * vous  ne pouvez pas appeler la méthode cuisiner
 * si vous le lavez le compteur retombe à zéro et alors le message ne saffiche plus
 * si toutes les condition sont réunis alors vous pouvez appelez la méthode cuisinez
 * affichez "vous cuisinez un délicieux repas"
 * incrementer les valeur sale et cass 
 * affichez le status de ces valeur, dans une autre méthode ou directement dans celle ci 
 * Faite une scénario ou vous executer un certain nombre de fois les méthode du tablier
 */

let tablier = {    
    couleur: "noire",
    tissu: "coton",
    cordelette: 0,
    sale: 0,
    casser: 0,
    pocheAFric: 0,
};

tablier.utiliser = function () {
}

tablier.laver = function () {
}

tablier.réparer = function () {
}

tablier.cuisiner = function () {    
}
