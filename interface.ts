export interface User {
  id: number;
  name: string;
  age?: number;
  email: string;
}

let user: User = { id: 1, name: 'Harry', email: 'harry@ts.com' };

interface Employees extends User {
  salary: number;
}

let harry: Employees = {
  id: 1,
  name: 'Harry',
  email: 'harry@ts.com',
  salary: 10000,
};

// exports Login interface to outside world to use it
export interface Login {
  Login(): User;
}

// Object destructuring userName and mail are aliases, they are not mandatory to write
let { name: userName, email: mail }: User = {
  id: 1,
  name: 'Harry',
  email: 'harry@ts.com',
};

console.log(userName);
console.log(mail);

// Array destructuring

let [u1, u2, ...restU]: User[] = [
  { id: 1, name: 'Harry', email: 'harry@ts.com' },
  { id: 2, name: 'Ron', email: 'ron@ts.com' },
  { id: 3, name: 'Adolf', email: 'adolf@ts.com' },
  { id: 4, name: 'Rose', email: 'rose@ts.com' },
];

console.log(u1);
console.log(u2);
console.log(restU);
