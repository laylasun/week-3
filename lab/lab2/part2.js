/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data.
Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */
/*======Lab 1 Part 1=================*/

/* =====================
Instructions: "Write a function which counts the number of times a value occurs in an array "
Example: "countItem(['a', 'b', 'a'], 'a') should return 2"
===================== */

var countItem = function(arr, num) {
  var count = 0;
  /*for(var i = 0; i < arr.length; i++){
    if (arr[i]==num){
      count++;
    }
  }*/
  _.each(arr,function(element){
    if (element===num){
      count++;
    }
  });
  return count;
};
console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);

/*======Lab 2 Part 2=================*/

//Array Comparison Codes from Stackflow
//Not going to modify this
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
//_.filter --> select
var filterOutLessThan10 = function(arr) {
    return _.filter(arr, function(element){return element > 10;});
};
console.log('filterOutLessThan10 success:', filterOutLessThan10([4, 11]).equals([11]));

//_.reject --> exclude the element that meets the argument
var filter = function(array) {
  return _.reject(array, function(number){return number%2===0;});
};
console.log('filter success:', filter([4, 5, 11]).equals([5, 11]));
