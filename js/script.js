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
// set array Image







// nave bar open button

let navShow = document.querySelector(".landing-page .header-area .nav-show");
let navLayout = document.querySelector(".nav-layout");
navShow.addEventListener("click", () => {
  settingList.classList.remove("setting-box-open");
  navLayout.style.display = "block";
  navbarLinks.style.right = "0";
});
// nave bar open button




// nave bar close button
let closeNav = document.querySelector(
  ".landing-page .header-area .links .close-icon"
);
let navbarLinks = document.querySelector(".landing-page .header-area .links");

closeNav.addEventListener("click", function (e) {
  navLayout.style.display = "none";
  navbarLinks.style.right = "-100vw";
});
// nave bar close button








// setting box





// button show
let settingButton = document.querySelector(".setting-box .setting-icon");
let settingList = document.querySelector(".setting-box");
settingButton.addEventListener("click", () => {
  settingList.classList.toggle("setting-box-open");
  document
    .querySelector(".setting-box .setting-icon .fa-gear")
    .classList.toggle("fa-spin");
});
// button show








// color setting
let dataColor = document.querySelectorAll(".setting-body .color li");
dataColor.forEach((li) => {
  li.addEventListener("click", (e) => {
    dataColor.forEach((liActive) => {
      liActive.classList.remove("active");
    });
    e.target.classList.add("active");
    let mainColor = li.getAttribute("data-color");
    document.documentElement.style.setProperty("--main-color", mainColor);
    localStorage.setItem("color-storage",mainColor);
  });
});
// color setting




//check local storage color
colorStorage=localStorage.getItem("color-storage");
if(colorStorage!==null){
  document.documentElement.style.setProperty("--main-color", colorStorage);
  dataColor.forEach((liActive) => {
    liActive.classList.remove("active");
  });
  document.querySelector(`li[data-color='${colorStorage}']`).classList.add("active");
}
//check local storage color
// setting box
