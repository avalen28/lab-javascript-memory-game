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
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 0) {
      return false;
    } else if (this.pairsGuessed < this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  }
}
