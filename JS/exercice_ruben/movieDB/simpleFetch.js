console.log("Hello you are in the lil fetch program");

/*
  Cette requete ne demande qu'un film
  Vous avez la possibilité de demander plusieurs films
  Le traitement est alors bien différents 
*/

let urlOneMovie = "https://api.themoviedb.org/3/movie/560?api_key=";
let urlMultipleMovie = "https://api.themoviedb.org/3/list/1?api_key=";
let languages = "&language=fr";
let key = "bf26301d9698c1061427652e6ea2f518";

//requete pour obtenir notre json
let request = async () => {
  const response = await fetch(`${urlMultipleMovie}${key}${languages}`);
  if (response.ok) {
    // Si le statut est entre 200-299
    // Nous récuperons la reponse
    let json = response.json();
    return Promise.resolve(json);
  } else {
    //sinon la reponse est  400 à 500 alors
    return Promise.reject("La requete n'a pas fonctionné");
  }
};

request().then(async (response) => {
  //Traitement de notre requete pour un film
  var movie = response;
  console.log(movie);
  //à partir de maintenant nous allons travailler sur notre objet

  createMovie(movie.original_title, movie.poster_path, movie.overview);

  // //Traitement de notre requete pour pludisue film
  // var movies = response.items;
  // console.log(movies)
  // //à partir de maintenant nous allons travailler sur notre objet
  // movies.forEach(movie => {
  //  createMovie(movie.original_title,movie.poster_path,movie.overview)
  // });
});

//Création d'une fonction qui crée des élément dans notre page
//New article servira uniquement dans la structure de notre page
let sectionSelector = document.querySelector("section");
let newArticle, newTitle, newImg, newSynopsis;

function createElements() {
  //Creation des éléments
  newArticle = document.createElement("article");
  newTitle = document.createElement("h2");
  newImg = document.createElement("img");
  newSynopsis = document.createElement("p");
}

function fillElements(title, imgSrc, synopsis) {
  //nous remplissont ensuite nos éléments
  newTitle.textContent = title; //Nous mettrons le titre ici
  newImg.src = `https://image.tmdb.org/t/p/w500/${imgSrc}`; //nous mettrons la source de l'image ici
  newSynopsis.textContent = synopsis; //Nous mettrons notre synopsis ici
}

function appendElements() {
  sectionSelector.append(newArticle);
  newArticle.append(newTitle);
  newArticle.append(newImg);
  newArticle.append(newSynopsis);
}

function createMovie(title, imgSrc, synopsis) {
  createElements();
  fillElements(title, imgSrc, synopsis);
  appendElements();
}
