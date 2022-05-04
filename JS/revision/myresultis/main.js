while(true){    
    let a = Math.floor(Math.random(10) * 11);
    let b = Math.floor(Math.random(10) * 11);
    let c = a * b;
    
    // console.log(a);
    // console.log(b);
    // console.log(c);

    resultat = prompt(`combien fait ${a} x ${b}`);
    resultat = Number(resultat);
    resultat === c ? alert(`Bravo la réponse est bien ${c}`) : alert(`Dommage la réponse était ${c}`);
}

// if (resultat === c){
//     alert("Bravo")
// } else {
//     alert("dommage");
// }
