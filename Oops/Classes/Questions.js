//  Question 1: Class and Object (Student)
// Define a class named Student with the following properties:
// name
// rollNo
// address
// mobileNumber
// course
// age
// Create one object of the class and assign values to all properties.

// Print any three properties .


class Student {
  name;
  rollNo;
  address;
  mobileNumber;
  course;
  age;
}
let studentInfo = new Student();
studentInfo.name = "Sagar";
studentInfo.rollNo = 45;
studentInfo.address = "Dharashiv";
studentInfo.mobileNumber = 8767232576;
studentInfo.course = "Javascript";
studentInfo.age = 18;
console.log(studentInfo);



// Question 2: Class and Object (Employee)
// Create a class named Employee with the following properties:
// empId
// empName
// department
// salary
// companyName
// location
// isPermanent
// Create an object of the class, assign values, and print all properties

class Employee {
  empId;
  empName;
  department;
  salary;
  companyName;
  location;
  isPermanent;
}

let Employee1 = new Employee();
Employee1.empId = "2526U00047";
Employee1.empName = "Sagar Mohite";
Employee1.department = "Fullstack Developer";
Employee1.salary = "Unlimited";
Employee1.companyName = "The Baap Company";
Employee1.location = "Paregaon Kh.";
Employee1.isPermanent = true;
console.log(Employee1);




// Question 3: Class and Object (Car)
// Create a class named Car with the following properties:
// brand
// model
// color
// fuelType
// mileage
// price
// isAutomatic
// Create objects of the class and display the brand and model of cars.
// Everyone solve this proper.

class Car {
  brand;
  model;
  color;
  fuelType;
  mileage;
  price;
  isAutomatic;
}

let Car1 = new Car();
Car1.brand = "BMW";
Car1.model = "X1 sDrive18i M Sport",
  Car1.color = ["Black Sapphire Metallic", "Alpine White", "Phytonic Blue Metallic"];
Car1.fuel = "Petrol";
Car1.mileage = "16.35 kmpl";
Car1.price = "50.60 Lakhs";
Car1.isAutomatic = true;

console.log(Car1);


// 1.Write a class Hello with a method that prints "Hello JavaScript".
class Hello {
  print() {
    console.log("Hello Javascript");

  }
}
let ob = new Hello()
ob.print()


// 2.Create a class Number with a property num. Print the value of num.
class MyNumber {
  num;
}
let ob2 = new MyNumber();
ob2.num = 45;
console.log(ob2.num);



// 3.Write a class Student with properties name and age. Display both.
class Student {
  constructor(a, b) {
    this.name = a;
    this.age = b;
  }
}
let student1 = new Student("Sagar", 19);
console.log(student1);




// 4.Create a class Add with two numbers and a method to add them.
class Add {
  add1(a, b) {
    console.log(a + b);
  };
}
let add = new Add();
add.add1(10, 20);


// 1) create a student class with name, marks1 , mark2 , mark3,  mark4,  and calculate marks average of mars  using method if average is grater than 35 --> pass  and average is less than 35 fail using class and object

class Studentmarks {
  name;
  marks1;
  marks2;
  marks3;
  marks4;
  average() {
    let total = this.marks1 + this.marks2 + this.marks3 + this.marks4;
    let average = total / 4
    if (average > 35) {
      console.log(`${this.name} is passed`);

    } else {
      console.log(`${this.name} is Fail`);

    }
  }
}
let student12 = new Studentmarks();
student12.name = "Sagar";
student12.marks1 = 90;
student12.marks2 = 90;
student12.marks3 = 90;
student12.marks4 = 90;
student12.average();



// 2) create a Car class with brand , speed  and check speed  if speed > 120 → over Speeding , and speed between 60–120 → Normal Speed and  speed < 60 → Too Slow  using class and object
// 3) create a BankAccount class with accountHolder , balance  and deposit money  , withdraw money , total balance   using class and object


// Create a Product class that stores product name, price, and quantity.
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    // Calculate and display the total bill amount.
    this.total = price * quantity
  }
}
let product1 = new Product("Notebook", 100, 12);
console.log(product1);

// Create a Voting class that takes age using a constructor.
// Add a method to check whether the person is eligible to vote.

class Voting {
  constructor(age) {
    this.age = age;
    this.fn = () => {
      if (this.age >= 18) {
        console.log("You are eligible for vote");
      } else {
        console.log("You are not eligible for vote");

      }

    }
  }
}
let voter1 = new Voting(18)
voter1.fn()

// Create a Rectangle class that accepts length and width.
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
    this.area = () => {
      let area1 = this.length * this.width;
      console.log(area1);

    }
  }
}

let rec1 = new Rectangle(40, 30);
rec1.area()

// 4.Create a Result class that stores three subject marks.
// Calculate total, average, and pass/fail.
class Result {
  constructor(x, y, z) {
    this.sub1 = x;
    this.sub2 = y;
    this.sub3 = z;
    this.total = () => {
      let total = this.sub1 + this.sub2 + this.sub3;
      console.log(`Your total marks are ${total}`);
      let average = total / 3;
      console.log(`Your total marks are ${average}`);
    }
  }
}

// 1.Create a LibraryBook class that stores book name, author, and availability status. Add a method to display book details.
class LibraryBook {
  constructor(name, author, status) {
    this.bookName = name;
    this.author = author;
    this.availabilityStatus = status;
    this.bookDetails = () => {
      return `Book name is ${this.bookName}. Author of this book is ${this.author}.The book is availabe ${this.availabilityStatus}.`
    }
  }
}

// 2.Create an Attendance class that stores total days and present days. Calculate attendance percentage.
class Attendance {
  constructor(total, present) {
    this.totalDays = total;
    this.presentDays = present;
    this.percentage = () => {
      let percentage = this.presentDays / this.totalDays * 100;
      console.log(percentage);

    }
  }
}
let s1 = new Attendance(90, 20);
s1.percentage()


//  3.Create a MovieTicket class that stores movie name, seat count, and price per seat. Calculate total ticket cost.
class MovieTicket {
  constructor(name, count, price) {
    this.movieName = name;
    this.seats = count;
    this.pricePerseat = price;
    this.total = () => {
      let totalTickets = this.seats * this.pricePerseat;
      console.log(totalTickets);

    }
  }
}
let movie1 = new MovieTicket("Salar", 100, 750)
movie1.total()

// 4.Create a ElectricityBill class that calculates bill amount (unit × rate).
class ElectricityBill {
  constructor(unit, rate) {
    this.Units = unit;
    this.rate = rate;
    this.bill = () => {
      let amount = this.Units * this.rate;
      console.log(amount);

    }
  }
}
let e1 = new ElectricityBill(120, 8)
e1.bill();

// Question 1:
// Create a Book class with 6 properties:
// title
// author
// publisher
// price
// pages
// language
// Use a constructor and display book details.

class Book {
  constructor(title, author, publisher, price, pages, language) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.price = price;
    this.pages = pages;
    this.language = language;
  }
}

let book1 = new Book("Js", "Sagar", "Sagar", 10.99, 180, "English");
console.log(book1);


// Question 2
// Create a BankAccount class with 5 properties:
// accountHolder
// accountNumber
// bankName
// accountType
// balance
// Use a constructor and create one object.

class BankAccount {
  constructor(accountHolder, accountNumber, bankName, accountType, balance) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.bankName = bankName;
    this.accountType = accountType;
    this.balance = balance;
  }
}

let account1 = new BankAccount("Sagar Mohite", "2526U00047", "The Baap Bank", "Savings", 100000);
console.log(account1);



// Question 3
// Create a Mobile class with 6 properties:
// brand
// model
// price
// color
// storage
// battery
// Add a method to display mobile details.
class Mobile {
  constructor(brand, model, price, color, storage, battery) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
    this.storage = storage;
    this.battery = battery;
  }
  displayDetails() {
    return `Mobile Details: Brand - ${this.brand}, Model - ${this.model}, Price - ${this.price}, Color - ${this.color}, Storage - ${this.storage}, Battery - ${this.battery}`;
  }
}

let mobile1 = new Mobile("Apple", "iPhone 13", 999, "Black", "128GB", "3095mAh");
console.log(mobile1.displayDetails());
