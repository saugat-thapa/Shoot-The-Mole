"using strict";
const score = document.querySelector("#score-up");
const moles = document.querySelectorAll(".mole");
let timer = document.querySelector("#count-down");
const startButton = document.querySelector("button");
const gunShot = document.querySelector("#gunshot");
let chosenHole;
let chooseHoleIndex;

document.querySelector("button").addEventListener("click", function start() {
  score.textContent = 0;
  document.body.style.background = "rgb(135, 238, 71";
  time();
  game();
});

const game = function () {
  showMole();
};

const time = function () {
  startButton.classList.add("hidden");
  var timeLeft = 10;

  function updateTimer() {
    timer.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(countDown);
      timer.textContent = "0";
      startButton.classList.remove("hidden");
      gameOver();
    } else {
      timeLeft--;
    }
  }

  let countDown = setInterval(updateTimer, 1000);
};

const showMole = function () {
  chooseHoleIndex = Math.ceil(Math.random() * 6);
  console.log(chooseHoleIndex);
  chosenHole = document.querySelector(`.hole--${chooseHoleIndex}`);
  chosenHole.querySelector("img").src = "/src/images/mole.png";
  chosenHole.querySelector("img").addEventListener("click", onclick);
};

function onclick() {
  gunShot.currentTime = 0;
  gunShot.play();
  if (chosenHole.querySelector("img").src.endsWith("/images/mole.png")) {
    chosenHole.querySelector("img").src = "/src/images/hole.png";
    chosenHole.querySelector("img").removeEventListener("click", onclick);
    score.textContent++;
  }
  chosenHole = null;

  showMole();
}

const gameOver = function () {
  chosenHole.querySelector("img").src = "/src/images/hole.png";
  chosenHole.querySelector("img").removeEventListener("click", onclick);
  chosenHole = null;
  document.body.style.background = "lime";
};
