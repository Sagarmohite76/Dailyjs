// Q1 Write a JavaScript program that checks the current time.
// If the employee arrives after 10:00 AM, print "You are Late"; otherwise, print "You are On Time".
let date=new Date();
if(date.getHours()>10){
    console.log("Your are late",date.getHours());
    
} else{
    console.log("you are on time");
    
}


// Q2Write a JavaScript program that displays a greeting message based on the current time:
// Before 12 PM → Good Morning
// 12 PM to 5 PM → Good Afternoon
// 5 PM to 9 PM → Good Evening
// After 9 PM → Good Night
function msg(){
    let currentHours=new Date().getHours();
    if(currentHours>12 && currentHours<17){
        console.log("Good Afternoon");
        
    }else if(currentHours<12){
        console.log("Good Morning");
        
    }else if(currentHours>17 && currentHours<21){
        console.log("Good Evening");
        
    }else{
        console.log("Good Night");
        
    }
}
msg();
 
// Q3Write a JavaScript program that checks the current day.
// If today is Saturday or Sunday, print "Weekend", otherwise print "Working Day".
function work(){
    let currentDay=new Date().getDay();
    if(currentDay==6||currentDay==0){
        console.log("Weekend");
        
    }else{
        console.log("Working Day");
        
    }
}
work();

 
// Q4Write a JavaScript program to check whether a product or subscription is expired or still valid.
// Assume the expiry date is 10 January 2026.

function validation(){
    let date=new Date()
    if(date.getDate()>10 && date.getMonth()+1>1 && date.getFullYear()>2026){
        console.log("Your Product is expired");
        
    }else{
        console.log("Your product is still in use");
        
    }
}
validation();
 
// Q5 Write a JavaScript program that checks the current time.
// If the current time is between 9:00 AM and 6:00 PM, print "Office Working Hours".
// Otherwise, print "Office Closed".

function OfficeTime(){
    let currentTime=new Date().getHours()
    if(currentTime>9&&currentTime<18){
        console.log("Office Working Hours");
        
    }else{
        console.log("Office Closed");
        
    }
}
OfficeTime();
