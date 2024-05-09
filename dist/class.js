"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
// Alias for Login & User combined and later you can use UserLogin.Login or UserLogin.User
//import * as UserLogin from './interface';
class Employee {
    constructor(id, name, address) {
        //# indicates private property
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    Login() {
        return { id: 1, name: 'Harry', email: 'harry@ts.com' };
    }
    // getter and setter for private id property, we can add getters and setters for any property
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
_Employee_id = new WeakMap();
let john = new Employee(1, 'John', 'NH10');
console.log(john);
console.log(john.getNameWithAddress());
let cathy = new Employee(3, 'Cathy', 'HN12');
cathy.empId = 100;
console.log(cathy.empId);
class Department {
    static getDepartmentCount() {
        return 50;
    }
}
let depHR = new Department();
depHR.id = 1;
depHR.name = 'HR';
console.log(depHR);
console.log(Department.getDepartmentCount());
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `Manager ${this.name} stays at ${this.address}`;
    }
}
let mike = new Manager(2, 'Mike', 'NH11');
console.log(mike);
console.log(mike.getNameWithAddress());
//# sourceMappingURL=class.js.map