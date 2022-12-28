function randomSetImage() {
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
  intervalRandom = setInterval(() => {
    let randomImage = Math.floor(Math.random() * landingImage.length);
    //   console.log(randomImage);
    landingPage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("pic/${landingImage[randomImage]}")`;
  }, 8000);
  // set array Image
}

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
    localStorage.setItem("color-storage", mainColor);
  });
});
// color setting

//check local storage color
colorStorage = localStorage.getItem("color-storage");
if (colorStorage !== null) {
  document.documentElement.style.setProperty("--main-color", colorStorage);
  dataColor.forEach((liActive) => {
    liActive.classList.remove("active");
  });
  document
    .querySelector(`li[data-color='${colorStorage}']`)
    .classList.add("active");
}
//check local storage color

// random image ask button
randomAskButton = document.querySelectorAll(
  ".setting-body .random-image-box .r-image-div button"
);
randomAskButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    randomAskButton.forEach((btnRC) => {
      btnRC.classList.remove("active");
    });
    e.target.classList.add("active");
    localStorage.setItem("randomImage", e.target.getAttribute("data-random"));
    if (e.target.getAttribute("data-random") === "yes") {
      randomSetImage();
    } else {
      clearInterval(intervalRandom);
    }
  });
});

// set random image by local storage
if (
  localStorage.getItem("randomImage") === null ||
  localStorage.getItem("randomImage") === "yes"
) {
  randomSetImage();
  document
    .querySelector(".setting-body .random-image-box .r-image-div .yes")
    .classList.add("active");
} else {
  document
    .querySelector(".setting-body .random-image-box .r-image-div .no")
    .classList.add("active");
}

// set random image by local storage

// random image ask button
// setting box

// start skill section
// get data
let skillSection = document.querySelector(".skills");
window.onscroll = () => {
  let scrollTop = skillSection.offsetTop;
  let scrollHeight = skillSection.offsetHeight;
  let widowHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;
  let skillSpan = document.querySelectorAll(
    ".skills .container .skills-section .skill-progress span"
  );
  if (windowScrollTop > scrollTop + scrollHeight - widowHeight) {
    skillSpan.forEach((span) => {
      span.style.width = span.dataset.skill;
    });
  } else {
    skillSpan.forEach((span) => {
      span.style.width = 0;
    });
  }
};
// end skill section

// Start gallery section
let galleryImage = document.querySelectorAll(".gallery img");
galleryImage.forEach((g) => {
  g.addEventListener("click", (e) => {
    // create Element
    let popup = document.createElement("div");
    let popuplayout = document.createElement("div");
    let popupBody = document.createElement("div");
    let popupImage = document.createElement("img");
    let popuph = document.createElement("h3");
    let popupClose = document.createElement("p");
    // add text
    popuph.textContent = g.alt;
    popupClose.textContent = "X";
    // add src
    popupImage.src = g.src;
    // add class to elements
    popup.classList.add("popup-gallery");
    popuplayout.classList.add("popup-layout");
    popupBody.classList.add("popup-body");
    popupClose.classList.add("popup-close");

    // append Child
    popupBody.appendChild(popuph);
    popupBody.appendChild(popupImage);
    popupBody.appendChild(popupClose);
    popup.appendChild(popupBody);
    popup.appendChild(popuplayout);
    document.body.appendChild(popup);
  });
});

//close button
document.addEventListener("click", (e) => {
  if (
    e.target.classList.value === "popup-close" ||
    e.target.classList.value === "popup-layout"
  ) {
    document.querySelector(".popup-gallery").remove();
  }
});
// end gallery section
