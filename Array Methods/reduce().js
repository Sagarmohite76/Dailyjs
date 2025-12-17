let numbers = [1, 2, 3, 4, 5];
let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total); 

let numbers1 = [1, 2, 3, 4, 5];
let multiplication = numbers1.reduce((acc, curr) => acc * curr, 1);
console.log(multiplication);

let values = [12, 5, 8, 130, 44];
let highest = values.reduce((acc, curr) => (curr > acc ? curr : acc), values[0]);
console.log(highest);

let arrays = [[1, 2], [3, 4], [5, 6]];
let merged = arrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(merged);

let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
let occurrences = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(occurrences);

let texts = ['Hello', ' ', 'World', '!'];
let result = texts.reduce((acc, curr) => acc + curr, '');
console.log(result);

let costs = [49.99, 25.75, 99.99];
let subtotal = costs.reduce((acc, curr) => acc + curr, 0);
let finalPrice = subtotal * 1.1;
console.log(finalPrice);

let products = [
  { name: 'apple', category: 'fruit' },
  { name: 'banana', category: 'fruit' },
  { name: 'carrot', category: 'vegetable' },
  { name: 'broccoli', category: 'vegetable' }
];
let categorized = products.reduce((acc, curr) => {
  if (!acc[curr.category]) {
    acc[curr.category] = [];
  }
  acc[curr.category].push(curr);
  return acc;
}, {});
console.log(categorized);

let items = [{ id: 1, name: 'apple' }, { id: 2, name: 'banana' }];
let objectified = items.reduce((acc, curr) => {
  acc[curr.id] = curr.name;
  return acc;
}, {});
console.log(objectified);

let list = [1, 2, 2, 3, 4, 4, 5];
let uniqueItems = list.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(uniqueItems);
