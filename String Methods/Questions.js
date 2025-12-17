//1)Write an if/else condition to check the number of characters in the string. HelloWorld
//If the string length is even, print "EVEN LENGTH".
//If the string length is odd, print "ODD LENGTH". 

let a = "HelloWorld";

if (a.length % 2 == 0) {
    console.log("Even length");
} else {
    console.log("Odd length");
}

// 2).Use the slice() method to check if the word starts with "Info".  Information
// If it does, print "Infor".
// If it does not, print "NO MATCH".

let word = "Information";

if (word.slice(0, 4) == "Info") {
    console.log("Infor");
} else {
    console.log("No match");
}



// 3)Use the substring() method to extract the first four characters of the string.
//If the extracted part is exactly "Java", print "OK".
// Otherwise, print "NOT OK".

let c = "Javascript";

if (c.substring(0, 4) == "Java") {
    console.log("Ok");
} else {
    console.log("Not ok");
}

// 4).Use the includes() method to check if the string contains the word "Script".
// If it does, print "YES".
// If it does not, print "NO".

let w = "JavaScript";

if (w.includes("Script")) {
    console.log("Yes");
} else {
    console.log("No");
}

// 1).Write a program that simulates a traffic light. Input can be "red", "yellow", or "green". Print what action a driver should take using switch-case

let trafficColor = "red";

switch (trafficColor) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("hold");
        break;

    case "green":
        console.log("You can go");
        break;

    default:
        console.log("Not a traffic color");
}

// 2)Write a program that converts a number (1–5) into words using switch-case.

let num = 1
switch (num) {
    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");
        break;

    case 3:
        console.log("Three");
        break;

    case 4:
        console.log("Four");
        break;

    case 5:
        console.log("Five");
        break;

    default:
        console.log("Invalid number")
}

// 3).Write a program that asks the user to enter the show time (morning, afternoon, or evening) and prints the ticket price based on the following rules:

let time = "morning"

switch (time) {
    case "morning":
        console.log("cost 150");
        break;
    case "afternoon":
        console.log("cost 200");
        break;
    case "evening":
        console.log("cost 300")
        break;
    default:
        console.log("Not a time")

}

// Write a program that asks the user to enter a number from 1 to 7, and then prints the corresponding day of the week using a switch-case statement.

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;


    case 3:
        console.log("Wednesday");
        break;


    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;


    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Not a week");

}

// Write a program that asks the user to enter the number of electricity units consumed, and then calculates the total bill using the following rules:

let units = 90;
let totalBill;
switch (true) {
    case units <= 50:
        totalBill = units * 3;
        break;

    case (units <= 150):
        totalBill = 50 * 3 + (units - 50) * 5;
        break;

    default:
        totalBill = 50 * 3 + 100 * 5 + (units - 150) * 8;
        break;

}
console.log(totalBill);




// 1) Write a JavaScript program to check whether two words start with the same letter.

let Word1="hello";
let Word2="here";
let c1=Word1.charAt(0);
let c2=Word2.charAt(0);
if( c1==c2){
    console.log("Starts with same letter")
}else{
    console.log("Doesn't start with same letter")
}


// 2)Write a JavaScript program to check if a given string is empty.

let str="";


if(str.length==0){
    console.log("String is empty")
}else{
    console.log("String is not empty")
}


// 3)Write a JavaScript program to check if a password has the required minimum 6 length.

let password="123456"

if(password.length==6){
    
}