const log = document.querySelector('body');

document.addEventListener('keydown', logKey);

function logKey(e) {
//   console.log(e) += ` ${e.code}`;
// .code récupére la valeur qwerty du clavier 
  log.textContent += ` ${e.code}`;
// .key récupére la valeur locale du clavier.
  log.textContent += ` ${e.key}`; 
}
