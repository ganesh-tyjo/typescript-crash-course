"use strict";
// normal function
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(1, 2));
console.log(add(1, 2, 3));
// lambda/arrow function
const subtract = (num1, num2) => num1 - num2;
console.log(subtract(5, 3));
const multi = (num1, num2, num3 = 1) => num1 * num2 * num3;
console.log(multi(5, 3));
console.log(multi(5, 3, 3));
// rest paremeter - declared by ...parameterName:type
const add2 = (num1, num2, ...num3) => {
    return num1 + num2 + num3.reduce((acc, num) => acc + num);
};
console.log(add2(1, 2, 3, 4, 5));
// Generic function
function getItems(items) {
    return new Array().concat(items);
}
console.log(getItems([1, 2, 3, 4, 5]));
console.log(getItems(['a', 'b', 'c', 'd']));
//# sourceMappingURL=functions.js.map