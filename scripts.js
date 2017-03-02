function add(x, y) {
  return x + y;
}


document.getElementById('start').addEventListener('click', changeButton, false);

function changeButton() {
  document.querySelector('.startButton').innerHTML = 'Started';
  console.log('Hi');
}

document.getElementById('stop').addEventListener('click', changeButtonAgain, false);

function changeButtonAgain() {
  document.querySelector('.stopButton').innerHTML = 'Stopped';
  console.log('Hi again');
}
