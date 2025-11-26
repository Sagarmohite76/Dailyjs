// logical operators
// 1. And (&&)
let a = 5;
let b = 10;
console.log(a > 0 && b > 5); // true

let c = 3;
let d = 7;
console.log(c > 2 && d < 10); // true

let e = 10;
let f = 10;
console.log(e === 10 && f === 10); // true

let str1 = "Hello";
let str2 = "World";
console.log(str1.length > 3 && str2.length > 3); // true

let g = -5;
let h = -10;
console.log(g < 0 && h < 0); // true

// 2.OR (||)
let x = 8;
let y = 3;
console.log(x > 5 || y > 5); // true

let m = 6;
let n = 12;
console.log(m < 5 || n > 10); // true

let p = 15;
let q = 25;
console.log(p === 15 || q !== 30); // true

let word1 = "Apple";
let word2 = "Banana";
console.log(word1.length < 6 || word2.length > 5); // true

let i = -10;
let j = 15;
console.log(i < 0 || j >= 10); // true

// 3. ! (not)
let m1 = 23;
let m2 = 56;
let m3 = m1 < m2;
console.log(!(m2 > m1));


let isActive = true;
console.log(!isActive); // false

let isCompleted = false;
console.log(!isCompleted); // true

let hasPermission = true;
console.log(!hasPermission); // false

let isOpen = false;
console.log(!isOpen); // true

let isUserLoggedIn = false;
console.log(!isUserLoggedIn); // true
