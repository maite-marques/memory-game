var errors = 0;
var pontos = 0;

var cardList = [
  "abelha",
  "urso",
  "cavalo",
  "leão",
  // "rinoceronte",
  "baleia",
  "borboleta",
  "capivara",
  // "galinha",
  "jacaré",
  "javali",
  // "luladomar",
  "zebra"
];

var cardSet;
var board = [];
var rows = 4;
var columns = 5;

window.onload = function () {
  shuffleCards();
  startGame();
}

function shuffleCards() {
  // adding twice the cards;
  cardSet = cardList.concat(cardList);
  console.log('cardSet concat', cardSet);
  // embaralhar
  for (let i = 0; i < cardSet.length; i++) {
    let j = Math.floor(Math.random() * cardSet.length); // indice aleatório
    // troca swap
    let temp = cardSet[i];
    cardSet[i] = cardSet[j];
    cardSet[j] = temp;
  }
  console.log('cardSet shuffled', cardSet);
}

function startGame() {
  // arrange the board 4x5
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      let cardImg = cardSet.pop();
      row.push(cardImg);

      let card = document.createElement("img");
      card.id = r.toString() + "-" + c.toString();
      card.src = "./assets/" + cardImg + ".png";
      console.log('card', card)
      card.classList.add('card');
      document.getElementById('board').append(card);
    }
    board.push(row);
  }
  console.log(board);
  setTimeout(hideCards, 1000);
}

function hideCards() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let card = document.getElementById(r.toString() + "-" + c.toString());
      card.src = "./assets/background2.png";
    }
  }
}