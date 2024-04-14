"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { id: 1, name: 'Harry', email: 'harry@ts.com' };
let harry = {
    id: 1,
    name: 'Harry',
    email: 'harry@ts.com',
    salary: 10000,
};
// Object destructuring userName and mail are aliases, they are not mandatory to write
let { name: userName, email: mail } = {
    id: 1,
    name: 'Harry',
    email: 'harry@ts.com',
};
console.log(userName);
console.log(mail);
// Array destructuring
let [u1, u2, ...restU] = [
    { id: 1, name: 'Harry', email: 'harry@ts.com' },
    { id: 2, name: 'Ron', email: 'ron@ts.com' },
    { id: 3, name: 'Adolf', email: 'adolf@ts.com' },
    { id: 4, name: 'Rose', email: 'rose@ts.com' },
];
console.log(u1);
console.log(u2);
console.log(restU);
//# sourceMappingURL=interface.js.map