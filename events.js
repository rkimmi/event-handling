// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  one()
  two()
  three()
  four()
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we add an event listener to it:
  one.addEventListener('mouseenter', makeBlue)

  // Finally, we add one to make the colour white again
  one.addEventListener('mouseleave', makeWhite)
}


function two () {

  var two = document.getElementById('two')

  two.addEventListener('mouseenter', makeOrange)

  two.addEventListener('mouseleave', makeWhite)

}

function three () {

  var three = document.getElementById('three')

  three.addEventListener('mouseenter', makeGreen)

  three.addEventListener('mouseleave', makeOrange)
}

function four () {

  var four = document.getElementById('four')

  four.addEventListener('click', makeBlue)

}


function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}

function makeOrange (evt) {
  evt.target.style.backgroundColor = "orange"
}

function makeGreen (evt) {
  evt.target.style.backgroundColor = "green"
}
