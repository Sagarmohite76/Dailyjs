// JavaScript Logic Practice Questions
// Beginner Logic (Basics)
// ● 1. Check whether a number is positive, negative, or zero.
let number = 20;
if (number > 0) {
    console.log("Positive");

} else if (number < 0) {
    console.log("Negative");

} else {
    console.log("Zero");

}

// ● 2. Find the largest of 3 numbers.
let a = 50;
let b = 90;
let c = 70;
if (a > b && a > c) {
    console.log(a, "is largest");

} else if (b > c && b > a) {
    console.log(b, "is largest");

}
else {
    console.log(c, "is largest");

}


// ● 3. Check if a number is even or odd.
let num = 4;
if (num % 2 === 0) {
    console.log(num, "Even");

} else {
    console.log(num, "Odd");

}

// ● 4. Swap two numbers without using a third variable.
let x = 80;
let y = 50;
x = x + y;
y = x - y;
x = x - y;
console.log(`x = ${x}, y = ${y}`);



// ● 5. Calculate the sum of digits of a given number.
let digits = 1234;
let numdigit = digits.toString();
let sum = 0;
for (let i = 0; i < numdigit.length; i++) {
    sum += parseInt(numdigit[i])
}


// for (let char of numdigit) {
//     sum += parseInt(char)

// }
console.log(sum);




// Intermediate Logic (Loops & Conditions)

// ● 6. Reverse a number.
let Num = 12345;
let strNum = Num.toString();
let reverseNum = '';
for (let i = strNum.length - 1; i >= 0; i--) {
    reverseNum += strNum[i]
}
console.log(reverseNum);



// ● 7. Check whether a number is a palindrome.
// 1st method
let palindrome = '1214';
let repalindorme = "";
for (let i = palindrome.length - 1; i >= 0; i--) {
    repalindorme += palindrome[i]
}
console.log(repalindorme);

if (palindrome === repalindorme) {
    console.log("It is a plaindrome");

} else {
    console.log("Not");

}
// 2nd method
let palindrome1 = "121";
let repalindorme1 = palindrome1.toString().split('').reverse().join("")
if (palindrome1 == repalindorme1) {
    console.log("It is a palindrome")
} else {
    console.log("Not")
}


// ● 8. Find the factorial of a number using a loop.

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



// ● 9. Count vowels in a given string.
let string = "Sagar";
let vowels = "aeiou";
let vowelscount = 0;
for (let char of string.toLowerCase()) {
    if (vowels.includes(char)) {
        vowelscount++;
    }
}
console.log(vowelscount);




// ● 10. Find the second largest number in an array.
let arr = [1, 2, 354, 75];
let largest = arr[0];
let secondlargest = "";
for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
        secondlargest = largest;
        largest = arr[i];
    }
    if (largest > arr[i] && secondlargest !== largest) {
        secondlargest = arr[i]
    }
}
console.log(secondlargest);


// Practical Daily-Life Logic
// ● 11. Calculate total bill with GST and discount.
let price = 10000;
let gst = price * 0.18;
let discount = price * 0.10
let totalbill = price + gst - discount;
console.log(totalbill);


// ● 12. Validate a mobile number (10 digits).
let mobileNo = 8767232576;
let strmobile = mobileNo.toString().trim();
if (strmobile.length == 10) {
    console.log("Mobile number is valid");

} else {
    console.log("Mobile number is not valid");

}


// ● 13. Check login credentials using username and password.
let prompt = require('prompt-sync')();
let username = prompt("Enter user name :");
let password = prompt("Enter password :");
let i = 0;
do {
    username = prompt("Enter user name :");
    password = prompt("Enter password :");
    i++;
} while (username !== "Sagar" && password != 1234);

// ● 14. Calculate student grade based on marks.
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

// ● 15. Check if a person is eligible to vote.
let age = prompt("Enter your age :");

if (age >= 18) {
    console.log("You are eligible for vote");
} else if (age < 18) {
    console.log("You are not eliginle for vote");
} else {
    console.log("Enter correct age")
}

// Array & Loop Logic
// ● 16. Remove duplicate values from an array.
let arrnum = [1, 2, 35, 456, 57, 2, 3, 5, 3];
let duplicatearr = [];
// for (let i = 0; i < arrnum.length; i++) {
//     let duplicate = true;
//     for (let j = i + 1; j < arrnum.length; j++) {
//         if (arrnum[i] === arrnum[j]) {
//             duplicate = false

//         }
//     }
//     if (duplicate) {
//         duplicatearr.push(arrnum[i])
//     }
// }

// 2nd way
for (let i = 0; i < arrnum.length; i++) {

    if (!duplicatearr.includes(arrnum[i])) {
        duplicatearr.push(arrnum[i]);
    }
}

console.log(duplicatearr);


// ● 17. Count even and odd numbers in an array.
let arr17 = [2, 3, 4, 5, 568, 86];
let evennumbers = 0;
let oddnumbers = 0;
for (let i = 0; i < arr17.length; i++) {
    if (arr17[i] % 2 === 0) {
        evennumbers++;
    } else {
        oddnumbers++;
    }
}
console.log("Even :", evennumbers);
console.log("Odd :", oddnumbers);



// ● 18. Sort an array without using built-in methods.

let arr18 = [1, 2, 546, 678, 78];
for (let i = 0; i < arr18.length; i++) {
    for (let j = 0; j < arr18.length; j++) {
        if (arr18[j] > arr18[j + 1]) {
            let temp = arr18[j];
            arr18[j] = arr18[j + 1];
            arr18[j + 1] = temp;
        }


    }
}
console.log(arr18);


// ● 19. Find the missing number in a sequence.
let arr19 = [11, 12, 13, 15];
// function missingnumber(array) {
//     let n = array.sort((a, b) => b - a);
//     let first=n[array.length-1];
//     let Highest = n[0]
//     console.log(first,Highest);
//     let expected=Highest*(Highest + 1)/2
//     let add = 0;
//     // console.log(expected);

//     let arr19sum = 0;
//     for (let i = 0; i < arr19.length; i++) {
//         arr19sum += arr19[i]
//     }
//     // console.log(arr19sum);

//     let missingnumber = expected - arr19sum;
//     console.log("Missing number", missingnumber);

// }
// missingnumber(arr19)

function miss(array) {
    let missingnumber = "";
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] !== array[i] + 1) {
            missingnumber = array[i] + 1
        }
    }
    console.log(missingnumber);

}

miss(arr19)


// ● 20. Rotate an array by one position.
// Right
let arr20 = [1, 4, 5, 67, 7];
let last = arr20[arr20.length - 1];
for (let i = arr20.length - 1; i >= 0; i--) {
    arr20[i] = arr20[i - 1]
}
arr20[0] = last
console.log(arr20);

// left 
{
    let arr20 = [1, 4, 5, 67, 7];
    let last = arr20[0];
    for (let i = 0; i < arr20.length; i++) {
        arr20[i] = arr20[i + 1]
    }
    arr20[arr20.length - 1] = last
    console.log(arr20);
}


// Advanced / Interview Logic
// ● 21. Check if two strings are anagrams.
let str1 = "listen"
let str2 = "silent"
function anagrams(string1, string2) {
    let characters = true;
    for (let char of string1) {

        if (string2.includes(char)) {
            characters = true
        }
    }
    if (characters && string1.length === str2.length) {
        console.log("Anagrams");
    } else {
        console.log("Not");
    }
}
anagrams(str1, str2)

// ● 22. Find the most repeated character in a string.
let str22 = "dcaaaab";

function mostrepeated(string) {
    let ob = {};

    for (let char of string) {
        let repeat = 0;
        for (let char2 of string) {
            if (char === char2) {
                repeat++;
            }
        }
        ob[char] = repeat;
    }

    let largest = 0;
    let mostChar = "";

    for (let key in ob) {
        if (ob[key] > largest) {
            largest = ob[key];
            mostChar = key;
        }
    }

    console.log(`Most repeated character : ${mostChar}`);
    console.log(`Count : ${largest}`);
}

mostrepeated(str22);


// ● 23. Flatten a nested array.
let flat = []
function Flatten(n) {
    for (let element of n) {
        if (typeof element == "object") {
            Flatten(element);
        } else {
            flat.push(element)
        }
    }
}
Flatten([1, 2, [3, 4, [5, 6]]]);
console.log(flat);


// ● 24. Generate Fibonacci series up to N terms.
function Fibonacci(n) {
    let arr = [0, 1];
    for (let i = 0; i < n; i++) {
        let series = arr[i] + arr[i + 1];
        if (series > n) break;
        arr.push(series)
    }
    return arr
}
console.log(Fibonacci(10));




// ● 25. Implement debounce function logic.

function debounce(fn,delay){
    let timer;
    return function(arg){
      clearTimeout(timer);
      timer=setTimeout(()=>{
         fn(arg);
      },delay)
    }
}

 function searchingfor(search){
    console.log("Searching for",search);
 }

 const searchData=debounce(searchingfor,5000)
 searchData("H");
 searchData("Ha");
 searchData("Har");
 searchData("Hard");
 searchData("Hard ");
 searchData("Hard J");
 searchData("Hard Js");


 

// Real-World Mini Challenges
// ● 26. Build simple to-do list logic.

// ● 27. Calculate cart total price with quantity.
// ● 28. Filter active users from user data.

// ● 29. Search items from a product list.
let productList=[{name:"Apple",price:120}]

// ● 30. Generate and validate OTP

let otp = Math.floor(Math.random() * 10000);
console.log(otp)
if (otp.length == 4) {
    console.log("Otp is valid");

}
else {
    console.log("Otp is Invalid");

}
