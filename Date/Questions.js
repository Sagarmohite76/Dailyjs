// Q1 Write a JavaScript program that checks the current time.
// If the employee arrives after 10:00 AM, print "You are Late"; otherwise, print "You are On Time".
let date = new Date();
if (date.getHours() > 10) {
    console.log("Your are late", date.getHours());

} else {
    console.log("you are on time");

}


// Q2Write a JavaScript program that displays a greeting message based on the current time:
// Before 12 PM → Good Morning
// 12 PM to 5 PM → Good Afternoon
// 5 PM to 9 PM → Good Evening
// After 9 PM → Good Night
function msg() {
    let currentHours = new Date().getHours();
    if (currentHours > 12 && currentHours < 17) {
        console.log("Good Afternoon");

    } else if (currentHours < 12) {
        console.log("Good Morning");

    } else if (currentHours > 17 && currentHours < 21) {
        console.log("Good Evening");

    } else {
        console.log("Good Night");

    }
}
msg();

// Q3Write a JavaScript program that checks the current day.
// If today is Saturday or Sunday, print "Weekend", otherwise print "Working Day".
function work() {
    let currentDay = new Date().getDay();
    if (currentDay == 6 || currentDay == 0) {
        console.log("Weekend");

    } else {
        console.log("Working Day");

    }
}
work();


// Q4Write a JavaScript program to check whether a product or subscription is expired or still valid.
// Assume the expiry date is 10 January 2026.

function validation() {
    let date = new Date()
    if (date.getDate() > 10 && date.getMonth() + 1 > 1 && date.getFullYear() > 2026) {
        console.log("Your Product is expired");

    } else {
        console.log("Your product is still in use");

    }
}
validation();

// Q5 Write a JavaScript program that checks the current time.
// If the current time is between 9:00 AM and 6:00 PM, print "Office Working Hours".
// Otherwise, print "Office Closed".

function OfficeTime() {
    let currentTime = new Date().getHours()
    if (currentTime > 9 && currentTime < 18) {
        console.log("Office Working Hours");

    } else {
        console.log("Office Closed");

    }
}
OfficeTime();


// Write a JavaScript program to print both day number and day name.
function days() {
    let day = new Date().getDay()
    let Days = [
        "Sunday",
        "Monday",
        "Tuseday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    console.log("Day number :", day);
    console.log("Day name :", Days[day]);


}
days();

// Write a JavaScript program to display today’s date in DD-MM-YYYY format.
function todayDate() {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    console.log(`${day}-${month}-${year}`);
}

todayDate();



// Write a program to check if today is the first day of the month.
function firstDay() {
    let date = new Date();
    let day = date.getDate();

    if (day === 1) {
        console.log("Today is the first day of the month");
    } else {
        console.log("Today is NOT the first day of the month");
    }
}

firstDay();


// Write a program to find how many Sundays are in January 2026.
function sunDays(month, monthnum, days) {
    let workingDays = 0
    let sundaysCount = 0
    for (let i = 1; i <= days; i++) {
        let date = new Date(2026, monthnum - 1, i);
        let day = date.getDay();
        if (day == 0) {
            sundaysCount++
        } else {
            workingDays++
        }
    }
    console.log("Sundays count in", month, sundaysCount);
    console.log(workingDays);

}

sunDays("Apr", 4, 30);

// Write a JavaScript program to find the next Monday date from today.
function nextMonday() {
    let date = new Date();

    while (date.getDay() !== 1) {
        date.setDate(date.getDate() + 1);
    }

    console.log(date.toDateString());
}

nextMonday();




// Write a JavaScript program to find number of working days in a month.

let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function workingDaysInMonth(month, monthnum) {
    let workingDays = 0;
    let sundaysCount = 0;
    let totalDays = monthDays[monthnum - 1];
    for (let i = 1; i <= totalDays; i++) {
        let date = new Date(2024, monthnum - 1, i);
        let day = date.getDay();
        if (day == 0) {
            sundaysCount++;
        }

    }
    workingDays = totalDays - sundaysCount;
    console.log("Working days in", month, ":", workingDays);
}
workingDaysInMonth("February", 2);

// Write a JavaScript program to display today’s date in YYYY-MM-DD format.
function todayDate1() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    console.log(`${year}-${month}-${day}`);


}
todayDate1()


// Write a JavaScript program to display current time in HH:MM:SS.
function time() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    console.log(`${hours}:${minutes}:${seconds}`);
}
time();


// Write a JavaScript program to check whether today is the last day of the month.
function lastDay(){

let date=new Date();
 let lasdaynum=date.getDate()
 console.log(lasdaynum);
 
}


// Write a JavaScript program to find yesterday’s date.

// Write a JavaScript program to find tomorrow’s date.

// Write a JavaScript program to find the current week day number (1–7).

function printCalendar() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();

    let firstDay = new Date(year, month, 1).getDay(); // day of week 0–6
    let lastDate = new Date(year, month + 1, 0).getDate(); // last date of month
    console.log(firstDay);
    console.log(lastDate);
    
    
    const monthNames = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    console.log(`\n   ${monthNames[month]} ${year}`);
    console.log("Su Mo Tu We Th Fr Sa"); // week headers

    let calendar = "";
    // Add spaces for the first row
    for (let i = 0; i < firstDay; i++) {
        calendar += "   ";
    }

    // Fill the calendar with dates
    for (let date = 1; date <= lastDate; date++) {
        calendar += (date < 10 ? " " + date : date) + " ";
        if ((firstDay + date) % 7 === 0) calendar += "\n"; // new line after Saturday
    }

    console.log(calendar);
}

printCalendar();

