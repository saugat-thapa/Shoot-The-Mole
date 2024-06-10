"using strict";
const score = document.querySelector("#score-up");
const moles = document.querySelectorAll(".mole");
let timer = document.querySelector("#count-down");
const startButton = document.querySelector("button");
const gunShot = document.querySelector("#gunshot");
let chosenHole;
let chooseHoleIndex;
let timeup;

document.querySelector("button").addEventListener("click", function start() {
  score.textContent = 0;

  document.body.style.background = "rgb(185, 235, 153)";
  time();
  game();
});

const game = function () {
  showMole();
};

const time = function () {
  timer.textcontent = 10;
  startButton.classList.add("hidden");
  var timeLeft = 9;

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
  chosenHole = document.querySelector(`.hole--${chooseHoleIndex}`);
  chosenHole.querySelector("img").src = "/src/images/mole.png";
  chosenHole.querySelector("img").addEventListener("click", onclick);
  moletime();
};

const moletime = function () {
  clearInterval(timeup);
  let msec = Math.random() * 400 + 400;

  function mtimeup() {
    clearInterval(timeup);
    if (chosenHole.querySelector("img").src.endsWith("/images/mole.png")) {
      chosenHole.querySelector("img").src = "/src/images/hole.png";
      chosenHole.querySelector("img").removeEventListener("click", onclick);
    }
    chosenHole = null;
    showMole();
  }
  timeup = setInterval(mtimeup, msec);
};

function onclick() {
  clearInterval(timeup);
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
  document.body.style.background = "rgb(146, 186, 122)";
};
