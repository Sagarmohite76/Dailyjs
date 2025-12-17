// 1.
let a = 1;
do {
    if (a % 2 === 0) {
        console.log("Even : ", a);

    } else {
        console.log("Odd : ", a)
    };
    a++
} while (a <= 20);

// 2.

let b = 1;
let even = [];
let odd = [];
do {

    if (b % 2 === 0) {
        even.push(b)
    }

    if (!(b % 2 === 0)) {
        odd.push(b)
    }
    b++;

} while (b <= 10);
console.log(even);
console.log(odd);

// 3.
let c = 1;
let primeArr = [];

do {
    if (c < 2) {
        console.log("Not prime", c);
    } else {
        let isPrime = true;
        for (let i = 2; i < c; i++) {
            if (c % i === 0) {
                isPrime = false;
                console.log("Not prime", c);
                break;
            }
        }
        if (isPrime) {
            primeArr.push(c);
            console.log("Prime", c);
        }
    }

    c++;
} while (c <= 10);

console.log("Prime numbers:", primeArr);

//

do {
    number = prompt("Enter number :");
} while (number < 0)


//
{
    do {
        pass = prompt("Enter number :");
    } while (pass != 1556)


}


let i = 1;
let output1 = '';
do {
    output1 += i + '\n';
    i++;
} while (i <= 5);
console.log("1. Basic do...while Loop:\n" + output1);

let sum = 0;
i = 1;
let output2 = '';
do {
    sum += i;
    i++;
} while (i <= 10);
console.log("2. Sum of Numbers:\nSum: " + sum);

let response;
let output3 = '';
do {
    response = prompt("Do you want to continue? (yes/no)");
} while (response !== "yes");
output3 = "User accepted.";
console.log("3. Prompt Until Valid Input:\n" + output3);

i = 1;
let output4 = '';
do {
    if (i === 6) break;
    output4 += i + '\n';
    i++;
} while (i <= 10);
console.log("4. Break from Loop with Condition:\n" + output4);

i = 10;
let output5 = '';
do {
    output5 += i + '\n';
    i--;
} while (i > 0);
console.log("5. Decrementing Counter:\n" + output5);

let number = 5;
let factorial = 1;
i = 1;
let output6 = '';
do {
    factorial *= i;
    i++;
} while (i <= number);
output6 = "Factorial of " + number + " is " + factorial;
console.log("6. Calculate Factorial:\n" + output6);

let num = 10;
let output7 = '';
do {
    num++;
} while (num <= 20 || num % 2 !== 0);
output7 = "First even number greater than 20 is " + num;
console.log("7. Find First Even Number Greater Than 20:\n" + output7);

{
    let n = 10;
    let a = 0, b = 1;
    let count = 1;
    let output8 = '';
    do {
        output8 += a + '\n';
        let next = a + b;
        a = b;
        b = next;
        count++;
    } while (count <= n);
    console.log("8. Fibonacci Sequence:\n" + output8);
}

i = 1;
let output9 = '';
do {
    if (i % 2 === 0) {
        i++;
        continue;
    }
    output9 += i + '\n';
    i++;
} while (i <= 10);
console.log("9. Continue Loop on Specific Condition:\n" + output9);

let prompt = require('prompt-sync')()
let age;
let output10 = '';
do {
    age = parseInt(prompt("Enter your age (must be a positive number):"));
} while (isNaN(age) || age <= 0);
output10 = "Valid age entered: " + age;
console.log("10. Validate User Input:\n" + output10);

