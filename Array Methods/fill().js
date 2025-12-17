let a1 = [1, 2, 3, 4, 5];
console.log(a1.fill(0));

let a2 = ['a', 'b', 'c', 'd'];
console.log(a2.fill('x', 1, 3));

let a3 = [true, false, true];
a3.fill(false);
console.log(a3);

let a4 = [10.5, 20.5, 30.5];
a4.fill(0, 1);
console.log(a4);

let a5 = ['apple', 'banana', 'cherry'];
a5.fill('fruit', 0, 2);
console.log(a5);

let a6 = [null, null, null];
a6.fill(1);
console.log(a6);

let a7 = [5, 10, 15, 20];
a7.fill(99, 2);
console.log(a7);

let a8 = ['x', 'y', 'z'];
a8.fill('filled', 1, 2);
console.log(a8);

let a9 = [true, true, false, false];
a9.fill(true, 2, 4);
console.log(a9);

let a10 = [100, 200, 300];
a10.fill(0, 0, 1);
console.log(a10);
