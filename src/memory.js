class MemoryGame {
  constructor(cards) {
    this.cards = cards; // esto es la baraja (nombre + imagen)
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
    let shuffledArr = [];
    let cloneCards = [...this.cards]; // correct duplicated
    for (let i = 0; i < this.cards.length; i++) {
      let randomIndex = Math.floor(Math.random() * cloneCards.length);
      let randomCard = cloneCards.splice(randomIndex, 1);
      shuffledArr.push(randomCard);
    }
    this.cards = shuffledArr;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
  }

  checkIfFinished() {
    // ... write your code here
  }
}
console.log();
