console.log(true || true);
console.log(true && true);


var prenom = "Victorien";

console.log(prenom);

var a = "azer";
var b = "ty";

console.log(a+b);

(()=>{

})();
function azerty(a,b) {
    var a = "azer";
    var b = "ty";
    return a + b;
}
azerty(a,b)

console.log(azerty(a,b));

function add() {
    var num1 = 1;
    var num2 = 3;
    return num1 + num2;
}
console.log(add());


function multiplier(num01,num02) {
    return num01 * num02;
}
console.log(multiplier(20,5));


() => {

}

let azerty = () => {

}

let titleSelector = document.querySelector("h1");

titleSelector.textContent = "ezeefko";

titleSelector.className("foo");

