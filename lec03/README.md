Exercise: Distance
------------------

Compose the functional programming methods over arrays to write a
function `dist` that computes the Euclidian distance
 - from $`(0,...,0)`$ ~ (Origo)
 - to a given point represented as an array

For example:
- `dist([3,4])` should give 5 because $`\sqrt{ 3^2 + 4^2 } = 5`$
- `dist([1,2,2])` should give 3 because $`\sqrt{ 1^2 + 2^2 + 2^2 } = 3`$
- `dist([])` should give 0 because $`\sqrt{ 0 } = 0`$

(The square root $`\sqrt{~}`$ is called `Math.sqrt` in JS)

Code is found in `distance.js` and here:
```javascript
  function dist(array) {
    return Math.sqrt(array.map(element => element * element).reduce((a, b) => a + b, 0));
  }
```
  First we square each element with map to transform each element in the array. Then we reduce the array with summing all the elements. Finally we take the square root to the final sum. All with functional programming :-) 

Exercise: A vector type
-----------------------

Solve the first exercise "A vector type"
here: https://eloquentjavascript.net/06_object.html#i_zO8FRQBMAy

Solution in `vec.js`.

Exercise: rememberCars
----------------------

Check out the skeleton in [04_exercise_RememberCars/carPage_v2.html](04_exercise_RememberCars/carPage_v2.html)

Store car data on the client using `localStorage` in function
`saveData`.

When you re-open your page reload previous added cars from
`localStorage` in function `loadData`.
  
Register an event such that clicking `[resetAllCars]` deletes all
cars from `localStorage`.

Register your events via JavaScript (using `addEventListener`) and not
in the HTML tags.

Solution can be found at `\04_exercise_RememberCars\carPage_v2.html`

Exercise: Nim
-------------

Program the game Nim with jQuery:

- Nim starts with a number of sticks, e.g., 20
- The players (you + computer) take turns to remove either 2 or 3 sticks
- A player loses if he/she takes the last sticks
  (or there's < 3 left to him/her)

Adapt [06_jQuery/04_events+json+localstorage/01_eventHandling_MVC.html](06_jQuery/04_events+json+localstorage/01_eventHandling_MVC.html)

- Your model should contain a `stickcount` and a Boolean `gameover`
- Start with a dumb computer tactic that, e.g., always removes 2 sticks

The code is located at `nim.html`. It is based on the skeleton provided in `6_jQuery/04_events+json+localstorage/01_eventHandling_MVC.html`. The code is NOT pretty. The computer takes between 2-3 sticks and its move will be displayed. The game will reload after 1 second if the game is finished. 