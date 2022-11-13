 class Player {
   constructor(name, deck){
        this.name = name;
        this.deck = deck;
        this.score = 0;
    }
 }

 const player1 = new Player();
 const player2 = new Player();

 //creating 52 cards for a deck
 let suits = ['S', 'C', 'D', 'H'];
 let ranks = ['2', '3','4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
 let mainDeck = [];

 for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 13; j++) {
        mainDeck.push(ranks[j] + suits[i]);
    }
 }
 console.log(mainDeck)

 const cardValueMap = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13
 }


  //SHUFFLING METHOD
  function shuffle(arr) {
    let currentIndex = arr.length, randomIndex;

    while(currentIndex !=0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
  }

  //shuffling the deck of card
 shuffle(mainDeck);
console.log(mainDeck);

 player1.deck = mainDeck.slice(0, 26);
  player2.deck = mainDeck.slice(26, 52);

  console.log('Player 1 hand: ' + player1.deck);
  console.log('Player 2 hand: ' + player2.deck);
  
  player1.score = 0;
  player2.score = 0;
  player1Card = 0;
  player2Card = 0;

  for(let i = 0; i < player1.deck.length; i++) {
    player1Card = player1.deck[i];
    player2Card = player2.deck[i];
    
    if(cardValueMap[player1Card] > cardValueMap[player2Card]) {
        player1.score++;
    }
    else if(cardValueMap[player2Card] > cardValueMap[player1Card]) {
        player2.score++;
    }
  }

  console.log('Player 1 score: ' + player1.score);
  console.log('Player 2 score: ' + player2.score); 