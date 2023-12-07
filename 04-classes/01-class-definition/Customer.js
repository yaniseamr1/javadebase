"use strict";
class Customer {
    constructor(name1, name2) {
        this._firstName = name1;
        this._lastName = name2;
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer("Aymen", "Amri");
myCustomer.firstName;
console.log(myCustomer.firstName);
