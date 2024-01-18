// Expression: an operator working on variables or numbers ( like a Mathematical expression).
// Example: 10 * 10 is an expression where 10 is the variable/number and the * is the operator.

// log things to console.
console.log("Always Use This to do simple console.log");

// Variable declarations:
// const is read only:
const number = 0;
// let is read/write:
let number1 = 0;

//assert equal: outputs error msg if untrue
console.assert(1 === 2, "fail");

// takes command line arguments and slices first two entries off and makes a array with remainder can slice how you like
const rollArr = process.argv.slice(2);

/*
inherent falsy things:
// All of the following are inherently falsey:

False
// False is False. Makes sense, right?

0
// 0 is the only falsey Number

""
// an empty string is falsey

null
// a null, or empty value, is falsey.

undefined
// an object that has not been defined is considered falsey.

NaN
// Not a Number. You'll learn more about NaN as we go on.
*/

/* spread copies from one object to another
const objectSpread = { ...obj };
*/
// obj bookmarks
const deepObj = {
  level1: {
    level2: {
      contents: "Hello",
    }
  }
};

const lvl2 = deepObj.level1.level2;

// can use lvl2 to acces deep shit.

const without = function(source, itemsToRemove) {
  // array to store pushed values
  let popArr = [];
  // loops through all items in source
  for (const item of source) {
    // include checks if each item in source is in itemsToRemove
    if (!itemsToRemove.includes(item)) {
      // pushes item to array if NOT in itemsToRemove
      popArr.push(item);
    }

  }
  //return
  return popArr;

};

// checks if oddOrEven and outputs odd if odd can be switched with changing the 1 to a 2   
function oddOrEven(x) {
  return (x & 1) ? "odd" : "even";
}

console.log(oddOrEven(5));

// declaration
function sayHello(name) {
  return true;
};

// expression
const sayhello2 = function(name) {
  return true;
};

// arrow
const sayHello3 = (name) => {
  return true;
};

//shorthand will return other side arrow can only do if one arg
const sayhello4 = name => true;

///////////////
//recursion///
/////////////
///calls itself until num equals 12, I dont know where num is stored?
function countEvenToTwelve(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number + 2);
  }
};
countEvenToTwelve(0);


// Every recursive function must have a base case(when it ends) and a recursive case(keep going).
// Each recursive call should break down the current problem into a smaller, simpler one.
// The recursive calls must eventually reach the smallest version of the problem, the base case.
// The base case is when the problem can be solved without further recursion.

///// loops for ever and crashes
// function countUpFrom(number) {
//   console.log(number);
//   countUpFrom(number+1);
// }
// countUpFrom(1);
///// demonstrates .reduce
const someOrder = {
  items: [
    {name: "Dragon Food", price: 8},
    {name: "Dragon", price: 800}
  ]

};
//// seems to take start price as first argument as prev, current is the current iteration, and 0 sets prev
// then it goes prev price + cur.price (cur here being the current index in the array the .price just gets us deeper in the object at the index)
const oderTotal = order => order.items.reduce((prev,cur) => prev +cur.price, 0);

result = oderTotal(someOrder);
console.log(result);

////npother example:

const someOrder2 = [1,2,3,4,5]
const oderTotal2 = x => x.reduce((/*start/previous*/prev,/*current element*/cur) => prev + cur, /*start point*/10);

result2 = oderTotal2(someOrder2);
console.log(result2);

/// importing chai also how you import other stuff:

// const chai = require('chai');
// const assert = chai.assert;

// const nameInverter = require('../nameInverter');

// describe('nameInverter', function() {

// });
