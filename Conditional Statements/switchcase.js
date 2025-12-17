let prompt = require('prompt-sync')();


// 1. Marks 
let Marks = prompt("Enter your marks");

switch (true) {
    case Marks >= 90:
        console.log("Grade A");
        break;

    case Marks >= 80:
        console.log("Grade B");
        break

    case Marks >= 70:
        console.log("Grade C");
        break

    default:
        console.log("Fail");
}


// 2. Month

let Month = Number(prompt("Enter number to check month :"));

switch (Month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;


    case 12:
        console.log("December");
        break;

    default:
        console.log("Not a month");
}

// 3.Grade

let Grade = String(prompt("Enter your Grade :"));

switch (Grade) {
    case "A":
        console.log("First class");
        break;

    case "B":
        console.log("Second class");
        break;

    case "C":
        console.log("Third class");
        break;

    case "D":
        console.log("Fourth class");
        break;

    default:
        console.log("Fail");

}

// 4. + - 0

let num = Number(prompt("Enter number to check +,-,0 :"));

switch (true) {
    case (num > 0):
        console.log("Positive");
        break;

    case (num < 0):
        console.log("Negative");
        break;

    default:
        console.log("Zero")
}

// 5. Calculator

let a = 50;
let b = 70;
let c = "+";

switch (c) {
    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;

    case "*":
        console.log(a * b);
        break;

    case "/":
        console.log(a / b);
        break;

    default:
        console.log("Not a airthmetic operator");
}

// 6. write a program using switch statement Traffic Light System Input a color (red/yellow/green) and print the action (stop, slow down, go).

let color = "red";

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "green":
        console.log("go");
        break;

    case "yellow":
        console.log("slow down");
        break;

    default:
        console.log("Not a Traffic color")

}

// 7.Wite a program using switch statement movies Ticket Prise  like Child  150rs , adult 250rs ,senior 150rs 

let Ticket = "child"

switch (Ticket) {
    case "child":
        console.log("150rs");
        break;

    case "adult":
        console.log("250rs");
        break;

    case "senior":
        console.log("150rs");
        break;

    default:
        console.log("Others")


}

// Five example

// 1.
let fruit = 'apple';

switch (fruit) {
    case 'apple':
        console.log("It's an apple.");
        break;
    case 'banana':
        console.log("It's a banana.");
        break;
    case 'orange':
        console.log("It's an orange.");
        break;
    default:
        console.log("Unknown fruit");
}


// 2.

let num1 = 10;

switch (true) {
    case (num1 < 5):
        console.log("The number is less than 5.");
        break;
    case (num1 >= 5 && num1 <= 10):
        console.log("The number is between 5 and 10.");
        break;
    case (num1 > 10):
        console.log("The number is greater than 10.");
        break;
    default:
        console.log("Unknown range.");
}

// 3.
let month = 7;

switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("It's the first quarter of the year.");
        break;
    case 4:
    case 5:
    case 6:
        console.log("It's the second quarter of the year.");
        break;
    case 7:
    case 8:
    case 9:
        console.log("It's the third quarter of the year.");
        break;
    default:
        console.log("It's the last quarter of the year.");
}

// 4.
let isLoggedIn = true;

switch (isLoggedIn) {
    case true:
        console.log("User is logged in.");
        break;
    case false:
        console.log("User is not logged in.");
        break;
    default:
        console.log("Invalid state.");
}


// 5.
let permissionLevel = 'admin';

switch (permissionLevel) {
    case 'admin':
        console.log("You have full access.");
        break;
    case 'editor':
        console.log("You can edit content.");
        break;
    case 'viewer':
        console.log("You can only view content.");
        break;
    default:
        console.log("Access denied.");
}


// 6. Write a program to calculate the EMI for ₹5,00,000 for 3, 6, 9, 12, 16, 20, and 24 months using a switch-case statement. 

let months = 3;
let price = 500000;

switch (months) {
    case 3:
    case 6:
    case 9:
    case 12:
    case 16:
    case 20:
    case 24:
        console.log("EMI =", price / month);
        break;

    default:
        console.log("Not valid month")

}


// 7. Write a JavaScript program using a switch-case statement to calculate the discount on a product based on its price 
//        Apply a 20% discount if the price is ₹10000 or more,
//         a 10% discount if the price is ₹5000 or more,

//         and no discount for prices below ₹100.




let Price = 700;
let actualPrice;

switch (true) {
    case (price >= 10000):
        actualPrice = Price * 0.20;
        break;

    case (price >= 5000):
        actualPrice = price * 0.10;
        break;

    case (price <= 1000):
        actualPrice = Price;
        break;

    default:
        console.log("Invalid price")

}
console.log("Actual price =", actualPrice)