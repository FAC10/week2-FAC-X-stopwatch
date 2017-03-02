function add(x, y) {
  return x + y;
}

document.getElementById('start').addEventListener('click', changeButton, false);

function changeButton() {
  document.querySelector('.startButton').innerHTML = 'Started';
  console.log('Hi');
}
