const mobileMenu = document.querySelector(".nav__list-container"),
  burgerButton = document.querySelector(".burger"),
  searchButton = document.querySelector(".search"),
  body = document.querySelector("body"),
  overlay = document.querySelector(".overlay__body");

// mobile menu show / close
burgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  searchButton.classList.toggle("disable");
  body.classList.toggle("lock");
  burgerButton.classList.toggle("active");
  overlay.classList.toggle("active");
});

// this year
let timeContainer = document.querySelector(".author time"),
  thisYear = new Date().getFullYear();
if (thisYear > 2024) {
  timeContainer.innerHTML = `2024 - ${thisYear}.`;
}

// scroll to top button
const scrollUp = () => {
  const scrollUp = document.querySelector(".scroll-up");
  this.scrollY >= 850
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
