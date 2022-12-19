// get landing page
let landingPage = document.querySelector(".landing-page");
// set array Image
let landingImage = [
  "R.jfif",
  "R (1).jfif",
  "R (2).jfif",
  "R (3).jfif",
  "R (4).jfif",
];
setInterval(() => {
  let randomImage = Math.floor(Math.random() * landingImage.length);
  //   console.log(randomImage);
  landingPage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("pic/${landingImage[randomImage]}")`;
}, 8000);

// nave bar close button
let closeNav = document.querySelector(
  ".landing-page .header-area .links .close-icon"
);
let navbarLinks = document.querySelector(".landing-page .header-area .links");

closeNav.addEventListener("click", function (e) {
  navbarLinks.style.right = "-100vw";
});

let navShow = document.querySelector(".landing-page .header-area .nav-show");
navShow.addEventListener("click", () => {
  navbarLinks.style.right = "0";
});
