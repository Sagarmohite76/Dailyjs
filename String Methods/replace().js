let sentence1 = "Hello, world!";
console.log(sentence1.replace("world", "JavaScript"));  // Output: "Hello, JavaScript!"

let sentence2 = "I love JavaScript!";
console.log(sentence2.replace("love", "enjoy"));  // Output: "I enjoy JavaScript!"

let sentence3 = "The quick brown fox.";
console.log(sentence3.replace("quick", "lazy"));  // Output: "The lazy brown fox."

let sentence4 = "My name is John. John is my name.";
console.log(sentence4.replace("John", "Alice"));  // Output: "My name is Alice. John is my name."

let sentence5 = "apple, banana, apple, cherry";
console.log(sentence5.replace(/apple/g, "orange"));  // Output: "orange, banana, orange, cherry"
