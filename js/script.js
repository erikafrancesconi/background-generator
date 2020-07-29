var body = document.querySelector('body');

var startColorElement = document.getElementById('startcolor');
var endColorElement = document.getElementById('endcolor');
var startColor = startColorElement.textContent;
var endColor = endColorElement.textContent;
var originalStartColor = startColor;
var originalEndColor = endColor;

var direction1 = document.getElementById('direction1');
var direction2 = document.getElementById('direction2');
var direction = direction1.value;
var originalDirection = direction;
var directionElement = document.getElementById('dir');

function redraw() {
  var style = 'linear-gradient(' + direction + ', ' + startColor + ' , ' + endColor + ')';
  body.style.background = style;
}

function setColor(which, color) {
  if (which === 'start') {
    startColor = color;
    startColorElement.textContent = color;
  } else if (which === 'end') {
    endColor = color;
    endColorElement.textContent = color;
  }
}

var colora = document.getElementById('stc');
var colorb = document.getElementById('endc');
colora.addEventListener('input', function() {
  setColor('start', this.value);
  redraw();
});
colorb.addEventListener('input', function() {
  setColor('end', this.value);
  redraw();
});

var resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', function() {
  setColor('start', originalStartColor);
  colora.value = originalStartColor;
  setColor('end', originalEndColor);
  colorb.value = originalEndColor;
  setDirection(originalDirection);
  direction1.checked = true;
  redraw();
});

function setDirection(value) {
  direction = value;
  directionElement.textContent = value;
}

direction1.addEventListener('input', function() {
  setDirection(this.value);
  redraw();
});
direction2.addEventListener('input', function() {
  setDirection(this.value);
  redraw();
});

