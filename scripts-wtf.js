var active = false;
var second = 0;
var minute = 0;
var hour = 0;
var interval;
// var startTime = Date.now();
//
// var millisecond = setInterval(function() {
//     var elapsedTime = Date.now() - startTime;
//     millisecond += 10;
//     // console.log(millisecond);
//     // millisecond = document.getElementById('millisecond').innerHTML = (elapsedTime / 1000).toString().slice(-3, -1);
//     // console.log(millisecond);
//   }, 10);
var millisecond = 0;






function add(x, y) {
  return x + y;
}

// change text in start button on click
document.getElementById('start').addEventListener('click', changeButton, false);

function changeButton() {
  document.querySelector('.startButton').innerHTML = 'Started';
  // console.log('Hi');
}

// change text in start button when 'stop' button is clicked
document.getElementById('stop').addEventListener('click', changeButtonAgain, false);

function changeButtonAgain() {
  document.querySelector('.stopButton').innerHTML = 'Stopped';
  // console.log('Hi again');
}


// function for counting milliseconds:
document.getElementById('start').addEventListener('click', startTimer, false);

function startTimer() {
  active = true;
  funcMili();
}

var startTime = Date.now();

// //was interval here:
var funcMili = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    millisecond += 10;
    console.log(millisecond);
    // millisecond = document.getElementById('millisecond').innerHTML = (elapsedTime / 1000).toString().slice(-3, -1);
    // console.log(millisecond);
getTime(millisecond);

  }, 10);

  // if (Number(millisecond) >= 98) {
  //   console.log('I am big');
  // }

  // console.log(document.getElementById('millisecond'))
// }

function getTime(millisecond) {
  second -= millisecond % 1000; console.log(millisecond, 'hi are you here');
  minute -=  millisecond % 60000;
  hour -= millisecond % 3600000;

  var ms = readableNumber(Math.floor(millisecond/10));
  var sec = readableNumber(second/1000);
  var min = readableNumber(minute/60000);
  var hr = readableNumber(hour/3600000);

  console.log(ms, 'hi');
  return document.querySelector('.stopwatch').innerHTML = hr + ':' + min + ':' + sec + ':' + ms;

}

function readableNumber(number) {
  return ('00' + number).substr(-2, 2);
}

// function getTime(millisecond) {
//   second += millisecond % 1000;
//   // minute =  millisecond % 60000;
//   // hour = millisecond % 3600000;
// document.querySelector('.stopwatch').innerHTML = hour + ':' + minute + ':' + second + ':' + millisecond;
//
// }
//
// getTime();


// function for stopping timer:
document.getElementById('stop').addEventListener('click', stopTimer, false);

function stopTimer() {
  active = false;
  clearInterval(interval);
}
