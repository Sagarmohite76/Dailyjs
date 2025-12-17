// 1).Given an array of registered students, check whether a new student name exists using includes().
let students = ["Ram", "Chaitanya", "Sagar"]
let Student = "Pratik";

if (students.includes(Student)) {
    console.log("Already register")
} else {
    students.push(Student);
    console.log(students)
}

// 2) .If the array contains the incorrect value 0, find its position using indexOf() and replace it with 100 using splice().

let num = [1, 3, 4, 0, 9];
let index = num.indexOf(0);

num.splice(index, 1, 100);
console.log(num);

// 3).If the number of items is more than 3, use slice() to extract only the first 3 items and display them.

let items = ["hello", 1, 5];
let length = items.length;
if (length > 3) {
    console.log(items.slice(0, 3))
} else {
    console.log("items length less than 3")
}

// 4).You have three arrays representing different categories of data.
// Based on a user’s selection (1, 2, or 3), you need to merge list1 with either list2 or list3 using concat().
// Use a switch-case statement to perform the correct operation and print the merged result.

let data1 = [1, 34, 5, 45, 7];
let data2 = ['HELLO', "js", "html"];
let data3 = ["Hello", 2, 3, 4, 5, "World"]

let userSelection = 1;
let merge;

switch (userSelection) {
    case 1:
        merge = data1.concat(data2);
        break;

    case 2:
        merge = data2.concat(data3);

        break;

    case 3:
        merge = data3.concat(data1);
        break;

    default:
        merge = data1.concat(data2, data3)
}
console.log(merge);


// 
let date = new Date();
let day = date.getDay();
if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
    console.log("Working day")
} else {
    console.log("Not working day")
}

let time = date.getMinutes()
console.log(time)


// 1. Use forEach to print every number in this array: [10, 20, 30, 40].


let arr = [10, 20, 30, 40];
arr.forEach(function (element, index) {
    console.log(`Element ${index} : ${element}`)
});


// 2. Use map to create a new array containing the squares of [1, 2, 3, 4].

let Arr = [1, 2, 3, 4];
let result = Arr.map(e => e ** 2);
console.log(result)

// 3. Use filter to return only the numbers greater than 20 from [10, 25, 5, 40].

let Num = [10, 25, 5, 40];
let Ans = Num.filter(e => e > 20);
console.log(Ans)

// 1)Check Item in Array Using includes() and if-else

let fruits = ["apple", "banana", "mango"];
let fruitToCheck = "banana";
if (fruits.includes(fruitToCheck)) {
    console.log(`${fruitToCheck} is available in the array.`);
} else {
    console.log(`${fruitToCheck} is not available in the array.`);
}

// 2)Check if All Numbers Are Positive in array and use if-else also 

let numbers = [1, 2, 3, 43, 6, 7];
let Positive = numbers.every(e => e > 0)
if (Positive) {
    console.log("Positive");
} else {
    console.log("Not")
}

// 3)Check if an Array is Empty Using length and if-else 

let Array = [];
if (Array.length === 0) {
    console.log("Array is empty")
} else {
    console.log("Array is not empty")
}


// 
let a = [1, 2, 3, 43, 67]
let b = a.map(function (e) {
    if (e % 2 === 0) {
        return e * 2
    } else {
        return e * 3
    }
})
console.log(b);

//
let st = ["hello","li"]
let c = st.map( (e)=> {
    if (e.length>=4) {
        return e.toUpperCase()
    } else {
        return e.toLowerCase()
    }
})
console.log(c)