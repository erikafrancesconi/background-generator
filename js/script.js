const body = document.querySelector('body');
const resetBtn = document.querySelector('#reset');

// Colors
const startColorElement = document.getElementById('startcolor');
const endColorElement = document.getElementById('endcolor');
let startColor = startColorElement.textContent;
let endColor = endColorElement.textContent;
const originalStartColor = startColor;
const originalEndColor = endColor;
const colora = document.getElementById('stc');
const colorb = document.getElementById('endc');

// Direction
const direction1 = document.getElementById('direction1');
const direction2 = document.getElementById('direction2');
let direction = direction1.value;
const originalDirection = direction;
const directionElement = document.getElementById('dir');

// Functions
const setStartColor = (color=originalStartColor) => {
  startColor = color;
  startColorElement.textContent = color;
}

const setEndColor = (color=originalEndColor) => {
  endColor = color;
  endColorElement.textContent = color;
}

const setDirection = (value=originalDirection) => {
  direction = value;
  directionElement.textContent = value;
}

const redraw = () => {
  body.style.background = `linear-gradient(${direction}, ${startColor}, ${endColor})`;
}

// Events
colora.addEventListener('input', () => {
  setStartColor(colora.value);
  redraw();
});
colorb.addEventListener('input', () => {
  setEndColor(colorb.value);
  redraw();
});

resetBtn.addEventListener('click', () => {
  setStartColor();
  colora.value = originalStartColor;
  setEndColor();
  colorb.value = originalEndColor;
  setDirection();
  direction1.checked = true;
  redraw();
});

direction1.addEventListener('input', () => {
  setDirection(direction1.value);
  redraw();
});
direction2.addEventListener('input', () => {
  setDirection(direction2.value);
  redraw();
});

