Exercise: Looping a trangle
---------------------------

Solve the first exercise "Looping a trangle"
here: https://eloquentjavascript.net/02_program_structure.html#i_umoXp9u0e7

Code in the file `looping_triangle.js`

Exercise: Parametric triangles
------------------------------

Extend your triangle code to a `triangle`-function
that expects a size parameter.


For example, the call `triangle(5)` should give the following output in the console:
```
     #
     ##
     ###
     ####
     #####
```

Bonus: extend the `triangle` function with an optional "character parameter"
such that `triangle(3,"%")` prints the triangles with `%` instead.

Code in the file `parametric_triangle.js`. The function takes two parameters. The first is the size of your pyramid, the second the type of character. If the character parameter is left out i.e. `triangle(5)` it will default creating a pyramid with `#`.


Exercise: The sum of a range
----------------------------

Solve the first exercise "The sum of a range"
here: https://eloquentjavascript.net/04_data.html#i_8ZspxiCEC/

Code in `sum_of_range.js`. Uses the `reduce` method on arrays in order to execute a reduction function (`(a,b) =>  a + b, 0`).

Exercise: Show objects
--------------------------

Look at [02_DOM/showObjects.html](02_DOM/showObjects.html)
  
The JavaScript in the page declares an array of objects (representing cars).

You should write a `DIV` in the DOM for each element of
the array. The resulting page should show producer and model name
for each car, using one `SPAN` for each property of a car object.


Hint: You can iterate over your array and use `innerHTML` to add the
HTML elements.

The code is located in `02_DOM/showObjects.html`, but can also be seen here:

```html
    for (let i = 0; i < carArray.length; i++) {
			document.getElementById("cars").innerHTML +=
				"<div class='theCar'><span>" + carArray[i].producer + "</span>" +
				"<span>" + carArray[i].model +"</span> </div>";
		}
```

Exercise: CarPage
-----------------

Create a "car database page" which is able to
 - add a new car by typing producer and model name.  
   Use a form with some buttons to do that.
 - refresh the list of existing cars (eventually after you have 
   added a car). Make a button for that. (Remember to remove the old
    list before you create a new one.)
 - show some statistics (e.g., count) in a `DIV` somewhere on the page


The car data should be stored in an array of objects and be visible
to your functions.


There's a skeleton file here to get you started: [03_GUI/carPage.html](03_GUI/carPage.html)

The code is in `03_GUI/carPage.html`, but can also be seen here:

The form used:

```html
    <div>The input form
      <form action="javascript:addCar(producer.value, model.value)">
        <input type="text" name="Producer" id="producer">
        <input type="text" name="Model" id="model">
        <input name="Submit" type="submit" value="Update">
      </form>
    </div>
```

The script: 

```js
      let cars = []
      function addCar(prod,model) {
        cars.push({prod:prod,model:model});
        document.getElementById("listOfCars").innerHTML = "";
        cars.forEach(car => {
          document.getElementById("listOfCars").innerHTML += "<span>" + car.prod + " " + car.model + "</span>" + "<br>";
        });
        document.getElementById("carStatistics").innerHTML = "Number of cars: " + cars.length;
      }
```
