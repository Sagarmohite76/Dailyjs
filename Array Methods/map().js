let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled);

let fruits = ['apple', 'banana', 'cherry'];
let uppercasedFruits = fruits.map(fruit => fruit.split(""));
console.log(  );

let people = [
    { name: 'Sagar', age: 19 },
    { name: '', age: 19 },
    { name: 'Chaitanya', age: 19 },
    { name: '', age: 19 }

];
let names = people.map(person => person.name);
console.log(names);

let ages = [20, 25, 30];
let updatedAges = ages.map(age => age + 10);
console.log(updatedAges);

let numbers2 = [1, 2, 3, 4];
let squared = numbers2.map(num => num ** 2);
console.log(squared);

let words = ['hello', 'world', 'JavaScript'];
let lengths = words.map(word => word.length);
console.log(lengths);

let celsius = [0, 20, 30];
let fahrenheit = celsius.map(temp => temp * 9 / 5 + 32);
console.log(fahrenheit);

let numbers3 = [1, 2, 3, 4];
let incremented = numbers3.map(num => num + 1);
console.log(incremented);

let dates = [2, 33, 45];
let dateStrings = dates.map(e => e**3);
console.log(dateStrings);

let items = ['apple', 'banana', 'cherry'];
let titledItems = items.map(item => `Fruit: ${item}`);
console.log(titledItems);
