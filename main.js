// gen random color
let randomNumber1 = Math.floor(Math.random() * 256);
let randomNumber2 = Math.floor(Math.random() * 256);
let randomNumber3 = Math.floor(Math.random() * 256);
let finalColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;

// get elems doc
let colorPlace = document.querySelector("#colorPlace");
let codePlace = document.querySelector("#codePlace");
let btnGen = document.querySelector("#btnGen");

colorPlace.style.backgroundColor = finalColor;
codePlace.innerHTML = finalColor;

btnGen.addEventListener("click", generate);

function generate() {
  randomNumber1 = Math.floor(Math.random() * 256);
  randomNumber2 = Math.floor(Math.random() * 256);
  randomNumber3 = Math.floor(Math.random() * 256);
  finalColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
  colorPlace.style.backgroundColor = finalColor;
  codePlace.innerHTML = finalColor;
}
