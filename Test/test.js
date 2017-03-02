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

// QUnit.module('tests', function(assert) {

  QUnit.test('is the button start', function(assert) {
    var expected = 'Start';
    var result = document.querySelector('.startButton').innerHTML;

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

// });
//






//write a function that tests if the start button starts the watch (expected = 1)
//write a function that tests if the stop button stops the watch (expected > 0)
//write a function that tests if when the watch starts, it counts moving time in some form
//does milliseconds start over at 1 second
