//Crie 3 variáveis, cada uma com um array:
// - Comedy
// -Action
// -Fantasy

//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
// -title:
// -director:
// -year:

let Comedy = [
  {
    title: "Ghostbusters",
    director: "Ivan Reitman",
    year: 1984,
  },
];

let Action = [
  {
    title: "Terminator 2",
    director: "James Cameron",
    year: 1991,
  },
];

let Fantasy = [
  {
    title: "Morbius",
    director: "Daniel Espinosa",
    year: 2022,
  },
];

console.log(Comedy)
console.log(Action)
console.log(Fantasy)

// *DESAFIO EXTRA*

//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console:
// IF: "MY FAVORIT MOVIE IS..."
// ELSE: "NOT EVEN 5 STARS..."

let FavMovieRating = 18;

if (FavMovieRating >= 18) {
  console.log("MY FAVORITE MOVIE IS A THIRLLING AND SATISFYING EXPERIENCE");
} else {
  console.log(
    "NOT EVEN 5 STARS RATED MOVIES WILL BE ENOUGH TO SATISFY MY YEARNING FOR ADULT/HORROR MOVIES"
  );
}
