// normal function
function add(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(1, 2));
console.log(add(1, 2, 3));

// lambda/arrow function
const subtract = (num1: number, num2: number): number => num1 - num2;

console.log(subtract(5, 3));

const multi = (num1: number, num2: number, num3: number = 1): number =>
  num1 * num2 * num3;

console.log(multi(5, 3));
console.log(multi(5, 3, 3));

// rest paremeter - declared by ...parameterName:type

const add2 = (num1: number, num2: number, ...num3: number[]): number => {
  return num1 + num2 + num3.reduce((acc, num) => acc + num);
};

console.log(add2(1, 2, 3, 4, 5));

// Generic function

function getItems<T>(items: T[]): T[] {
  return new Array().concat(items);
}

console.log(getItems([1, 2, 3, 4, 5]));
console.log(getItems(['a', 'b', 'c', 'd']));
