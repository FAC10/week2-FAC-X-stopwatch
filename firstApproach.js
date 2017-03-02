// function getCurrentTime() {
//   var today = new Date();
//   return today.getTime();
// }
// getCurrentTime();
// console.log(getCurrentTime());
//
//
// function convertMilliseconds(){
//   var currentTime = getCurrentTime();
//   return new Date(currentTime).toString();
// }
// convertMilliseconds();
// console.log(convertMilliseconds());



//function for counting milliseconds:

// var startTime = Date.now();
//
// var interval = setInterval(function() {
//   var elapsedTime = Date.now() - startTime;
//   document.getElementById('millisecond').innerHTML = (elapsedTime / 100).toFixed(0);
// }, 100);
//
// var startButtonOnClick = document.getElementById('start').addEventListener('click', function() {
//   document.querySelector('.startButton').innerHTML = 'Started';
//   console.log('Hi');
// });
//
