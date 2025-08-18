const navbar = document.querySelector("nav");
const span = document.querySelectorAll(".hamburger-menu span");
const hamburgerBtn = document.querySelector(".hamburger-menu");
const lightDarkBtn = document.querySelector("#light-dark");

function navbarMobile() {
  span.forEach((elem) => {
    let getClassSpan = elem.getAttribute("class");

    if (getClassSpan === "hamburger-off") {
      elem.setAttribute("class", "hamburger-on");
      navbar.style.right = "0";
      navbar.style.transition = "0.5s";
    } else {
      elem.setAttribute("class", "hamburger-off");
      navbar.style.right = "-1000px";
      navbar.style.transition = "0.5s";
    }
  });
}

function lightDarkMode() {
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const circle = document.querySelector(".circle");
  const anchor = document.querySelectorAll("nav a");

  let classList = lightDarkBtn.classList;
  let checkList = classList.contains("light");

  if (checkList) {
    body.style.backgroundColor = "#333";
    header.style.backgroundColor = "#333";
    nav.style.backgroundColor = "#333";
    circle.style.marginLeft = "20px";
    anchor.forEach((elem) => (elem.style.color = "#fff"));

    body.style.transition = "background-color 0.4s";
    header.style.transition = "background-color 0.4s";
    nav.style.transition = "background-color 0.4s";
    circle.style.transition = "margin-left 0.3s";

    lightDarkBtn.classList.replace("light", "dark");
  } else {
    body.style.backgroundColor = "#fff";
    header.style.backgroundColor = "#fff";
    nav.style.backgroundColor = "#fff";
    anchor.forEach((elem) => (elem.style.color = "#333"));
    circle.style.marginLeft = "2.5px";
    lightDarkBtn.classList.replace("dark", "light");
  }
}

hamburgerBtn.addEventListener("click", navbarMobile);
lightDarkBtn.addEventListener("click", lightDarkMode);
