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
  var startTime = Date.now();

  var interval = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    document.getElementById('millisecond').innerHTML = (elapsedTime / 1000).toString().substr(-3, 2);
  }, 10);

  // console.log(document.getElementById('millisecond'))
}
