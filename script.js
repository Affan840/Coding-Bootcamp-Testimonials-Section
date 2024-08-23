let previousBtn = document.querySelector(".btns button:first-of-type");
let nextBtn = document.querySelector(".btns button:last-of-type");
let sliders = document.querySelectorAll(".slider");

let index = 0;
document.addEventListener("DOMContentLoaded", () => {
  sliders[0].classList.add("display");
});

previousBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = sliders.length - 1;
  }
  sliders.forEach((slider) => {
    slider.classList.remove("display");
  });
  sliders[index].classList.add("display");
});

nextBtn.addEventListener("click", () => {
  index++;
  if (index > sliders.length - 1) {
    index = 0;
  }
  sliders.forEach((slider) => {
    slider.classList.remove("display");
  });
  sliders[index].classList.add("display");
});
