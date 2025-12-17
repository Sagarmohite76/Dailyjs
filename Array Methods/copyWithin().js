let arr1 = [1, 2, 3, 4, 5];
;
console.log(arr1.copyWithin(0, 3));

let arr2 = ['apple', 'banana', 'cherry', 'date'];
arr2.copyWithin(1, 2, 4);
console.log(arr2);

let arr3 = [true, false, true, false];
arr3.copyWithin(2, 0, 2);
console.log(arr3);

let arr4 = [10.5, 20.5, 30.5, 40.5];
arr4.copyWithin(1, 3);
console.log(arr4);

let arr5 = [null, undefined, 'x', 'y'];
arr5.copyWithin(0, 1, 3);
console.log(arr5);

let arr6 = [{a:1}, {b:2}, {c:3}];
arr6.copyWithin(1, 0, 2);
console.log(arr6);

let arr7 = [[1,2], [3,4], [5,6]];
arr7.copyWithin(0, 2, 3);
console.log(arr7);

let arr8 = ['red', true, 42, null];
arr8.copyWithin(1, 2, 4);
console.log(arr8);

let arr9 = [false, 'hello', 3.14, undefined];
arr9.copyWithin(0, 1, 3);
console.log(arr9);

let arr10 = ['start', ['nested'], {key:'value'}, 99];
arr10.copyWithin(1, 2, 4);
console.log(arr10);
