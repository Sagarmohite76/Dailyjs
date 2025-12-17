let prompt = require('prompt-sync')();
// 1.
let Number = prompt("Enter number to check prime or not :");

function primeorNot(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return "Not prime"
        }
    }
    if (n < 2) {
        return "Not prime";
    } else {
        return "Prime"
    }
}
console.log(primeorNot(Number))

// 2.
let factorialofNum = prompt("Enter number to get factorial :");

function factorial(n) {
    if (n === 0) {
        return `Factorial of ${n} is 1.`
    } else if (n < 0) {
        return `Factorial is not defined.`
    }
    let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    return factorial
}
console.log(factorial(factorialofNum));

// 3.
let Str = prompt("Enter word to reverse :");
let reStr = Str.toString().split('').reverse().join().replaceAll(',', ``)
console.log(reStr);

// 1. Even or Odd
let num = prompt("Enter a number to check even or odd :");
function evenOrOdd(n) {
    if (n % 2 === 0) {
        return "Even Number";
    } else {
        return "Odd Number";
    }
}
console.log(evenOrOdd(num));

// 2. Largest of Two Numbers
let a = prompt("Enter first number :");
let b = prompt("Enter second number :");
function largest(x, y) {
    if (x > y) {
        return `${x} is larger`;
    } else if (y > x) {
        return `${y} is larger`;
    } else {
        return "Both are equal";
    }
}
console.log(largest(a, b));

// 3. Sum of First N Natural Numbers
let n = prompt("Enter number to find sum of natural numbers :");
function sumOfN(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfN(n));

// 4. Reverse a Number
let number = prompt("Enter number to reverse :");
function reverseNumber(num) {
    return num.toString().split('').reverse().join('');
}
console.log(reverseNumber(number));

// 5. Check Palindrome
let word = prompt("Enter word to check palindrome :");
function isPalindrome(str) {
    let rev = str.split('').reverse().join('');
    if (rev === str) {
        return "Palindrome";
    } else {
        return "Not a Palindrome";
    }
}
console.log(isPalindrome(word));

// 6. Count Vowels in String
let str = prompt("Enter a string to count vowels :");
function countVowels(s) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels(str));

// 7. Multiplication Table
let numTable = prompt("Enter number to generate table :");
function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
table(numTable);

// 8. Celsius to Fahrenheit
let C = prompt("Enter temperature in Celsius :");
function toFahrenheit(c) {
    return (c * 9 / 5) + 32;
}
console.log(toFahrenheit(C));

// 9. Square of Number
let sqNum = prompt("Enter number to find square :");
function square(n) {
    return n * n;
}
console.log(square(sqNum));

// 10. Count Digits in Number
let dig = prompt("Enter number to count digits :");
function countDigits(n) {
    return n.toString().length;
}
console.log(countDigits(dig));


//

let t=0;
do{
     num=prompt('Enter number until positive number');
    t++; 
}while(num>=0)