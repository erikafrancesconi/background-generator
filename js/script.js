// TODO: 
// replace querySelector with getElementById which is faster
// replace firstChild.replaceWith with textContent which is more readable

var body = document.querySelector('body');

var startColorElement = document.querySelector('#startcolor');
var endColorElement = document.querySelector('#endcolor');
var startColor = startColorElement.firstChild.data;
var endColor = endColorElement.firstChild.data;
var originalStartColor = startColor;
var originalEndColor = endColor;

var direction1 = document.querySelector('#direction1');
var direction2 = document.querySelector('#direction2');
var direction = direction1.value;
var originalDirection = direction;
var directionElement = document.getElementById('dir');

function redraw() {
  var style = 'background: linear-gradient(' + direction + ', ' + startColor + ' , ' + endColor + ')';
  body.setAttribute('style', style);
}

function setColor(which, color) {
  if (which === 'start') {
    startColor = color;
    startColorElement.firstChild.replaceWith(document.createTextNode(color));
  } else if (which === 'end') {
    endColor = color;
    endColorElement.firstChild.replaceWith(document.createTextNode(color));
  }
}

var colora = document.querySelector('#stc');
var colorb = document.querySelector('#endc');
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
  directionElement.firstChild.replaceWith(document.createTextNode(value));
  // directionElement.textContent = value;
}

direction1.addEventListener('input', function() {
  setDirection(this.value);
  redraw();
});
direction2.addEventListener('input', function() {
  setDirection(this.value);
  redraw();
});

