let f1 = [1, [2, 3], 4];
let g1 = f1.flat();
console.log(g1);

let f2 = [[1, 2], [3, 4], [5, 6]];
let g2 = f2.flat();
console.log(g2);

let f3 = [1, [2, [3, [4]]]];
let g3 = f3.flat(2);
console.log(g3);

let f4 = [[['a']], [['b']], [['c']]];
let g4 = f4.flat(2);
console.log(g4);

let f5 = [true, [false, true], [false]];
let g5 = f5.flat();
console.log(g5);

let f6 = ['apple', ['banana', 'cherry'], 'date'];
let g6 = f6.flat();
console.log(g6);

let f7 = [[10.1, 20.2], [30.3, 40.4]];
let g7 = f7.flat();
console.log(g7);

let f8 = [[['x']], [['y']], [['z']]];
let g8 = f8.flat(3);
console.log(g8);

let f9 = [[1], [2, [3, [4, 5]]], [6]];
let g9 = f9.flat(3);
console.log(g9);

let f10 = [[{a:1}], [{b:2}], [{c:3}]];
let g10 = f10.flat();
console.log(g10);
