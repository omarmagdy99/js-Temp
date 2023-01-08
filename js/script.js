// get data
let scrollToTop = document.querySelector(".scroll-top");
let sectionNames = document.querySelectorAll(".section");
let sectionArea = [];
sectionNames.forEach((sectionName) => {
  sectionArea.push([sectionName.classList[0], sectionName.offsetTop]);
});
let navbarPar = document.querySelector(".landing-page .header-area");

// get data
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

// nav bar open button

let navShow = document.querySelector(".landing-page .header-area .nav-show");
let navLayout = document.querySelector(".nav-layout");
let settingList = document.querySelector(".setting-box");
navShow.addEventListener("click", () => {
  settingList.classList.remove("setting-box-open");
  navLayout.style.display = "block";
  navbarLinks.style.right = "0";
});
// nav bar open button

// nav bar close button
let closeNav = document.querySelector(
  ".landing-page .header-area .links .close-icon"
);
let navbarLinks = document.querySelector(".landing-page .header-area .links");
let lanadingPage = document.querySelector(".landing-page ");

closeNav.addEventListener("click", function (e) {
  navLayout.style.display = "none";
  navbarLinks.style.right = "-100vw";
});
// nav bar close button

// Start navbar section click
function goToSection(linksF) {
  linksF.forEach((nav) => {
    nav.addEventListener("click", (e) => {
      e.preventDefault();
      let sectionLocation = document.querySelector(
        nav.dataset.section
      ).offsetTop;
      window.scrollTo({
        top: sectionLocation,
        behavior: "smooth",
      });
    });
  });
}
let linksAn = document.querySelectorAll(".header-area ul a");
goToSection(linksAn);
let bulletsLink = document.querySelectorAll(".bullet-point");
goToSection(bulletsLink);
// end navbar section click
// Start navbar active link Function
function activeScroll(winTop, arrayLinks) {
  arrayLinks.forEach((linkAn) => {
    linkAn.classList.remove("active");
  });
  if (winTop >= sectionArea[0][1] && winTop <= sectionArea[1][1]) {
    activeFunction(sectionArea[0][0], arrayLinks);
  }
  if (winTop >= sectionArea[1][1] && winTop <= sectionArea[2][1]) {
    activeFunction(sectionArea[1][0], arrayLinks);
  }
  if (winTop >= sectionArea[2][1] && winTop <= sectionArea[3][1]) {
    activeFunction(sectionArea[2][0], arrayLinks);
  }
  if (winTop >= sectionArea[3][1] && winTop <= sectionArea[4][1]) {
    activeFunction(sectionArea[3][0], arrayLinks);
  }
  if (winTop >= sectionArea[4][1] && winTop <= sectionArea[5][1]) {
    activeFunction(sectionArea[4][0], arrayLinks);
  }
  if (winTop >= sectionArea[5][1]&& winTop <= sectionArea[6][1]) {
    activeFunction(sectionArea[5][0], arrayLinks);
  }
  if (winTop >= sectionArea[6][1]) {
    activeFunction(sectionArea[6][0], arrayLinks);
  }
}

function activeFunction(sectionClassName, arrayLinks) {
  arrayLinks.forEach((linkAn) => {
    linkAn.classList.remove("active");
    if (linkAn.dataset.section == `.${sectionClassName}`) {
      linkAn.classList.add("active");
    }
    // document
    //   .querySelector(`div[data-section='.${sectionClassName}']`)
    //   .classList.add("active");
  });
}
// End navbar active link Function

// setting box

// button show
let settingButton = document.querySelector(".setting-box .setting-icon");
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

//Start bullets link
let bulletChoose = document.querySelector(".bullit-setting #cbx-3");
let bulletPar = document.querySelector(".bullet");
if (localStorage.getItem("bullets") === null) {
  localStorage.setItem("bullets", "true");
  bulletChoose.checked = true;
} else {
  if (localStorage.getItem("bullets") === "true") {
    bulletChoose.checked = true;
    bulletPar.style.display = "block";
  } else {
    bulletChoose.checked = false;
    bulletPar.style.display = "none";
  }
}

bulletChoose.addEventListener("change", (e) => {
  localStorage.setItem("bullets", bulletChoose.checked);
  if (e.target.checked) {
    bulletPar.style.display = "block";
  } else {
    bulletPar.style.display = "none";
  }
});
//End bullets link

// Start reset option
let resetButton = document.querySelector(".reset-option button");
resetButton.addEventListener("click", (e) => {
  localStorage.clear();
  window.location.reload();
});
// end reset option
// setting box

// get data
let skillSection = document.querySelector(".skills");
let lastScroll = 0;
window.onscroll = () => {
  //   // hide navbar when scroll to bottom
  let nowScroll = window.scrollY;
  if (lastScroll > nowScroll) {
    navbarPar.style.top = "0";
  } else {
    navbarPar.style.top = "-110px";
  }
  lastScroll = nowScroll;
  // hide navbar when scroll to bottom

  // start skill section

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
  // end skill section

  // Start navbar active link
  activeScroll(window.scrollY, linksAn);
  activeScroll(window.scrollY, bulletsLink);
  // End navbar active link

  // navbar color
  if (windowScrollTop > 100) {
    lanadingPage.classList.add("active");
  } else {
    lanadingPage.classList.remove("active");
  }
  // navbar color

  // scroll to top button
  if (windowScrollTop > 100) {
    scrollToTop.style.bottom = "40px";
  } else {
    scrollToTop.style.bottom = "-60px";
  }
  scrollToTop.addEventListener("click", (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // scroll to top button
};

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

// Start testimonial
// get data
let upButton = document.querySelector(".ts-button .ts-button-up");
let downButton = document.querySelector(".ts-button .ts-button-down");
let personDiv = document.querySelectorAll(".ts-person");
let letpersonLength = (personDiv.length - 1) * 310;
let topValue = 0;
// set action

// up button
upButton.addEventListener("click", (e) => {
  if (topValue > -letpersonLength) {
    topValue -= 310;
    if (topValue > -letpersonLength) {
      upButton.style.opacity = "1";
    } else {
      upButton.style.opacity = "0.5";
    }
    downButton.style.opacity = "1";
    // change top value
    personDiv.forEach((per) => {
      per.style.cssText = `top:${topValue}px`;
    });
  }
});

// down button
downButton.addEventListener("click", (e) => {
  if (topValue < 0) {
    topValue += 310;
    if (topValue < 0) {
      downButton.style.opacity = "1";
    } else {
      downButton.style.opacity = "0.5";
    }
    upButton.style.opacity = "1";

    // change top value
    personDiv.forEach((per) => {
      per.style.cssText = `top:${topValue}px`;
    });
  } else {
    downButton.style.opacity = "0.5";
  }
});
// End testimonial
