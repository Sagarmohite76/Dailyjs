// 🔹 LEVEL 1 – Beginner Logic (Basics)

// ● 1. Check whether a number is positive, negative, or zero.
let num = 34;
if (num > 0) {
    console.log(`${num} is positive number`);

} else if (num < 0) {
    console.log(`${num} is Negative  number`);

} else {
    console.log(`${num} is equal to Zero`);

}

// ● 2. Find the largest of two numbers.
// ● 3. Find the smallest of three numbers.
// ● 4. Check if a number is even or odd.
// ● 5. Check whether a number is divisible by 5 and 11.
let number = 55
if (number % 5 === 0 && number % 11 === 0) {
    console.log("a number is divisible by 5 and 11.");

} else {
    console.log("Not");

}

// ● 6. Swap two numbers using a third variable.
let m = 40;
let n = 50;
let o = m;
m = n;
n = o;
console.log(m, n);


// ● 7. Swap two numbers without using a third variable.
let x = 150;
let y = 90;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y);


// ● 8. Find the square and cube of a given number.
function squCube(n) {
    let squ = n ** 2;
    let cub = n ** 3;
    return `Square is ${squ} and Cube is ${cub}`
}
console.log(squCube(2));


// ● 9. Check whether a year is a leap year.
// ● 10. Convert Celsius to Fahrenheit.

// 🔹 LEVEL 2 – Intermediate Logic (Loops, Arrays, Strings)

// ● 11. Reverse a number using a loop.
let Num = 14567;
let strNum = Num.toString();
let reNum = "";
for (let i = strNum.length - 1; i >= 0; i--) {
    reNum += strNum[i]

}
console.log(reNum);



// ● 12. Find the factorial of a number using a loop.
function factorial(n) {
    if (n === 0) {
        return `Factorial of ${n} is 1.`
    } else if (n < 0) {
        return `Factorial of negative number is not defined.`
    }
    let factor = 1
    for (let i = 1; i <= n; i++) {
        factor *= i
    }
    return factor

}
console.log(factorial(5));


// ● 13. Check whether a number is a palindrome.
let palindrome = "121";
let repalindrome = "";
for (let i = palindrome.length - 1; i >= 0; i--) {
    repalindrome += palindrome[i];
}
console.log(repalindrome);
if (palindrome === repalindrome) {
    console.log("It is a palindrome");

} else {
    console.log("Not a palindrome");

}


// ● 14. Find the sum of digits of a given number.
let digits = 15567;
let strDigits = digits.toString();
let sum = 0;
for (let number of strDigits) {
    sum += parseInt(number)
}
console.log(sum);


// ● 15. Count vowels and consonants in a string.
let string = "Sagar";
let vowels = "aeiou";
let count = 0
for (let char of string.toLowerCase()) {
    if (vowels.includes(char)) {
        count++;
    }
}
console.log(count);

// ● 16. Find the largest element in an array.
let arr = [2, 3, 45, 65];
let smallest = arr[0]
let largest = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    } else if (smallest > arr[i]) {
        smallest = arr[i];
    }
}
console.log(smallest, largest);


// ● 17. Count even and odd numbers in an array.
let arr2 = [2, 3, 4, 5, 8, 10]
let evenNumbers = 0;
let oddNumbers = 0;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        evenNumbers++;
    } else {
        oddNumbers++;
    }
}
console.log(evenNumbers, oddNumbers);


// ● 18. Remove duplicate values from an array.
let arr3 = [1, 2, 4, 5, 2, 5];
let arr4 = []
// for(let i=0;i<arr3.length;i++){
//     for(let j=i+1;j<arr3.length;j++){
//         if(arr3[i]===arr3[j]){
//             arr4.push(arr3[i]) 
//         }
//     }

// }

for (let element of arr3) {
    if (!arr4.includes(element)) {
        arr4.push(element)
    }
}


console.log(arr4);


// ● 19. Find the second largest number in an array.
let arr5 = [2, 34, 4356, 6, 520];
let large = arr5[0]
let sec;
// for (let element of arr5) {
//     if (large < element) {
//         sec = large;
//         large = element;
//     } else if (sec < element && sec !== large) {
//         sec = element
//     }
// }
// console.log(large, sec);
let sortarr5 = arr5.sort((a, b) => { return b - a })
sec = arr5[1]
console.log(sec);



// ● 20. Sort an array without using built-in methods.
let arr6 = [2, 56, 346, 65, 67];
for (let i = 0; i < arr6.length; i++) {
    for (let j = 0; j < arr6.length; j++) {
        if (arr6[j] < arr6[j + 1]) {
            let temp = arr6[j];
            arr6[j] = arr6[j + 1];
            arr6[j + 1] = temp;
        }
    }
}
console.log(arr6);


// 🔹 LEVEL 3 – Advanced / Interview Logic

// ● 21. Check if two strings are anagrams.
function anagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return "Not Anagrams";
    }
    let string1 = str1.split('').sort().join(',');
    let string2 = str2.split('').sort().join(',');

    if (string1 == string2) {
        return "Anagrams";
    } else {
        return "Not Anagrams"
    }

}
console.log(anagrams("listen", "silent"));


// ● 22. Find the most repeated character in a string.
function mostRepeate(str) {
    let ob = {}
    for (let char of str) {
        let repeat = -1
        for (let char2 of str) {
            if (char == char2) {
                repeat++;

            }
        }
        ob[char] = repeat
    }
    console.log(ob);
    let large = ""
    let most = "";

    for (let key in ob) {
        if (large < ob[key]) {
            large = ob[key]
            most = key;
        }
    }
    console.log(`Most repeated character is ${most} and count is ${large}`);

}
mostRepeate("helllllo");

// ● 23. Find the missing number in a sequence.
let arr7=[67,69,70];
let missingnumber="";

for(let i=0;i<arr7.length-1;i++){
    if(arr7[i + 1] - arr7[i] !== 1){
        missingnumber=arr7[i]+1
    }
}
console.log(missingnumber);


// ● 24. Rotate an array by one position (left/right).
// left
let arr8=[2,3,4,5,6,7];
let first=arr8[0]
for(let i=0;i<arr8.length;i++){
    arr8[i]=arr8[i+1]
}
arr8[arr8.length-1]=first
console.log(arr8);

// right
let arr9=[3,4,65,657];
let last=arr9[arr9.length-1]
for(let i=arr9.length-1;i>=0;i--){
    arr9[i]=arr9[i-1]
}
arr9[0]=last
console.log(arr9);


// ● 25. Flatten a nested array.
let array=[23,34,[45,456,[45,4]],90]
for(let i=0;i<array.length;i++){
    if(Array.isArray(array[i])){
        array[i]==[...array[i]]
    }
}
console.log(array);

// ● 26. Generate Fibonacci series up to N terms.
let c = 7;
let a = 0, b = 1;

for (let i = 1; i <= c; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}

// ● 27. Check whether a string has balanced parentheses.
// ● 28. Remove duplicate objects from an array of objects.
// ● 29. Implement debounce function logic.
function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

let fun = function (a, b) {
    console.log(a + b);
};

let debouncedFun = debounce(fun, 2000);

// Call multiple times
debouncedFun(5, 5);


// ● 30. Implement throttle function logic.
function deb(fn,delay){
    let timer;
    return function(){
       timer= setTimeout(()=>{

       })
    }
}