// // 20 Questions basic of for loop
// // 3)Write a program to reverse a string "JavaScript" using a for loop.
// // 9)Write a program to calculate the average of numbers in an array using a for loop.
// // 13)Write a program to find the sum of digits of a number using a for loop.
// // 14)Write a program to check if a number is prime using a for loop.
// // 15)Write a program to generate the Fibonacci series up to n terms using a for loop.
// // 16)Write a program to find the GCD (Greatest Common Divisor) of two numbers using a for loop.
// // 17)Write a program to find the LCM (Least Common Multiple) of two numbers using a for loop.
// // 18)Write a program to print the first n prime numbers using a for loop.
// // 19)Write a program to find the sum of all even numbers in an array using a for loop.
// // 20)Write a program to find the sum of all odd numbers in an array using a for loop.

// 1)Write a JavaScript program using a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2)Write a program using a for loop to find the sum of all numbers.
//    arr = [5, 10, 15, 20];

let arr = [5, 10, 15, 20];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum);

// 4)Write a program to find the factorial of a number using a for loop.

let Num;
function factor(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    if (n == 0) {
        return `Factorial of ${n} is equal to 1`;
    } else if (n < 2) {
        return `Factorial of negative number is not defined`;
    }
    return result

}
console.log(factor(5));

// 5)Write a program to print even numbers from 1 to 20 using a for loop.
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}


// 6)Write a program to print odd numbers from 1 to 20 using a for loop.
for (let i = 1; i <= 20; i++) {
    if (!(i % 2 == 0)) {
        console.log(i)
    }
}


// 7)Write a program to find the largest number in an array using a for loop.
let scores = [250, 300, 180, 275, 320, 290];
let highestScore = scores[0];
let lowestScore = scores[0];
for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highestScore) {
        highestScore = scores[i];
    }

}
console.log(highestScore)

// 8)Write a program to find the smallest number in an array using a for loop.

let Numbers = [23, 45, 67, 89];
let smallest = Numbers[0]
for (let i = 1; i <= Numbers.length; i++) {
    if (Numbers[i] < smallest) {
        smallest = Numbers[i]
    }
}
console.log(smallest);

// 10)Write a program to print the multiplication table of a given number using a for loop.
let mulNum = 5;
let table = ``;
for (let i = 1; i <= 10; i++) {
    table += i * mulNum
}
console.log(table);


// 11)Write a program to count the number of vowels in a string using a for loop.

let vowelsStr = "Sagar";
let vowels = "aeiouAEIOU";
let count = 0

for (let char of vowelsStr) {
    if (vowels.includes(char)) {
        count++
    }
}
console.log(count);


// 12)Write a program to count the number of words in a string using a for loop.

let Str = "hello";
let strArr = Str.toString().split('').length
console.log(strArr)


// 1. Print numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. Print numbers from 5 to 1.
for (let i = 5; i >= 1; i--) {
    console.log(i)
}

// 3. Print even numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// 4. Print odd numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    if (!(i % 2 === 0)) {
        console.log(i);
    }
}

// 5. Find sum of numbers from 1 to 5.
let Sum = 0;
for (let i = 1; i <= 5; i++) {
    Sum += i
}
console.log(Sum);

// 6. Print multiplication table of 2.
for (let i = 1; i <= 10; i++) {
    console.log(i * 2);
}

// 7. Print square of numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
    console.log(i ** 2);
}

// 8. Print array elements.
let Arr = [1, 23, 4, 5, 56];
for (let i = 1; i < Arr.length; i++) {
    console.log(Arr[i])
}

// 9. Count from 0 to 4.
for (let i = 0; i <= 4; i++) {
    console.log(i)
}

// 10. Print “Hello” 3 times.
for (let i = 1; i <= 3; i++) {
    console.log("Hello")
}

// 1) let nums = [12, 5, 8, 130, 44];
// Use a for loop to find the largest number in the array.

let nums = [12, 5, 8, 130, 44];
let large = nums[0]
for (let i = 1; i < nums.length; i++) {
    if (nums[i] > large) {
        large = nums[i]
    }
}


console.log(large);

// 2) Write a JavaScript program using a for loop to print the multiplication table of 7 (from 7×1 to 7×10).
for (let i = 1; i <= 10; i++) {
    console.log(` 7 x ${i} = ${i * 7}`)
}

// 3) let arr = [3, -1, -7, 8, -3, 5];
// Use a for loop to count how many negative numbers are present.

let arr1 = [3, -1, -7, 8, -3, 5];
let negativeNum = 0
for (let i = 1; i < arr1.length; i++) {
    if (arr[i] < 0) {
        negativeNum++;
    }
}
console.log(negativeNum);

// 
let Arr21 = [2, 3, 57, 2, 4, 78, 90,7,7];
let newArr = [];

for (let i = 0; i < Arr21.length; i++) {
    let num = Arr21[i];
    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    } else {
        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        newArr.push(num);
    }
}

console.log(newArr);
//
