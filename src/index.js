const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("turned");
      let turnedCards = [...document.getElementsByClassName("turned")];
      if (turnedCards.length === 2) {
        let checkResult = memoryGame.checkIfPair(
          turnedCards[0].getAttribute("data-card-name"),
          turnedCards[1].getAttribute("data-card-name")
        );
        if (checkResult) {
          setTimeout(() => {
            turnedCards[0].classList.remove("turned");
            turnedCards[1].classList.remove("turned");
            turnedCards[0].classList.add("hidden");
            turnedCards[1].classList.add("hidden");
          }, 1000);
        } else {
          setTimeout(() => {
            turnedCards[0].classList.remove("turned");
            turnedCards[1].classList.remove("turned");
          }, 2000);
        }
        document.getElementById("pairs-clicked").innerText =
          memoryGame.pairsClicked;
        document.getElementById("pairs-guessed").innerText =
          memoryGame.pairsGuessed;
        let finish = memoryGame.checkIfFinished();
        if (finish) {
          let finalSituation = [...document.getElementsByClassName("hidden")];
          finalSituation.forEach((element) => {
            element.classList.remove("hidden");
          });
          alert("you win!");
        }
      }
    });
  });
});
