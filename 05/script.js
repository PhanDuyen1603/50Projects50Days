const bg = document.getElementById("bg");
const loadText = document.getElementById("loadText");
console.log(bg);
console.log(loadText);

let load = 0;

let int = setInterval(loadIncrease, 30);

function loadIncrease() {
  load++;
  if (load === 100) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 10, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
