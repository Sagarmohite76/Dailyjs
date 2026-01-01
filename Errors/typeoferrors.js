// 1.Syntax Error
// console.log("Hello"

// 2.Runtime Error
let x = 10;
// x.toUpperCase();

// 3.Reference Error
// console.log(a); // a is not defined

// 4.Type Error
let num = 5;
// num();

// 5.Range Error

let arr1 = new Array(5);
console.log(arr1);


try {
    let arr2 = [1, 2, 3];
    arr2.length = -2;
} catch (error) {
    console.log("Error caught:", error.message);
    console.log("Error name:",error.name);
    
} finally {
    console.log("Finally block executed");
}


// 6.Logical Error
let a = 10;
let b = 20;
console.log(a > b);

// Find the sum
let sum = a - b;  // ❌ Logical error: should be a + b
console.log("Sum:", sum);


try {
    console.log(y);
} catch (err) {
    console.log(err.name);    // ReferenceError
    console.log(err.message); // y is not defined
    console.log(err.stack);   // Stack trace
}

