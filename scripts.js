function add(x, y) {
  return x + y;
}

function getCurrentTime() {
  var today = new Date();
  return today.getTime();
}

getCurrentTime();
// console.log(getCurrentTime());

function convertMilliseconds(){
  var currentTime = getCurrentTime();
  return new Date(currentTime).toString();
}

convertMilliseconds();
console.log(convertMilliseconds());
