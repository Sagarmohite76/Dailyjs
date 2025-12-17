// 1.
let numbersArray = [5, 8, 12, 17, 23];
let divisibleBy4 = numbersArray.filter(num => num % 4 === 0);
console.log(divisibleBy4);

// 2.
let cities = ['Mumbai', 'Pune', 'Dharashiv', 'Latur'];
let citiesWithT = cities.filter(city => city.includes('u'));
console.log(citiesWithT);

// 3.
let students = [
  { name: 'Sagar', grade: 100 },
  { name: 'Chaitanya', grade: 100 }
];
let highAchievers = students.filter(student => student.grade > 80);
console.log(highAchievers);

// 4.
let temperatures = [15, 23, 30, 28, 18];
let hotDays = temperatures.filter(temp => temp > 25);
console.log(hotDays);

// 5.
let animals = ['lion', 'tiger', 'elephant', 'giraffe'];
let animalsWithN = animals.filter(animal => animal.includes('n'));
console.log(animalsWithN);

// 6.
let ages = [18, 22, 29, 35, 45];
let youngAdults = ages.filter(age => age < 30);
console.log(youngAdults);

// 7.
let books = [
  { title: 'JavaScript Basics', author: 'John Doe' },
  { title: 'Advanced JavaScript', author: 'Jane Smith' },
  { title: 'Learning Python', author: 'Sam Green' }
];
let jsBooks = books.filter(book => book.title.toLowerCase().includes('javascript'));
console.log(jsBooks);

// 8.
let prices = [120, 50, 200, 30, 75];
let affordablePrices = prices.filter(price => price <= 100);
console.log(affordablePrices);

// 9.
let products = ['laptop', 'mouse', 'keyboard', 'monitor'];
let productsWithO = products.filter(product => product.includes('o'));
console.log(productsWithO);

// 10.
let scores = [99, 67, 82, 55, 40];
let passingScores = scores.filter(score => score >= 60);
console.log(passingScores);
