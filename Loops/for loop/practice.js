for (let i = 0; i < 5; i++) {
  console.log(i);
}

let fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

let person = { name: 'Alice', age: 30, job: 'Engineer' };
for (let key in person) {
  console.log(key + ': ' + person[key]);
}

let str = '';
for (let i = 1; i <= 5; i++) {
  str += i;
}
console.log(str);

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
