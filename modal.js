function showPopup() {
  document.querySelector(".popup-container").style.visibility = "visible";
}
const openBtn = document.querySelector(".open-btn");
openBtn.addEventListener("click", showPopup);

function closePopup() {
  document.querySelector(".popup-container").style.visibility = "hidden";
}
const noBtn = document.querySelector(".no-btn");
noBtn.addEventListener("click", closePopup);

function closePopup2() {
  document.querySelector(".popup-container").style.visibility = "hidden";
}
const yesBtn = document.querySelector(".yes-btn");
yesBtn.addEventListener("click", closePopup2);

// nested----------

function showMessage() {
  document.querySelector(".message-container").style.visibility = "visible";
}
const showBtn = document.querySelector(".show-mess-btn");
showBtn.addEventListener("click", showMessage);

function closeShowmess() {
  document.querySelector(".message-container").style.visibility = "hidden";
}
const notBtn = document.querySelector(".not-btn");
notBtn.addEventListener("click", closeShowmess);

function playGame() {
  document.querySelector(".game-container").style.visibility = "visible";
}
const playBtn = document.querySelector(".play-btn");
playBtn.addEventListener("click", playGame);

function closeGame2() {
  document.querySelector(".game-container").style.visibility = "hidden";
}
const startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", closeGame2);

function closeGame() {
  document.querySelector(".game-container").style.visibility = "hidden";
}
const endBtn = document.querySelector(".end-btn");
endBtn.addEventListener("click", closeGame);

// function showPopup() {
//   document.querySelector(".popup-container").classList.add("showpopup");
// }
// const openBtn = document.querySelector(".open-btn");
// openBtn.addEventListener("click", showPopup);

// function closePopup() {
//   document.querySelector(".popup-container").classList.add("closepopup");
// }
// const noBtn = document.querySelector(".no-btn");
// noBtn.addEventListener("click", closePopup);

// function closePopup2() {
//   document.querySelector(".popup-container").classList.add("closepopup");
// }
// const yesBtn = document.querySelector(".yes-btn");
// yesBtn.addEventListener("click", closePopup2);
