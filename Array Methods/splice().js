// 1
let s1 = [1, 2, 3, 4];
let r1 = s1.splice(2, 1, 99);
console.log(s1);

// 2
let s2 = ['apple', 'banana', 'cherry'];
let r2 = s2.splice(1, 1);
console.log(s2);

// 3
let s3 = [10, 20, 30, 40];
let r3 = s3.splice(1, 2, 200, 300);
console.log(s3);

// 4
let s4 = ['a', 'b', 'c', 'd', 'e'];
let r4 = s4.splice(2, 3);
console.log(s4);

// 5
let s5 = [5, 6, 7];
let r5 = s5.splice(0, 0, 1, 2, 3, 4);
console.log(s5);

// 6
let s6 = [100, 200, 300];
let r6 = s6.splice(2, 1);
console.log(s6);

// 7
let s7 = ['x', 'y', 'z'];
let r7 = s7.splice(1, 0, 'NEW');
console.log(s7);

// 8
let s8 = ['one', 'three'];
let r8 = s8.splice(1, 0, 'two');
console.log(s8);

// 9
let s9 = [10, 20, 30, 40];
let r9 = s9.splice(1, 2, 200);
console.log(s9);

// 10
let s10 = ['red', 'green', 'blue', 'yellow'];
let r10 = s10.splice(0, 2);
console.log(s10);
