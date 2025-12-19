// 1) write a JavaScript program get an array print If the name length is greeter that 4, convert it to uppercase other wise in lowercase using ternary operator
let a = ["Ram"];
let result = a.map(e => {
    return e.length > 4 ? e.toUpperCase() : e.toLowerCase();
})
console.log(result);


// 2) write a JavaScript program  find largest number in an array  using for loop
let arr = [1, 22, 334, 465, 67];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);





// 3) write a JavaScript program to find negative numbers in an array  using while loop
let arr3 = [2, -3, -4];
let negativeNumbers = []
let i = 0;
while (i < arr3.length) {
    if (arr3[i] < 0) {
        negativeNumbers.push(arr3[i]);
    }
    i++;
}
console.log(negativeNumbers);




// 4) write a JavaScript program to check array is empty or not
let arr4 = [""];
if (arr4.length == 0) {
    console.log("Array is empty");

} else {
    console.log("Array is not empty");

}

// 5) write a JavaScript program  find the longest word in an array using for loop
let arr5 = ["sagar", "Ram", "ritesh"];
let longestword=arr5[0];
for(let i=0;i<arr5.length;i++){
    if(arr5[i].length>longestword.length){
        longestword = arr5[i];
    }
    // longestword=(arr5[i].length>longestword.length)?arr5[i]:longestword;
}
console.log(longestword);


// 6) Write a JavaScript program using a switch statement to display the number of days in a given month.
let Month = "April";

switch (Month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "Octomber":
    case "December":
        console.log("31 days");
        break;

    case "April":
    case "June":
    case "September":
    case "November":
        console.log("30 days");
        break;

    case "February":
        console.log("28 or 29 days depending on leap year");
        break;

    default:
        console.log("Invalid month");

}

// 7) Calculate Total Marks and Percentage Using a Nested Object in JavaScript
let student = {
    name: "Sagar",
    rollNo: 45,
    marks: {
        math: 99,
        science: 92,
        english: 96,
        sanskrit: 100,
        marathi: 92,

    }
}
let totalMarks = 0;
let subjectscount = 0;
for (let subjects in student.marks) {
    totalMarks += student.marks[subjects];
    subjectscount++;
}
console.log(totalMarks);

let percentage = totalMarks / subjectscount;
console.log(percentage);


function prime0rnot(n){
    let isprime=true;
  if(n<2){
    isprime=false;
    return ' Prime number not defined';
  }else{
    for(let i=2;i<n;i++){
        if(n%i==0){
            isprime=false;
            return "Not prime";
        }
    }
  }
  if(isprime){
    return ' Prime';
  }
}
console.log(prime0rnot(2));

const factor= function (n){
  if(n===0){
    return `Factorial of ${n} is 1`;
  }
  else if(n<0){
    return `Factorial of ${n} is not defined`;
  }
  let factor=1;
  for(let i=1;i<=n;i++){
    factor *= i
  }
  return factor;
}
console.log(factor(0));
let factors=[];
for(let i=0;i<=10;i++){
    if(factor(i)){
        factors.push(factor(i));
    }
}
console.log(factors);
