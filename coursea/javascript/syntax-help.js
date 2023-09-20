var x = "";

function a () {}

var a = function () {} // a has the value of the function NOT the returned result

a(); // execute function (invoke)


function a (x,y) {
    return x > y; 
    return; // simply exit function
}

// PRIMITIVE DATATYPES
Symbol // new in ES6
Boolean
Number // always double-precision 64bit floating point
String
// OBJECTS

// Compares Datattypes 
var x = "4", y = 4;
// - strict
if (x == y) {
  console.log("x=4 is equal to y=4");
}
if (x === y) {
  console.log("Strict: x='4' is equal to y=4");
}
else {
  console
  .log("Strict: x='4' is NOT equal to y=4");
}


// COMPARATORS
if (x == undefined)

// Boolean
true: true, all strings, all numbers not 0
--> (true && "hello" && 1 && -1 && "false")
false:
--> ( false || null || undefined || "" || 0 || NaN) 

function orderChickenWith(sideDish) {
    sideDish = sideDish || "whatever!"; // compares sidedish with sidedish(undefined) and "whatever!"(true) and sets it to the first true value --> the string
    console.log("Chicken with " + sideDish);
  }
orderChickenWith();

// OBJECT CREATION
Lecture 45 + 46
// object literal
var facebook = {
    name: "Facebook",
    ceo: {
      firstName: "Mark",
      favColor: "blue"
    },
    "stock of company": 110
  };

  var literalCircle = { // new object
    radius: 10,
   
    getArea: function () {
      var self = this;
      console.log(this);
  
      var increaseRadius = function () {
        self.radius = 20;
      };
      increaseRadius();
      console.log(this.radius);
  
      return Math.PI * Math.pow(this.radius, 2);
    }
  };

  // functions

  // function constructors 
function Circle (radius) {
  this.radius = radius;
}
// Prototype functions
Circle.prototype.getArea = 
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };
var myCircle = new Circle(10);
console.log(myCircle.getArea());

// CLOSURE


<!doctype html>
<html lang="en"> 
  <head>
    <meta charset="utf-8">
    <!-- external script file -->
    <script src="js/script.js"></script>
    <!-- internal script -->
    <!-- <script type="text/javascript"></script> -->
    <script>
      console.log(x);

    </script>
    <script>
      consol
    </script>
  </head>
<body>
  <h1>Lecture 41</h1>
  <script>
    console.log("right before body closing tag");
  </script>
</body>
</html>