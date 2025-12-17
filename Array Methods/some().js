let s1 = [1, 2, 3, 4];
let r1 = s1.some(n => n > 3);
console.log(r1);

let s2 = ['apple', 'banana', 'cherry'];
let r2 = s2.some(f => f.startsWith('b'));
console.log(r2);

let s3 = [true, false, true];
let r3 = s3.some(v => v === false);
console.log(r3);


let s4 = [10.5, 20.5, 30.5];
let r4 = s4.some(n => n < 15);
console.log(r4);

let s5 = [{age:20}, {age:25}, {age:30}];
let r5 = s5.some(obj => obj.age > 25);
console.log(r5);

let s6 = [null, undefined, 'x'];
let r6 = s6.some(v => v === null);
console.log(r6);

let s7 = [[1,2], [3,4], [5,6]];
let r7 = s7.some(arr => arr.includes(4));
console.log(r7);

let s8 = ['red', 42, true];
let r8 = s8.some(v => typeof v === 'number');
console.log(r8);

let s9 = [false, false, false];
let r9 = s9.some(v => v === true);
console.log(r9);

let s10 = ['cat', 'dog', 'bird'];
let r10 = s10.some(a => a.length > 3);
console.log(r10);
