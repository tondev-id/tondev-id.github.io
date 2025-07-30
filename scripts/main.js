const hamburberBtn = document.querySelector(".hamburger-menu");
const displayNav = document.querySelector(".navbar");
const btnClose = document.createElement("button");

hamburberBtn.addEventListener("click", () => {
  if ((hamburberBtn.style.display = "block" === "block")) {
    hamburberBtn.style.display = "none";
    displayNav.style.display = "block";
    btnClose.innerHTML = "X";
    btnClose.style.position = "absolute";
    btnClose.style.top = "55px";
    btnClose.style.right = "5px";
    btnClose.style.padding = "8px 10px";
    btnClose.style.cursor = "pointer";
    btnClose.style.outLine = "none";
    btnClose.style.border = "none";
    btnClose.style.backgroundColor = "rgb(43, 158, 43)";
    btnClose.style.color = "#eee";
    btnClose.style.borderRadius = "5px";
    displayNav.appendChild(btnClose);
  }
});

btnClose.addEventListener("mouseover", () => {
  btnClose.style.backgroundColor = "rgb(43 158 43 / 85%)";
});

btnClose.addEventListener("mouseout", () => {
  btnClose.style.backgroundColor = "rgb(43, 158, 43)";
});

btnClose.addEventListener("click", () => {
  hamburberBtn.style.display = "block";
  displayNav.style.display = "none";
});
