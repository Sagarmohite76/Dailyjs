// ✅ LEVEL – 1 (Beginner Logic Programs)

// Perfect to start warming up your logic.

// 1. Find largest of two numbers

// Input: two numbers → Output: bigger number

// 2. Check if number is even or odd
// 3. Find maximum of three numbers
// 4. Print numbers from 1 to 100 using loop
// 5. Find sum of first 50 natural numbers
// 6. Count digits in a number

// Example: 9852 → 4 digits

// 7. Reverse a number

// Example: 1234 → 4321

// 8. Check if number is palindrome

// Example: 121 → palindrome

// 1.
let num1 = 67;
let num2 = 78;

if (num1 > num2) {
    console.log(`${num1} is larger than ${num2}`);

} else if (num2 > num1) {
    console.log(`${num2} is larger than ${num1}`);

} else {
    console.log(`${num1} and ${num2} are equal`);

}

// 2.
let Num = 2;
if (Num % 2 === 0) {
    console.log("Even")
} else {
    console.log("Odd")
}

// 3.
let Num1 = 23;
let Num2 = 35;
let Num3 = 67;

if (Num1 > Num2 && Num1 > Num3) {
    console.log(Num1, "is largest number")
} else if (Num2 > Num1 && Num2 > Num3) {
    console.log(Num2, "is largest number");
} else {
    console.log(Num3, "is largest number")
}

// 4.
for (i = 1; i <= 100; i++) {
    console.log(i)
}

// 5.
let arr = [];
for (let i = 1; i <= 50; i++) {
    arr.push(i)
}
console.log(arr)
let sum = arr.reduce((acc, e) => acc + e, 0)
console.log(sum);

// 6.
let Numbers = "746334756";
let digits = Numbers.length
console.log(digits)

// 7.
let Number1 = 1234;
let Reverse = Number1.toString().split('').reverse().join("")
console.log(Reverse)

// 8.
let palindrome = "121";
let repalindorme = palindrome.toString().split('').reverse().join("")
if (palindrome == repalindorme) {
    console.log("It is a palindrome")
} else {
    console.log("Not")
}

// ✅ LEVEL – 2 (Medium Level Logic)
// 9. Print Fibonacci series (first 10 terms)
// 10. Check if number is prime
// 11. Find factorial of number
// 12. Find sum of digits

// Example: 543 → 12

// 13. Swap two variables without using 3rd variable
// 14. Count vowels in a string
// 15. Remove duplicates from an array
// 16. Find second largest number in array

// 9.
let Fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
    Fibonacci.push(Fibonacci[i - 1] + Fibonacci[i - 2]);
}
console.log(Fibonacci)

// 10.



// 11.

function factorial(factor) {
    if (factor == 0) {
        return 1
    }
    else if (factor < 0) {
        return "Factor is not defined at negative value"
    }
    let result2 = 1
    for (let i = 1; i <= factor; i++) {
        result2 *= i

    }
    return result2
}
console.log(factorial(5));




// 
let num = [1, 23, 4, 567, 8];
let oddNum = 0;
for (let i = 1; i < num.length; i++) {
    if (!(num[i] % 2 === 0)) {
        oddNum++
    }
}
console.log(oddNum);

// // 
// let Ar = [1, 23, 4, 677, 9];

// for (let i= b ; i >= 0; i--) {

//     reAr.push();

// }
// console.log(reAr)

// 
let array = [1, 23, 4, 56, 7]
// let newarray=[]
for (let i = 0; i < array.length; i++) {
    //    newarray.push(array[i]*2)
    array[i] = array[i] * 2
}
console.log(array)


// 
let arr5 = [10, 25, 5, 40]
let newarr5 = []

for (let i = 1; i < arr5.length; i++) {
    if (arr5[i] > 20) {
        newarr5.push(arr5[i])
    }
}
console.log(newarr5)




// Take 10 numbers from prompt and find:

// How many are positive

// How many are negative

let prompt = require('prompt-sync')()
let numbers = prompt("Enter numbers :");
let x = numbers.toString().split(',')
let positiveNumbers = 0;
let negativeNumbers = 0;

for (let i = 0; i <= x.length; i++) {
    if (x[i] >= 0) {
        positiveNumbers++;
    }
    else if (x[i] < 0) {
        negativeNumbers++;
    }
}
console.log("Positive Numbers :", positiveNumbers)
console.log("Negative Numbers :", negativeNumbers);

// Find the largest digit in a number
// Example: 5924 → 9

let number = 1256758345;
let digit = number.toString().split('').sort()
let largestDigit = digit.slice(-1).toString()
console.log(largestDigit);

// Print this pattern:

// *
// **
// ***
// ****

let star = "****";
let d = ''
for (let i = star.length - 1; i >= 0; i--) {
    console.log(d += star[i])
}

let e = ''
let NUM = "1234";
for (let i = 0; i < NUM.length; i++) {
    console.log(e += NUM[i])
}

// Check whether a number is Armstrong number
// Example: 153 → 1³ + 5³ + 3³ = 153

let Armnum = 13;
let ArrArm = Armnum.toString().split('')
console.log(ArrArm)
let p = ArrArm.map(e => {

    return e ** 3
})
console.log(p)

let total = p.reduce((acc, curr) => acc + curr, 0);
console.log(total);
if (total == Armnum) {
    console.log("It is Armstrong Number")
} else {
    console.log("Not")
}

for (let i = 1; i <= 10000; i++) {
    let Armnum = i;
    let ArrArm = Armnum.toString().split('')
    let p = ArrArm.map(e => {
        return e ** ArrArm.length
    })
    let total = p.reduce((acc, curr) => acc + curr, 0);
    if (total == Armnum) {
        console.log(i)
    }
};


const decimalNumber1 = 6;
const binaryString1 = decimalNumber1.toString(2);

console.log(`${decimalNumber1} in binary is: ${binaryString1}`);
// Output: 42 in binary is: 101010

// 1) An office works from 9 AM to 6 PM.
// Write a JavaScript program using a for loop and if condition to:

for (let hour = 1; hour < 24; hour++) {
    if (hour >= 9 && hour < 18) {
        console.log(`At ${hour}:00 - Office is Open`);
    } else {
        console.log(`At ${hour}:00 - Office is Closed`);
    }
}



// 2) A person plans to exercise 7 days a week, but does not exercise on Sunday.
// Write a JavaScript program using a for loop to:
// Print exercise status for each day
// Skip Sunday using the continue statement

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 0; i < days.length; i++) {
    if (days[i] === 'Sunday') {
        continue;
    }
    console.log(`Exercising on ${days[i]}`);
}

// 6am to 8am alarm sound
for (let hour = 1; hour <= 24; hour++) {
    if (hour >= 6 && hour <= 8) {
        for (let minutes = 0; minutes < 60; minutes += 30) {
            console.log(hour, ":", minutes, "Alarm is ringing")
        }
    }
}

// 100% full and 0% switch off
for (let i = 100; i >= 0; i--) {
    if (i == 100) {
        console.log("Charging is full")
    }
    if (i == 0) {
        console.log("Phone is switchoff")
    }
    else {
        console.log("Charging of mobile", i)
    }
}

// 1) write a JavaScript program create an object student with name , rollNo , marks and print only the name and marks

let object = {
    name: "Sagar",
    rollNo: 45,
    marks: 100
};
console.log(`Name is ${object.name} and marks are : ${object.marks}`)

// 2)  write a JavaScript program create ana object  student  with  name , rollNo , marks  update marks and name  value and print it

object.marks = 99;
object.name = "Ram";

// 3)Write a  JavaScript program to create an array of objects with name,  rollNo and  marks, and print the students who have more than 70 marks.

let students = [
    { name: "Sagar", age: 19, Marks: 1 },
    { name: "Ram", age: 19, Marks: 1 },
    { name: "Sita", age: 19, Marks: 80 },
    { name: "Krishna", age: 19, Marks: 100 },
    { name: "Pranav", age: 19, Marks: 10 },
    { name: "Ritesh", age: 19, Marks: 10 }

];
for (let i = 0; i < students.length; i++) {
    if (students[i].Marks >= 70) {
        console.log(students[i].name)
    }
}
students.forEach(e => {
    if (e.Marks >= 70) {
        console.log(`${e.name} has marks ${e.Marks}`);

    }
})


// 4)  write a javascript program to create array of objects with name rollNo and marks and count total marks

let list = [
    { name: "Sagar", rollNo: 45, marks: 100 },
    { name: "Ritesh", rollNo: 45, marks: 100 },
    { name: "Pranav", rollNo: 48, marks: 100 }

]
let totalMarks = 0
// for (let i = 0; i < list.length; i++) {
//     totalMarks += list[i].marks
// }

list.forEach(e => {
    totalMarks += e.marks
})
console.log(totalMarks);


// Write a JavaScript program to check whether a given number is prime or not.
function prime(numtocheck) {
    for (let i = 2; i < numtocheck; i++) {
        if (numtocheck % i == 0) {
            return "Not prime"
        }
    }
    if (numtocheck < 2) {
        return "Not prime"
    } else {
        return "Prime"
    }
}
console.log(prime(2));

// Factorial 
function factoria(n) {
    if (n < 0) {
        return 'Factorial of negative number is not defined ';
    } else if (n == 0) {
        return `Factorial of ${n} is 1`;
    }
    let factor = 1
    for (let i = 1; i <= n; i++) {
        factor *= i
    }
    console.log(factor)
}
factoria(5);


// 1) write a JavaScript program get an array print If the name length is greeter that 4, convert it to uppercase other wise in lowercase using ternary operator


// 2) write a JavaScript program  find largest number in an array  using for loop
// 3) write a JavaScript program to find negative numbers in an array  using while loop// 4) write a JavaScript program to check array is empty or not
// 5) write a JavaScript program  find the longest word in an array using for loop
// 6) Write a JavaScript program using a switch statement to display the number of days in a given month.
// 7) Calculate Total Marks and Percentage Using a Nested Object in JavaScript


// First level.
// Write a JavaScript program to print all even numbers from an array using a for loop.
let a = [2, 3, 4, 647, 65, 57];
let even = [];
let odd = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        even.push(a[i]);

    }
    else {
        odd.push(a[i]);

    }
}

console.log(even);
console.log(odd);



// Write a JavaScript program to count total elements in an array using a while loop.
let a1 = [22, 34, 46, 6, 7, 8, 89];
let i = 0;
let numberofe = 0;
while (i < a1.length) {
    numberofe++;
    i++;
};
console.log(numberofe);



// Write a JavaScript program to check whether a number exists in an array or not.
let a2 = [2, 3, 556, 677, 46, 7];
let element = 2;
for (let i = 0; i < a2.length; i++) {
    if (a2[i] === element) {
        console.log("element is exist");
    }

}

// Write a JavaScript program to print all positive numbers from an array using a for loop.
let a3 = [1, 23, 34, 5, 6, 646, -3, -45];
let positiveNumbers1 = []
for (let i = 0; i < a3.length; i++) {
    if (a3[i] > 0) {
        positiveNumbers1.push(a3[i]);
    }
}
console.log(positiveNumbers1);



// Write a JavaScript program to find the sum of array elements using a while loop.
{
    let a4 = [1, 2, 34, 456, 6, 7];
    let sumofa4 = 0;
    let j = 0;
    while (j < a4.length) {
        sumofa4 += a4[j];
        j++
    }
    console.log(sumofa4);
}


// Write a JavaScript program using a switch statement to display the name of the day (1–7).
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuseday");
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
        console.log("Invalid day");

}



// Write a JavaScript program to check whether an array length is greater than 5 or not using a ternary operator.

let a5 = [12, 24, 345, 546, 67, 56, 56, 7];
let a5length = (a5.length < 5) ? "array length is less than 5" : "Not";
console.log(a5length);



// Second level
// Write a JavaScript program to reverse an array using a for loop.
let b1 = [2, 33, 45, 676, 567];
let reverseb1 = [];
for (let i = b1.length - 1; i >= 0; i--) {
    reverseb1.push(b1[i]);
}
console.log(reverseb1);


// Write a JavaScript program to find the smallest number in an array using a for loop.
let b2 = [2, 334, 5, 6, 5, 88];
let smallest = b2[0];
for (let i = 0; i < b2.length; i++) {
    if (smallest > b2[i]) {
        smallest = b2[i]
    }
}
console.log(smallest);


// Write a JavaScript program to print duplicate values from an array.
let b3 = [2, 345, 67, 56, 2, 456, 6, 7, 67, 6, 7];
for (let i = 0; i < b3.length; i++) {
    for (let j = i + 1; j < b3.length; j++) {
        if (b3[i] == b3[j]) {
            console.log(b3[i]);
        }
    }
};

// Write a JavaScript program to count even and odd numbers in an array.
let b4 = [1, 2, 3, 3, 546, 34, 56, 7, 47];
let evennumbers = 0;
let oddnumbers = 0;

for (let i = 0; i < b4.length; i++) {
    if (b4[i] % 2 === 0) {
        evennumbers++;
    } else {
        oddnumbers++;
    }
}
console.log(evennumbers);
console.log(oddnumbers);




// Write a JavaScript program to check whether a string is palindrome using a loop.
let b5 = "121";
let b5reverse = "";

for (let i = b5.length - 1; i >= 0; i--) {
    b5reverse += b5[i];
}

if (b5 === b5reverse) {
    console.log("It is palindrome");
} else {
    console.log("Not palindrome");
}




// Write a JavaScript program to print student name and grade from an object.
let b6 = {
    name: "Sagar",
    grade: "A"
};
console.log(b6.name, b6.grade);


// Third level
// Write a JavaScript program to find the second largest number in an array.
let t1 = [2, 3, 43, 76578];
let larger = t1[0];
let sec = ""
for (let i = 0; i < t1.length; i++) {
    if (larger < t1[i]) {
        sec = larger
        larger = t1[i];
    } else if (sec < t1[i] && t1[i] != larger) {
        sec = t1[i]
    }
}
console.log(larger);
console.log(sec);






// Write a JavaScript program to print prime numbers from an array using a loop.
let c3=[2,334,4,5,7,9,0];
let c3Prime=[];

for(let i=0;i<c3.length;i++){
    let isprime=true;
    if(c3[i]<2){
        isprime = false;
        
    }else if(c3[i]){
         for(let j=2;j<c3[i];j++){
        if(c3[i]%j==0){
           isprime=false;
            
        }
    }
    }
 if(isprime){
    c3Prime.push(c3[i])
 }
}
console.log(c3Prime);




// Write a JavaScript program to find the frequency of each element in an array.
let c5=[1,22,365,6,22,34,345,2,2,6];
let count=0
// for(let i=0;i<c5.length;i++){
//   for(let j=i+1;j<c5.length;j++){
//     if(c5[i]===c5[j]){
//         console.log(c5[j]);
//         count++
//     }
//   }
// }
// console.log(count);

for(let element of c5){
    // console.log(element);

    
}
// Write a JavaScript program to calculate total marks, percentage, and result using a nested object.
let Marks={
    name:"Ram",
    marks:{
        math:50,
        science:50
    }
}
let subjectscount=0;
let totalmarks=0;
for(let subjects in Marks.marks){
   totalmarks += Marks.marks[subjects];
   subjectscount++;
}
let percentage=totalmarks/subjectscount
console.log(percentage);

console.log(totalmarks);
console.log(subjectscount);





// Write a JavaScript program to display employees whose salary is greater than 30,000 from an array of objects.
let 


// Write a JavaScript program to sort an array without using built-in methods.

// Write a JavaScript program to find the longest and shortest word in an array.