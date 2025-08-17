const hamburgerBtn = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("nav");
const span = document.querySelectorAll(".hamburger-menu span");

hamburgerBtn.addEventListener("click", () => {
  span.forEach((elem) => {
    if (elem.getAttribute("class") === "hamburger-off") {
      elem.setAttribute("class", "hamburger-on");
      navbar.style.right = "0";
      navbar.style.transition = "0.5s";
    } else {
      elem.setAttribute("class", "hamburger-off");
      navbar.style.right = "-450px";
      navbar.style.transition = "0.5s";
    }
  })
});
