// 1.
let arr1 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let result1 = arr1.find(item => item.length === 5);
console.log(result1);

// 2.
let arr2 = [false, true, false, true];
let result2 = arr2.find(item => item === true);
console.log(result2);

// 3.
let arr3 = [10.5, 20.75, 30.0, 40.25];
let result3 = arr3.find(item => item > 25);
console.log(result3);

// 4.
let arr4 = ['dog', 'cat', 'elephant', 'rabbit'];
let result4 = arr4.find(item => item.endsWith('t'));
console.log(result4);

// 5.
let arr5 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
let result5 = arr5.find(item => item.id === 2);
console.log(result5);

// 6.
let arr6 = [null, undefined, 0, false, 'hello'];
let result6 = arr6.find(item => item === 'hello');
console.log(result6);

// 7.
let arr7 = [3.14, 1.41, 2.71, 1.73];
let result7 = arr7.find(item => item > 2);
console.log(result7);

// 8.
let arr8 = [NaN, 1, 2, 3];
let result8 = arr8.find(item => !isNaN(item));
console.log(result8);

// 9.
let arr9 = ['red', 'green', 'blue', 'yellow'];
let result9 = arr9.find(item => item.length === 4);
console.log(result9);

// 10.

let arr10 = [{ name: 'John', age: 28 }, { name: 'Sara', age: 22 }];
let result10 = arr10.find(item => item.age < 25);
console.log(result10);
