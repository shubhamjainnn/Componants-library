const star = document.querySelectorAll(".star");
const output = document.querySelector(".output");
for (x = 0; x < star.length; x++) {
  star[x].starValue = x + 1;
  //   star[x].addEventListener("click", function () {
  //     console.log("click");
  //   });
  ["click", "mouseover", "mouseout"].forEach(function (e) {
    star[x].addEventListener(e, showRating);
  });
}
function showRating(e) {
  let type = e.type;
  console.log(type);
  let starValue = this.starValue;
  if (type === "click") {
    if (starValue > 1) {
      output.innerHTML = "You rated this " + starValue + " star.";
    }
  }
  star.forEach(function (elem, ind) {
    if (type === "click") {
      if (ind < starValue) {
        elem.classList.add("orange");
      } else {
        elem.classList.remove("orange");
      }
    }
    if (type === "mouseover") {
      if (ind < starValue) {
        elem.classList.add("greenyellow");
      } else {
        elem.classList.remove("greenyellow");
      }
    }
    if (type === "mouseout") {
      //   if (ind < starValue) {
      //     elem.classList.add("greenyellow");
      //   } else {
      elem.classList.remove("greenyellow");
      //   }
    }
  });
}
function refresh() {
  window.location.reload();
}
