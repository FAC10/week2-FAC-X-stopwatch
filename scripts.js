var active = false;
var interval;

function add(x, y) {
  return x + y;
}


document.getElementById('start').addEventListener('click', changeButton, false);

function changeButton() {
  document.querySelector('.startButton').innerHTML = 'Started';
  // console.log('Hi');
}

document.getElementById('stop').addEventListener('click', changeButtonAgain, false);

function changeButtonAgain() {
  document.querySelector('.stopButton').innerHTML = 'Stopped';
  // console.log('Hi again');
}

// function for counting milliseconds:
document.getElementById('start').addEventListener('click', startTimer, false);

function startTimer() {
  active = true;

  var startTime = Date.now();

  interval = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    document.getElementById('millisecond').innerHTML = (elapsedTime / 1000).toString().substr(-3, 2);
  }, 10);

  // console.log(document.getElementById('millisecond'))
}


// function for stopping timer:
document.getElementById('stop').addEventListener('click', stopTimer, false);

function stopTimer() {
  active = false;
  clearInterval(interval);
}
