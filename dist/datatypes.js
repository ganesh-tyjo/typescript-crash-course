"use strict";
// String
let lName;
lName = 'Ganesh';
console.log(lName.toLowerCase());
// Number
let age;
age = 27;
let dob = '27.5';
let numberResult = parseInt(dob);
console.log(numberResult);
// Boolean
let flag = false;
console.log(flag);
// Array
let empList;
let depList;
empList = ['item1', 'item2'];
let numList;
numList = [1, 2, 3, 4, 5];
let arrayResult = numList.filter((num) => num > 2);
console.log(arrayResult);
let sumResult = numList.reduce((acc, num) => acc + num);
console.log(sumResult);
let c = 1 /* Green */;
console.log(c);
// Tuple
let swapNumbs;
// lambda/arrow function
var swapNumbers = (num1, num2) => {
    return [num2, num1];
};
// normal function
// function (num1: number, num2: number): [number, number] {
//   return [num2, num1];
// }
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs);
// Any - try to avoid Any datatypes
let department;
department = 'HR';
department = 10;
console.log(typeof department, department);
//# sourceMappingURL=datatypes.js.map