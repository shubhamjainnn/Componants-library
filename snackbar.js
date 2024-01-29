const mailBtn = document.querySelector(".snackbar-mail-btn");
const cartBtn = document.querySelector(".snackbar-cart-btn");
const mailBox = document.querySelector(".mail-txt-box");
const cartBox = document.querySelector(".cart-txt-box");

function hideMail() {
  mailBox.style.visibility = "visible";
  setTimeout(() => {
    mailBox.style.visibility = "hidden";
  }, 1000);
}
mailBtn.addEventListener("click", hideMail);

function hideCart() {
  cartBox.style.visibility = "visible";
  setTimeout(() => {
    cartBox.style.visibility = "hidden";
  }, 1000);
}
cartBtn.addEventListener("click", hideCart);

// toast

const toastBtn = document.querySelector(".toast-btn");
const toastBox = document.querySelector(".toast-container");

function hideToast() {
  toastBox.style.visibility = "visible";
  setTimeout(() => {
    toastBox.style.visibility = "hidden";
  }, 1000);
}

toastBtn.addEventListener("click", hideToast);

// position

const topLBtn = document.querySelector(".top-l-btn");
const topLBox = document.querySelector(".top-l-snack");
const topRBtn = document.querySelector(".top-r-btn");
const topRBox = document.querySelector(".top-r-snack");
const bottomLBtn = document.querySelector(".bottom-l-btn");
const bottomLBox = document.querySelector(".bottom-l-snack");
const bottomRBtn = document.querySelector(".bottom-r-btn");
const bottomRBox = document.querySelector(".bottom-r-snack");

function hideSnackbar1() {
  topLBox.style.visibility = "visible";
  setTimeout(() => {
    topLBox.style.visibility = "hidden";
  }, 1000);
}

topLBtn.addEventListener("click", hideSnackbar1);

function hideSnackbar2() {
  topRBox.style.visibility = "visible";
  setTimeout(() => {
    topRBox.style.visibility = "hidden";
  }, 1000);
}

topRBtn.addEventListener("click", hideSnackbar2);

function hideSnackbar3() {
  bottomLBox.style.visibility = "visible";
  setTimeout(() => {
    bottomLBox.style.visibility = "hidden";
  }, 1000);
}

bottomLBtn.addEventListener("click", hideSnackbar3);

function hideSnackbar4() {
  bottomRBox.style.visibility = "visible";
  setTimeout(() => {
    bottomRBox.style.visibility = "hidden";
  }, 1000);
}

bottomRBtn.addEventListener("click", hideSnackbar4);
