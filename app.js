// Cards
let card1 = document.getElementById("card1");

let card2 = document.getElementById("card2");

let card3 = document.getElementById("card3");

let card11 = document.getElementById("card11");

let card22 = document.getElementById("card22");

let card33 = document.getElementById("card33");

// start btn
let start = document.getElementById("start");

// section center
let container = document.getElementById("card");

// 1.The user clicks start and the cards flip and get shuffled

start.addEventListener("click", function () {
  let cards = [card1, card2, card3, card11, card22, card33];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(cards);

  cards.forEach((cards) => {
    container.append(cards);
  });
});

// 2.When the user clicks a card it flips over

// 3.When a user clicks another card to find its match, If it is wrong the other both cards turn back,If it is true both cards stay turned over

// OPTIONAL add a time limit to the game
