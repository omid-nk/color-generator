// gen random color
let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);
let finalColor = `rgb(${red}, ${green}, ${blue})`;

// get elems doc
let colorPlace = document.querySelector("#colorPlace");
let codePlace = document.querySelector("#codePlace");
let btnGen = document.querySelector("#btnGen");

colorPlace.style.backgroundColor = finalColor;
codePlace.innerHTML = finalColor;

btnGen.addEventListener("click", generate);

function generate() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  finalColor = `rgb(${red}, ${green}, ${blue})`;
  colorPlace.style.backgroundColor = finalColor;
  codePlace.innerHTML = finalColor;
}
