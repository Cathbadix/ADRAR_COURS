/*
    Les différents types
    Number
    String
    Booléen
    */  
    //Conversion
    let variableStringAConvertir = "12";
    Number(variableStringAConvertir)
    parseInt();
    variableStringAConvertir = +variableStringAConvertir;
/*
    Déclaration de variable

    */
    var maVariableUn = 0;
    let maVariableDeux = 0;
    const maConst = 0;

    maVariableUn = 10;

/*
    function ma
    Afficher une variable 

    */
    console.log();
    //alert();

/*
    Déclaration de fonction
    avec ou sans return
    avec ou sans parametre, avec un defaut si parametre 
    */
    function somme(a,b) {
        var resultat = a + b;
        console.log("le resultat est" , resultat);
        //Gabarit literal 
        console.log(`le resultat est ${resultat}`);
    }
    sommeArrow = (a, b) => {
        return a + b;
    }
/* 
    Appel de fonction 

    */

    somme(5, 6);

 /* opérateur de comparaison
    */
   if( 10 == 10){
    'true'
   }else if (10 < 10) {
        'false'
   }else if (10 > 10){
    'false'
   }else if (10 < 10 && 10 < 11){

   }else if (10 < 10 || 10 < 11){

   }else{

   }

   /* Boucle */

   let resultat = 0;

   while(resultat < 10){
    resultat++;
    console.log(resultat);
   }
   
   for(var i = 0; i < 10; i++){
       console.log(i);
   }

/* Array (tableau) */

   /* créer un tableau */ 

   let fruits = ['Apple', 'Banana']; // dans une variable fruits, je créai mon tableau ['Apple', 'Banana']
   console.log(fruits.length); // j'affiche à l'aide de length, la longeur de mon tableau.

   /* Accéder à l'index d'un tableau */

   let first = fruits[0]; // fruits[0] me permet de connaitre le contenue de la première valeur du tableau fruits
    // Apple

    let last = fruits[fruits.length - 1]; // fruits.lengt - 1 me permet de connaitre le contenue de la dernière valeur du tableau
    // Banana

    /*Boucler sur un tableau*/
    //Pour créer une boucle sur un tableau en javascritp, je peux le faire à l'aide de forEach
    fruits.forEach(function(item, index, array) {
        console.log(item, index);
      });
      // Apple 0
      // Banana 1

    