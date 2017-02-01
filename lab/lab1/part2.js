/* =====================
  # Lab 1, Part 2 — Functions as Values

  Functions can be passed as values to other functions. Each exercise here builds on that theme.
===================== */

/* =====================
Instructions: Write a function that *always* returns the number 1.
===================== */

var justOne = function() {
  return 1;
};

console.log('justOne success:', justOne() === 1);

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

var isEven = function(num) {
  if (num%2===0){
    return true;
  }else{
    return false;
  }
};

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that *always* returns false.
              Use functions "justOne" and "isEven" somehow in the definition.
===================== */

var justFalse = function() {
  return false;
};

console.log('justFalse success:', justFalse() === false);

/* =====================
Instructions: Write a function that takes a boolean value and returns its opposite.
===================== */

var not = function(boolean) {
  return !boolean;
};

console.log('not success:', not(true) === false);

/* =====================
Instructions: Write a function that returns true if a number is odd
              Use functions "isEven" and "not" somehow in the definition.
===================== */

var isOdd = function(num) {
  if (num%2 !==0){
    return true;
  }else{
    return false;
  }
};
isOdd(84);
console.log('isOdd success:', isOdd(84) === false);

/*=====================
This Array Comparison Code is directly copied from:
 http://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
 ======================*/

if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});
/*========================
The copied Array-Comparison code ends here in order to compare the arrays below
===========================*/

/* =====================
Instructions: Write a function that takes a list of numbers and returns a list with only numbers above 10
===================== */

var filterOutLessThan10 = function(arr) {
    var newArr = [];
  for (var i=0; i<arr.length;i++){
    if (arr[i]>10){
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
//var test = filterOutLessThan10([4, 11]).length === 1 && filterOutLessThan10([4, 11])[0] === 11;
//console.log('filterOutLessThan10 success:', test);
console.log('filterOutLessThan10 success:', filterOutLessThan10([4, 11]).equals([11]));

/* =====================
Stretch goal — NOT required
Instructions: Let's bring it all together. Write a function that returns only odd numbers. It takes:
              1. a list of numbers
              2. a function that takes a number and returns true or false (isOdd, let's say)
===================== */

var filter = function(array, func) {
  for(var i=0; i<array.length; i++){
    if (!func(array[i])){
      array.shift(array[i]);
    }
  }
  return array;
};

console.log('filter success:', filter([4, 11], isOdd).equals([11]));
