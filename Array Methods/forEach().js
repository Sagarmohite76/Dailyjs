// 1.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.forEach(Sagar => console.log(Sagar * 2));

// 2.
let Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Num.forEach(function (element) {
    console.log(element ** 3)
})

// 3.
let value = [1, 2, 3, 4, 5, 6, 7, 8, 9];
value.forEach(function (element) {
    if (element % 2 == 0) { console.log(`${element} is even number`) }
    else {
        console.log(`${element} is odd number `)
    }
})

// 4.
let val = ["hello", 3, 4, 56, "World", 10, true, false];
val.forEach(function (element) {
    if (typeof element == "string") {
        console.log("String")
    } else if (element == true || element == false) {
        console.log("Boolean")
    }
    else if (element == Number(element)) {
        console.log("Number")
    } else {
        console.log("Other data type")
    }
})

// 5.
let numbers = [3, 6, 9, 12];
numbers.forEach(num => console.log(num + 2));

// 6.
let colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color.toLowerCase()));

// 7.
let mixArray = [10, 'apple', true, { name: 'Don' }];
mixArray.forEach(item => console.log(typeof item));

// 8.
let fruits = ['orange', 'kiwi', 'mango'];
fruits.forEach((fruit, index) => console.log(`Fruit at index ${index}: ${fruit}`));

// 9.
let prices = [49.99, 25.75, 99.99];
prices.forEach(price => {
  let discountPrice = price * 0.9;
  console.log(`Discounted price: $${discountPrice}`);
});

// 10.
let bools = [true, false, true, false];
bools.forEach((bool, idx) => {
  if (bool) console.log(`True value at index ${idx}`);
});
