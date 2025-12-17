let sentence1 = "Learning JavaScript is fun";
console.log(sentence1.split(" "));

let sentence2 = "2025-11-27";
console.log(sentence2.split("-"));

let sentence3 = "apple,banana,cherry,dates";
console.log(sentence3.split(","));

let sentence4 = "name:John,age:30,city:New York";
console.log(sentence4.split(":"));

let sentence5 = "apple, orange banana, grape";
console.log(sentence5.split(/[\s,]+/));
