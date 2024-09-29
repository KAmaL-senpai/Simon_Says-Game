let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;

let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started!");
    started = true;
    levelUp();
  }
});

function btnFash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 200);
}
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let rand = Math.floor(Math.random() * 4);
  let randColor = btns[rand];
  let randbtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFash(randbtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over! your score was <b>${level}</b> <br> press any key to start `;
    let bod = document.querySelector("body");
    bod.style.backgroundColor = "red";
    setTimeout(() => {
      bod.style.backgroundColor = "white";
    }, 150);
    reset();
  }
}
function btnPress() {
  let btn = this;
  btnFash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
