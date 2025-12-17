let a1 = [2, 4, 6, 8];
let r1 = a1.every(n => n % 2 === 0);
console.log(r1);

let a2 = [10, 20, 30, 40];
let r2 = a2.every(n => n > 5);
console.log(r2);

let a3 = ['apple', 'ant', 'arrow'];
let r3 = a3.every(w => w.startsWith('a'));
console.log(r3);

let a4 = [5, 7, 9, 11];
let r4 = a4.every(n => n % 2 !== 0);
console.log(r4);

let a5 = ['cat', 'bat', 'hat'];
let r5 = a5.every(w => w.length === 3);
console.log(r5);

let a6 = [100, 200, 300];
let r6 = a6.every(n => typeof n === 'number');
console.log(r6);

let a7 = [{age: 20}, {age: 25}, {age: 30}];
let r7 = a7.every(obj => obj.age >= 18);
console.log(r7);

let a8 = [1.5, 2.5, 3.5];
let r8 = a8.every(n => n > 1);
console.log(r8);

let a9 = [[1], [2], [3]];
let r9 = a9.every(arr => Array.isArray(arr));
console.log(r9);

let a10 = ['JS', 'HTML', 'CSS'];
let r10 = a10.every(s => s.length >= 2);
console.log(r10);
