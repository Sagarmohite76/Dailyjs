let numbers = [10, 20, 30, 40, 50];
console.log(numbers.at(0));
console.log(numbers.at(2));

let numbers2 = [10, 20, 30, 40, 50];
console.log(numbers2.at(-1));
console.log(numbers2.at(-2));

let numbers3 = [10, 20, 30, 40, 50];
console.log(numbers3.at(10));
console.log(numbers3.at(-6));

let str = "Hello, World!";
console.log(str.at(-1));
console.log(str.at(-2));

let colors = ['red', 'green', 'blue'];
let lastColor = colors.at(-1);
console.log(lastColor);

let numbers1 = [1, 2, 3, 4, 5];
for (let i = -1; i >= -numbers1.length; i--) {
  console.log(numbers.at(i));
}

let arr = [10, 20, 30];
console.log(arr.at(-3));
