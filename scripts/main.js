const hamburgerBtn = document.getElementById("hamburger-btn");

let isMenuHamburger = false;

hamburgerBtn.addEventListener("click", () => {
  const navContent = document.querySelector("ul");
  const contactBtn = document.querySelector(".contact-btn");
  const linesTop = document.querySelector(".hamburger-btn .top");
  const linesMiddle = document.querySelector(".hamburger-btn .middle");
  const linesBottom = document.querySelector(".hamburger-btn .bottom");

  if (isMenuHamburger === false) {
    isMenuHamburger = true;
    navContent.classList.add("active");
    contactBtn.classList.add("active");
    linesTop.classList.add("active");
    linesMiddle.classList.add("active");
    linesBottom.classList.add("active");
  } else {
    isMenuHamburger = false;
    navContent.classList.remove("active");
    contactBtn.classList.remove("active");
    linesTop.classList.remove("active");
    linesMiddle.classList.remove("active");
    linesBottom.classList.remove("active");
  }
});