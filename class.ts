import { Login, User } from './interface';

// Alias for Login & User combined and later you can use UserLogin.Login or UserLogin.User
//import * as UserLogin from './interface';

class Employee implements Login {
  //# indicates private property
  #id: number;
  name: string;
  address: string;

  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }
  Login(): User {
    return { id: 1, name: 'Harry', email: 'harry@ts.com' };
  }

  // getter and setter for private id property, we can add getters and setters for any property
  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

let john = new Employee(1, 'John', 'NH10');

console.log(john);
console.log(john.getNameWithAddress());

let cathy = new Employee(3, 'Cathy', 'HN12');
cathy.empId = 100;

console.log(cathy.empId);

class Department {
  id!: number;
  name!: string;

  static getDepartmentCount(): number {
    return 50;
  }
}

let depHR = new Department();
depHR.id = 1;
depHR.name = 'HR';

console.log(depHR);
console.log(Department.getDepartmentCount());

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `Manager ${this.name} stays at ${this.address}`;
  }
}

let mike = new Manager(2, 'Mike', 'NH11');

console.log(mike);
console.log(mike.getNameWithAddress());
