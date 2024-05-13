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

// hide / show navigation on scroll
// let prevScrollpos = window.scrollY;
// window.onscroll = () => {
//   let currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     navbar.style.top = "0";
//   } else {
//     navbar.style.top = "-250px";
//   }
//   prevScrollpos = currentScrollPos;
// };
