// 1. Print Fibonacci series (first N terms)

function FibonacciSeries(n) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}
FibonacciSeries(10);

// 2. Check if a number is prime
function isPrime(n) {
    let isPrime = true;
    if (n < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
            }
        }
    }
    if (isPrime) {
        console.log("Prime");

    } else {
        console.log("Not prime");

    }
}
isPrime(9);

// 3. Find factorial of a number
function factorial(n) {
    if (n < 0) {
        return "Factorial of negative number is not defined";
    }

    let factor = 1;
    for (let i = 1; i <= n; i++) {
        factor *= i
    }
    return factor;
}
console.log(factorial(0));


// 4. Find sum of digits of a number
// Example: 543 → 12

let digit = 543;
let digits = digit.toString();
let sum = 0
for (let char of digits) {
    sum += Number(char)
}
console.log(sum);


// 5. Swap two variables without using a third variable
let a = 89;
let b = 80;
// a=a+b;
// b=a-b;
// a=a-b;
[a, b] = [b, a]
console.log(a);
console.log(b);



// 6. Count vowels in a string
let str = "Sagar";
let vowels = "aeiou";
let count = 0
for (let char of str.toLowerCase()) {
    for (let v of vowels.toLowerCase()) {
        if (char === v) {
            count++
        }
    }
}
console.log(count);


// 7. Reverse a string
let str1 = "Sagar";
let reverse = "";
for (let i = str1.length - 1; i >= 0; i--) {
    reverse += str1[i]
}
console.log(reverse);

// 8. Remove duplicate elements from an array
let arr = [12, 3, 4, 4, 4, 6, 7, 7, 8, 12]
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
        newArr.push(arr[i])
    }
}

console.log(newArr);



// 9. Find the second largest number in an array
let arr2 = [2, 3, 45, 6, 90]
let largest = 0;
let secondLargest = 0;
for (let ele of arr2) {
    if (ele > largest) {
        secondLargest = largest
        largest = ele
    }
    if (ele != largest && secondLargest < ele) {
        secondLargest = ele
    }
}
console.log(secondLargest);


// 10. Find the smallest number in an array
let arr3 = [2, 34, 56, 676, 7, 8, 1]
let smallest = arr3[0];
for (let i = 1; i < arr3.length; i++) {
    if (smallest > arr3[i]) {
        smallest = arr3[i]
    }
}
console.log(smallest);

let small = arr3.sort((a, b) => a - b)
console.log(small);






// 11. Find positive and negative numbers in an array
let arr4 = [2, 3, 3, 4, - 4, 5, -90]
let positive = []
let negative = []
for (let ele of arr4) {
    if (ele > 0) {
        positive.push(ele);
    }
    else {
        negative.push(ele)
    }
}
console.log(positive, negative);



// 12. Find common elements between two arrays
// Example: [1,2,3] and [2,3,4] → [2,3]
let Arr1 = [1, 2, 3, 3456, 67, 7, 7, 4, 0]
let Arr2 = [2, 4, 4, 5, 3]
let c = []
for (let ele of Arr1) {
    for (let ele2 of Arr2) {
        if (ele === ele2) {
            if (!c.includes(ele)) {
                c.push(ele)
            }
        }
    }
}
console.log(c);


// 13. Find the longest and shortest word in an array\
let strArr = ["Ram", "Sita", "Sagar", "s"]
let longest = strArr[0];
let shortest = strArr[0];
for (let ele of strArr) {
    if (longest.trim().length < ele.trim().length) {
        longest = ele
    }
    if (shortest.trim().length > ele.trim().length) {
        shortest = ele
    }
}
console.log(longest, shortest);


// 14. Reverse each word in a sentence
// Example: "hello world" → "olleh dlrow"
let para = "the baap company";
let arrpara = para.split(" ").map(e => e.split("").reverse().join("")).join(" ")
console.log(arrpara);



// 15. Remove falsy values from an array
// Example: [0, 1, false, "", 2] → [1, 2]
let arrr = [0, 1, false, "", 2].filter(Boolean)
console.log(arrr);

// rotate array
let arr5 = [1, 234, 5, 66, 6];
let last = arr5[arr5.length - 1]
for (let i = arr5.length - 1; i >= 0; i--) {
    arr5[i] = arr5[i - 1]
}
arr5[0] = last
console.log(arr5);

let num = 5
for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = i; j < num; j++) {
        row += " "
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*"
    }
    console.log(row);

}
for (let i = num - 1; i >= 1; i--) {
    let row = "";
    for (let j = i; j < num; j++) {
        row += " "
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*"
    }
    console.log(row);

}

//
for (let i = 1; i <= 5; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row += j
    }
    console.log(row);

}

// remove object duplicate by id
let arr6 = [{ id: 2, name: "Sagar" }, { id: 2, name: "Pranav" }, { id: 1, name: "Krishna" }];
let newArr6 = []
for (let ele of arr6) {
    let exists = newArr6.some(el => el.id == ele.id);
    if (!exists) {
        newArr6.push(ele)
    }

}
console.log(newArr6);

// 2️⃣ Count how many times each element appears

let arr7 = ["a", "b", "a", "c", "b", "a"];
let ob = {}
for (let ele of arr7) {
    let count = 0
    for (let ele2 of arr7) {
        if (ele === ele2) {
            count++
        }
    }
    ob[ele] = count

}
console.log(ob);

// 6️⃣ Group objects by department

let arr8 = [
    { name: "Sagar", dept: "IT" },
    { name: "Pranav", dept: "HR" },
    { name: "Amit", dept: "IT" }
];
let object = {}
for (let ele of arr8) {
    if (!object[ele.dept]) {
        object[ele.dept] = []
    }
    object[ele.dept].push(ele)

}

console.log(object);

// 7️⃣ Find student with highest marks

let arr9 =
    [
        { name: "A", marks: 80 },
        { name: "B", marks: 95 },
        { name: "C", marks: 88 },
        { name: "S", marks: 100 }
    ]
let topStudent = arr9[0];
for (let i = 0; i < arr9.length; i++) {
    if (topStudent.marks < arr9[i].marks) {
        topStudent = arr9[i]
    }
}
console.log(topStudent);

//🔟 Find common elements between two arrays

let a1 = [1, 2, 3, 4]
let a2 = [3, 4, 5, 6]
let a3 = [];
for (let ele of a1) {
    for (let ele2 of a2) {
        if (ele == ele2) {
            if (!a3.includes(ele)) {
                a3.push(ele);
            }
        }
    }
}
console.log(a3);









