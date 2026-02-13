// 1.Create an Employee class with:
// name, salary

// Inherit it into Manager and add:
// department

// Display complete details.

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    showDetails() {
        console.log(`Employee name is ${this.name}. Salary is ${this.salary},and the department is ${this.department}`);

    }
}
let e1 = new Manager("Sagar", "Unlimited", "Fullstack");
e1.showDetails()


// 2.Create a Person class with:
// name, age

// Create a Student class that inherits Person and adds:
// rollNumber
// Display all details.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    constructor(name, age, rollNo) {
        super(name, age);
        this.rollNo

    }
}


// 1. Create Person → Employee → Manager to store name, employee ID, and department, and display all details using a Manager object

class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(name, empId) {
        super(name);
        this.empId = empId;
    }
}
class Manager extends Employee {
    constructor(name, empId, department) {
        super(name, empId);
        this.department = department;
    }
    showDetails() {
        console.log(`Name: ${this.name}, Employee ID: ${this.empId}, Department: ${this.department}`);
    }
}
let m1 = new Manager("Sagar", "E123", "Fullstack");
m1.showDetails();

// 2. Design Order → PaidOrder → ShippedOrder to display order ID, payment mode, and delivery address.
class Order {
    constructor(orderId) {
        this.orderId = orderId;
    }
}
class PaidOrder extends Order {
    constructor(orderId, paymentMode) {
        super(orderId);
        this.paymentMode = paymentMode;
    }
}
class ShippedOrder extends PaidOrder {
    constructor(orderId, paymentMode, deliveryAddress) {
        super(orderId, paymentMode);
        this.deliveryAddress = deliveryAddress;
    }
    showDetails() {
        console.log(`Order ID: ${this.orderId}, Payment Mode: ${this.paymentMode}, Delivery Address: ${this.deliveryAddress}`);
    }
}
let so1 = new ShippedOrder("O456", "Credit Card", "123 Main St");
so1.showDetails();




// 3. Build Transport → Bus → LuxuryBus to calculate total fare based on seat count and price.
class Transport {
    constructor(seatCount, pricePerSeat) {
        this.seatCount = seatCount;
        this.pricePerSeat = pricePerSeat;
    }
    calculateFare() {
        return this.seatCount * this.pricePerSeat;
    }
}
class Bus extends Transport {
    constructor(seatCount, pricePerSeat) {
        super(seatCount, pricePerSeat);
    }
}
class LuxuryBus extends Bus {
    constructor(seatCount, pricePerSeat, luxuryTax) {
        super(seatCount, pricePerSeat);
        this.luxuryTax = luxuryTax;
    }
    calculateTotalFare() {
        const baseFare = this.calculateFare();
        return baseFare + this.luxuryTax;
    }
}
let lb1 = new LuxuryBus(40, 50, 200);
console.log(`Total Fare: ${lb1.calculateTotalFare()}`);

// 4. Create a JavaScript class named Employee with properties empName and salary.

class Employee {
    constructor(empName, salary) {
        this.empName = empName;
        this.salary = salary;
    }
}


// You are building a parking system where all vehicles have parking hours, but max limits and fine rules differ.
// Create a parent class:
// Vehicle
// Store hours
// Create child classes:
// Bike
// Max parking: 12 hours
// Fine: ₹50 per extra hour
// Car
// Max parking: 24 hours
// Fine: ₹100 per extra hour
// Each child should:
// Check whether parking is allowed or penalty
// Calculate fine if penalty applies


class Vehicle {
    constructor(hours) {
        this.hours = hours;
    }
}

class Bike extends Vehicle {
    constructor(hours) {
        super(hours);
        this.maxParking = 12;
        this.finePerHour = 50;
    }
    checkParking() {
        if (this.hours > this.maxParking) {
            const extraHours = this.hours - this.maxParking;
            const fine = extraHours * this.finePerHour;
            console.log(`Parking exceeded by ${extraHours} hours. Fine: ₹${fine}`);
        } else {
            console.log("Parking within limit. No fine.");
        }
    }
}
class Car extends Vehicle {
    constructor(hours) {
        super(hours);
        this.maxParking = 24;
        this.finePerHour = 100;
    }
    checkParking() {
        if (this.hours > this.maxParking) {
            const extraHours = this.hours - this.maxParking;
            const fine = extraHours * this.finePerHour;
            console.log(`Parking exceeded by ${extraHours} hours. Fine: ₹${fine}`);
        } else {
            console.log("Parking within limit. No fine.");
        }
    }
}
let bike1 = new Bike(15);
bike1.checkParking();
let car1 = new Car(30);
car1.checkParking();



// 1.Electricity Bill System
// Create an electricity billing system.
// Create a parent class Electricity that stores used units.
// Create child classes:
// Home
// Free units: 100
// Rate: ₹5 per extra unit
// Commercial
// Free units: 200
// Rate: ₹8 per extra unit
// Each child class should:
// Check if bill is generated
// Calculate bill amount if units exceed limit

// solve this using inheritance 


class Electricity {
    constructor(units) {
        this.units = units;
    }
}
class Home extends Electricity {
    constructor(units) {
        super(units);
        this.freeUnits = 100;
        this.rate = 5;
    }
    calculateBill() {
        if (this.units > this.freeUnits) {
            const extraunits = this.units - this.freeUnits;
            const billAmount = extraunits * this.rate;
            console.log(`Bill Amount: ₹${billAmount}`);
        } else {
            console.log("No bill units are in limit.");
        }
    }

}

class Commercial extends Electricity {
    constructor(units) {
        super(units);
        this.freeUnits = 200;
        this.rate = 8;
    }
    calculateBill() {
        if (this.units > this.freeUnits) {
            const extraunits = this.units - this.freeUnits;
            const billAmount = extraunits * this.rate;
            console.log(`Bill Amount: ₹${billAmount}`);
        }
        else {
            console.log("No bill units are in limit.");
        }
    }
}

let home1 = new Home(150);
home1.calculateBill();
let commercial1 = new Commercial(250);
commercial1.calculateBill();


let formatedAmount = new Intl.NumberFormat('en-In').format(20000)
console.log(formatedAmount);
