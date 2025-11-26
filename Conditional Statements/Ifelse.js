let prompt = require('prompt-sync')();

// 1.Calculate your grades basis on your marks
let Marks = 90;
if (Marks >= 80 && Marks <= 100) {
    console.log("your grade is Grade A");
} else if (Marks < 80 && Marks >= 60) {
    console.log("your grade is Grade B");

} else if (Marks < 60 && Marks >= 40) {
    console.log("your grade is Grade C");

} else if (Marks < 40 && Marks >= 35) {
    console.log("your grade is Grade D");

} else if (Marks < 35 && Marks >= 0) {
    console.log("your fail");

}
else {
    console.log("Enter correct marks");

}

// 2. Calculate you are eligible for vote or not
let age = prompt("Enter your age :");

if (age >= 18) {
    console.log("You are eligible for vote");
} else if (age < 18) {
    console.log("You are not eliginle for vote");
} else {
    console.log("Enter correct age")
}

// 3 . Enter your mark of six subject basis on that calculate your percentage
let Html = 45;
let Css = 45;
let English = 45;
let Javascript = 45;
let Python = 45;
let Java = 45;

let marks = Html + Css + English + Javascript + Python + Java;
let percentage = (marks * 100) / 600;
console.log(percentage);

// 4. Traffic color
let color = prompt("Enter traffic color :");

if (color == "red") {
    console.log("Stop");
} else if (color == "green") {
    console.log("You can go");
} else if (color == "yellow") {
    console.log("Hold");
} else {
    console.log("first you come");
}

// 5. Enter fats
let Fat = prompt("Enter fats :");

if (Fat >= 3 && Fat <= 4) {
    console.log("rate is 40");
} else if (Fat < 3) {
    console.log("Rate is 35");
} else {
    console.log("rate is 50");
}

// 6.Write a program to find a leap year

let year = prompt("enter year to check leap or not :");

if (year % 4 == 0) {
    console.log("it is leap year");
} else {
    console.log("it is not leap year");
}



// 7. write a programm to identify odd even

let num = prompt("Enter number :");

if (num % 2 == 0) {
    console.log("It is even number");
} else {
    console.log("It is odd number")
}

// 8.Write a program value is divisible by 4

let number = prompt("Enter number to check divisible by 4 :");

if (number % 4 == 0) {
    console.log("divisible by 4");
} else {
    console.log("not divisible by 4");
}

// 9. identify largest number

let a = prompt("Enter first number :");
let b = prompt("Enter Second number :");

if (a > b) {
    console.log("First number is greater than second")
} else if (b > a) {
    console.log("Second number is greater than first number")
} else if (a == b) {
    console.log("Both are equal")
}
else {
    console.log("Enter 1st number ")
}

// 10. Positive , Negative , Zero

let Number = prompt("Enter number to check + - 0 :");

if (Number > 0) {
    console.log("it is positive number");
} else if (Number < 0) {
    console.log("it is a negative number");
} else {
    console.log("It is zero");
}

// 11. identify vowels

let vowel = prompt("Enter lette to check Vowel :");

if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
    console.log("it is Vowel");
} else {
    console.log("It is consonant");

}

// 12. Wite a Program To Check largest of three numbers 

let x = prompt("Enter 1st num :");
let y = prompt("Enter 2nd num :");
let z = prompt("Enter 3rd num :");


if (x >= y && x >= z) {
    console.log(x + " is the largest");
} else if (y >= x && y >= z) {
    console.log(y + " is the largest");
} else {
    console.log(z + " is the largest");
}

// 16.  Write a Program To Check if number is between 1 and 10

let m = prompt("Enter number to check b/w 1 to 10");
if (m >= 1 && m <= 10) {
    console.log("It is number between 1 and 10");
} else {
    console.log("It is not number between 1 and 10");
}

// 17.  Write a Program To Check if number is divisible by 5

let v = prompt("Enter number to check disible by 5");

if (v % 5 == 0) {
    console.log(`${v} is divisible by 5`);
} else {
    console.log(`${v} is  not divisible by 5`);

}

// Five examples

// 1.
let age1 = 70;
if (age1 >= 65) {
    console.log("You are eligible for a senior citizen discount.");
} else {
    console.log("You are not eligible for a senior citizen discount.");
}

// 2.
let Num = 21;
if (Num % 3 === 0 && Num % 7 === 0) {
    console.log(`${Num} is a multiple of both 3 and 7.`);
} else {
    console.log(`${Num} is not a multiple of both 3 and 7.`);
}

// 3.
let age2 = 65;
if (age2 < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}

// 4.
let number1 = 20;
if (number1 % 5 === 0) {
    console.log(`${number} is divisible by 5.`);
} else {
    console.log(`${number} is not divisible by 5.`);
}

// 5.
let temperature = 25;
if (temperature >= 20 && temperature <= 30) {
    console.log("The temperature is within the comfortable range.");
} else {
    console.log("The temperature is outside the comfortable range.");
}
