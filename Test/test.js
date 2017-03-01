// initial test used to check if QUnit was working
QUnit.test('add(1,1) should equal 2', function(assert) {
  var result = add(1, 1); //no change/coins just an empty array
  var expected = 2;
  assert.deepEqual(result, expected);
}); // use deepEqual for arrays see: https://api.qunitjs.com/deepEqual/

QUnit.test('function should return current time in milliseconds', function(assert) {
  var date = new Date();
  var currentTime = date.getTime();
  assert.equal(getCurrentTime(), currentTime);
});

// QUnit.test('function should convert time in milliseconds to current date', function(assert) {
//   var date = new Date();
//   var currentDate = date.getTime().toString();
//   assert.equal(convertMilliseconds(), currentDate);
// });

QUnit.test('function should convert time in milliseconds to current date', function(assert) {
  var date = new Date();
  var currentTime = date.getTime();
  var currentDate = new Date(currentTime).toString();
  assert.equal(convertMilliseconds(), currentDate);
});



// QUnit.test('If 2, returns 2', function(asserts) {
//   asserts.equal(fizzBuzz(2), 2, "Success! 2 does equal 2")
// })


// currentDate.toString('yyyy-MM-dd');
