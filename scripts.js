var active = false;
var second = 0;
var minute = 0;
var hour = 0;
// var interval;
// var startTime = Date.now();
var millisecond = 0;



// Example test
// function add(x, y) {
//   return x + y;
// }


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
document.getElementById('start').addEventListener('click', addTenMilliseconds, false);

// function startTimer() {
//   active = true;

// var startTime = Date.now();
//
//
// //was interval here:
// millisecond = setInterval(function() {
//     var elapsedTime = Date.now() - startTime;
//     millisecond += 10;
//     console.log(millisecond);
//     // millisecond = document.getElementById('millisecond').innerHTML = (elapsedTime / 1000).toString().slice(-3, -1);
//     // console.log(millisecond);
//   }, 10);

  // if (Number(millisecond) >= 98) {
  //   console.log('I am big');
  // }

  // console.log(document.getElementById('millisecond'))
// }
// function addTenMili(){
//   setInterval(function () {
//     millisecond += 10;
//     console.log(millisecond);
//     return millisecond;
//   } 10);
// }

// addTenMili()

var addTenMilliseconds = setInterval(function() {
    // var elapsedTime = Date.now() - startTime;
     millisecond += 10;
     return millisecond;
    // millisecond = document.getElementById('millisecond').innerHTML = (elapsedTime / 1000).toString().slice(-3, -1);
    // console.log(millisecond);
  }, 10);

// addTenMilliseconds();

function displayMillisecond(){
  document.getElementById('millisecond').innerHTML = readableNumber(Math.floor(millisecond/10));
}

displayMillisecond();

function getTime(millisecond) {
  second -= millisecond % 1000; console.log(second, 'hi are you here');
  minute -=  millisecond % 60000;
  hour -= millisecond % 3600000;

  var ms = readableNumber(Math.floor(millisecond/10));
  var sec = readableNumber(second/1000);
  var min = readableNumber(minute/60000);
  var hr = readableNumber(hour/3600000);

  console.log(ms, 'hi');
  // document.querySelector('.stopwatch').innerHTML = hr + ':' + min + ':' + sec + ':' + ms;

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
getTime();


// function for stopping timer:
document.getElementById('stop').addEventListener('click', stopTimer, false);

function stopTimer() {
  active = false;
  clearInterval(interval);
}
