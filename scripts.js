var active = false;
var interval;
var elapsedTime;
var startTime = 0;

//ignore this
function add(x, y) {
  return x + y;
}


document.getElementById('start').addEventListener('click', changeButton, false);

function changeButton() {
  document.querySelector('.startButton').innerHTML = 'Started';
}

document.getElementById('stop').addEventListener('click', changeButtonAgain, false);

function changeButtonAgain() {
  document.querySelector('.stopButton').innerHTML = 'Stopped';
}

// function for counting milliseconds:
document.getElementById('start').addEventListener('click', startTimer, false);


function startTimer() {
  active = true;
  startTime = Date.now();

  interval = setInterval(function() {
    elapsedTime = Date.now() - startTime;
  document.getElementById('millisecond').textContent = (elapsedTime / 1000).toString().substr(-3, 2);
  var displaySec = document.getElementById('second').textContent = Math.floor(elapsedTime/1000);
  document.getElementById('minute').textContent = Math.floor(elapsedTime/60000);
  document.getElementById('hour').textContent = Math.floor(elapsedTime/3600000);

}, 10);


}




// function for stopping timer:
document.getElementById('stop').addEventListener('click', stopTimer, false);

function stopTimer() {
  active = false;
  clearInterval(interval);
}
