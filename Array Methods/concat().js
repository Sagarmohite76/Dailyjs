// 1.
let a1 = [1, 2, 3];
let b1 = [4, 5];
let r1 = a1.concat(b1);
console.log(r1);

// 2.
let a2 = ['apple', 'banana'];
let b2 = ['cherry', 'mango'];
let r2 = a2.concat(b2,b1);
console.log(r2);

// 3.
let a3 = [];
let b3 = [10, 20, 30];
let r3 = a3.concat(b3);
console.log(r3);

// 4.
let a4 = ["hello"];
let b4 = ["world", "!"];
let r4 = a4.concat(b4);
console.log(r4);

// 5.
let a5 = ['a', 'b'];
let b5 = ['c', 'd', 'e'];
let r5 = a5.concat(b5,b4);
console.log(r5);

// 6.
let a6 = [true, false];
let b6 = [true];
let r6 = a6.concat(b6);
console.log(r6);

// 7.
let a7 = ['x'];
let b7 = ['y', 'z'];
let r7 = a7.concat(b7);
console.log(r7);

// 8.
let a8 = [1, 2];
let b8 = [3, 4, 5, 6];
let r8 = a8.concat(b8);
console.log(r8);

// 9.
let a9 = ['one', 'two'];
let b9 = ['three', 'four'];
let r9 = a9.concat(b9);
console.log(r9);

// 10.
let a10 = [null, 100];
let b10 = ['test', undefined];
let r10 = b10.concat(b10);
console.log(r10);
