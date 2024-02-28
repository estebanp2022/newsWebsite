let scrollContainer = document.querySelector(".gallery-container");
let backBtn = document.getElementsByClassName("prev");
let nextBtn = document.getElementsByClassName("next");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("active");
});
