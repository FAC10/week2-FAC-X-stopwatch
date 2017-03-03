// initial test used to check if QUnit was working
QUnit.test('add(1,1) should equal 2', function(assert) {
  var result = add(1, 1); //no change/coins just an empty array
  var expected = 2;
  assert.deepEqual(result, expected);
}); // use deepEqual for arrays see: https://api.qunitjs.com/deepEqual/


// WE FAC-ED UP. add to readMe
// QUnit.test('does clicking the button element with a class of "start" update the DOM', function(assert) {
//   var expected = document.querySelector('.startButton').innerHTML = 'Started';
//
// // assert.equal('Started', expected);
// // });
//

QUnit.test('is the button start', function(assert) {
  var expected = 'Start';
  var result = document.querySelector('.startButton').innerHTML;

assert.equal(result, expected);
});

QUnit.test('is the button stop', function(assert) {
  var expected = 'Stop';
  var result = document.querySelector('.stopButton').innerHTML;

assert.equal(result, expected);
});

// we couldn't figure out how to test an action applied to an element after the page has loaded.
// We wrapped our test in an event listener, so it wouldrun.
document.getElementById('start').addEventListener('click', function (){
  QUnit.test('does clicking the button element with a class of "start" update the DOM', function(assert) {
    var expected = 'Started';
    var result = document.querySelector('.startButton').innerHTML;

  assert.equal(result, expected);
  });
});

document.getElementById('stop').addEventListener('click', function (){
  QUnit.test('does clicking the button element with a class of "stop" update the DOM', function (assert) {
    var expected = 'Stopped';
    var result = document.querySelector('.stopButton').innerHTML;

  assert.equal(result, expected);
  });
});

// test initials displayed when page loads
// Wrapping tests in modules makes it go away -- why?
// QUnit.module('tests initial values displayed to user before interacting with stopwatch', function(){

  QUnit.test('is the display value 0 for milliseconds when the page loads', function(assert) {
    var expected = '00';
    var result = document.getElementById('millisecond').innerHTML;

  assert.equal(result, expected);
  });

  QUnit.test('is the display value 0 for seconds when the page loads', function(assert) {
    var expected = '00';
    var result = document.getElementById('second').innerHTML;

  assert.equal(result, expected);
  });

  QUnit.test('is the display value 0 for minutes when the page loads', function(assert) {
    var expected = '00';
    var result = document.getElementById('minute').innerHTML;

  assert.equal(result, expected);
  });

  QUnit.test('is the display value 0 for hours when the page loads', function(assert) {
    var expected = '00';
    var result = document.getElementById('hour').innerHTML;

  assert.equal(result, expected);
  });
// });

// check if when counter starts, millisecond counter increases
document.getElementById('start').addEventListener('click', function (){
  QUnit.test('does clicking the button element with a class of "start", start the millisecond counter', function(assert) {
    var result = document.getElementById('millisecond').innerHTML;
    var expected = !0;


  assert.ok(result, expected);
  });
});


document.getElementById('stop').addEventListener('click', function (){
  QUnit.test('does clicking the button element with a class of "stop", change the state of the active var', function(assert) {

  assert.equal(active, false);
  });
});

QUnit.test('tests whether time is counting', function (assert) {
  var done = assert.async();

  setTimeout(function(){
    assert.strictEqual(document.getElementById('second').innerHTML, '03');
    done();
  }, 3100);
});



// }



// QUnit.test('does the second counter increase when millisecond reaches 1000', function(assert) {
//
//   var miliBoundry = +1000;
//
//
//   assert.ok(result, expected);
// });


//write a function that tests if the start button starts the watch (expected = 1)
//write a function that tests if the stop button stops the watch (expected > 0)
//write a function that tests if when the watch starts, it counts moving time in some form
//does milliseconds start over at 1 second
