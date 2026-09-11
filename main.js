let showbut = document.querySelector(".first-faq-image");
let showbut2 = document.querySelector(".second-faq-image");
let showbut3 = document.querySelector(".third-faq-image");
let showbut4 = document.querySelector(".fourth-faq-image");

let firstFaqText = document.querySelector(".first-faq-text");
let secondFaqText = document.querySelector(".second-faq-text");
let thirdFaqText = document.querySelector(".third-faq-text");
let fourthFaqText = document.querySelector(".fourth-faq-text");

const icon1 = document.querySelector(".first-faq-image img");
const icon2 = document.querySelector(".second-faq-image img");
const icon3 = document.querySelector(".third-faq-image img");
const icon4 = document.querySelector(".fourth-faq-image img");

function reset() {
  icon1.src = "images/icon-plus.svg";
  icon2.src = "images/icon-plus.svg";
  icon3.src = "images/icon-plus.svg";
  icon4.src = "images/icon-plus.svg";
}

function show() {
  if (firstFaqText.style.display === "flex") {
    firstFaqText.style.display = "none";
    reset();
  } else {
    reset();
    firstFaqText.style.display = "flex";
    secondFaqText.style.display = "none";
    thirdFaqText.style.display = "none";
    fourthFaqText.style.display = "none";
    icon1.src = "images/icon-minus.svg";
  }
}

showbut.addEventListener("click", show);

function show2() {
  if (secondFaqText.style.display === "flex") {
    secondFaqText.style.display = "none";
    reset();
  } else {
    reset();
    firstFaqText.style.display = "none";
    secondFaqText.style.display = "flex";
    thirdFaqText.style.display = "none";
    fourthFaqText.style.display = "none";
    icon2.src = "images/icon-minus.svg";
  }
}

showbut2.addEventListener("click", show2);

function show3() {
  if (thirdFaqText.style.display === "flex") {
    thirdFaqText.style.display = "none";
    reset();
  } else {
    reset();
    firstFaqText.style.display = "none";
    secondFaqText.style.display = "none";
    thirdFaqText.style.display = "flex";
    fourthFaqText.style.display = "none";
    icon3.src = "images/icon-minus.svg";
  }
}

showbut3.addEventListener("click", show3);

function show4() {
  if (fourthFaqText.style.display === "flex") {
    fourthFaqText.style.display = "none";
    reset();
  } else {
    reset();
    firstFaqText.style.display = "none";
    secondFaqText.style.display = "none";
    thirdFaqText.style.display = "none";
    fourthFaqText.style.display = "flex";
    icon4.src = "images/icon-minus.svg";
  }
}

showbut4.addEventListener("click", show4);
