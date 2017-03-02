// initial test used to check if QUnit was working
QUnit.test('add(1,1) should equal 2', function(assert) {
  var result = add(1, 1); //no change/coins just an empty array
  var expected = 2;
  assert.deepEqual(result, expected);
}); // use deepEqual for arrays see: https://api.qunitjs.com/deepEqual/


// Time practice
// QUnit.test('function should return current time in milliseconds', function(assert) {
//   var date = new Date();
//   var currentTime = date.getTime();
//   assert.equal(getCurrentTime(), currentTime);
// });
//
// QUnit.test('function should convert time in milliseconds to current date', function(assert) {
//   var date = new Date();
//   var currentTime = date.getTime();
//   var currentDate = new Date(currentTime).toString();
//   assert.equal(convertMilliseconds(), currentDate);
// });

QUnit.test('clicking the start button should button from start to started', function(assert) {
var startButtonOnClick = document.getElementById('start').addEventListener('click', changeButton);
function changeButton =  document.getElementById('start').innerHTML('started');
}
  assert.equal(document.getElementById('start'), 'started');
});

//write a function that tests if the start button starts the watch (expected = 1)
//write a function that tests if the stop button stops the watch (expected > 0)
//write a function that tests if when the watch starts, it counts moving time in some form
//does milliseconds start over at 1 second
