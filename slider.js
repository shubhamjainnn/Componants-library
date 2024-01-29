// ----------volume bar js-------------------------
window.onload = function () {
  slider = document.querySelector(".slider input");
  slider.oninput = function () {
    progressBar = document.querySelector(".slider progress");
    progressBar.value = slider.value;
    sliderValue = document.querySelector(".slider-value");
    sliderValue.innerHTML = slider.value;
  };
};

// slider js

var slides = document.querySelectorAll(".slide");
var count = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
const slideImg = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
};

function goPrev() {
  count--;
  if (count == -1) {
    count = slides.length - 1;
  }
  slideImg();
}
function goNext() {
  count++;
  if (count == slides.length) {
    count = 0;
  }
  slideImg();
}
