let myImage = document.querySelector("img");
let btnImg = document.querySelector("#btnImage");
let myButton = document.querySelector("button");
let btnUserName = document.querySelector("#btnUserName");
let myHeading = document.querySelector("h1");

btnImg.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/naruto.jpg") {
    myImage.setAttribute("src", "images/naruto1.jpg");
  } else {
    myImage.setAttribute("src", "images/naruto.jpg");
  }
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, ${myName}!`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello, ${storedName}!`;
}

btnUserName.addEventListener("click", () => {
  setUserName();
});
