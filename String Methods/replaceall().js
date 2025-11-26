let sentence1 = "apple, banana, apple, cherry";
console.log(sentence1.replaceAll("apple", "orange"));  // Output: "orange, banana, orange, cherry"

let sentence2 = "I love JavaScript. JavaScript is awesome!";
console.log(sentence2.replaceAll("JavaScript", "Python"));  // Output: "I love Python. Python is awesome!"

let sentence3 = "The quick brown fox jumps over the lazy fox.";
console.log(sentence3.replaceAll("fox", "dog"));  // Output: "The quick brown dog jumps over the lazy dog."

let sentence4 = "Welcome to the world. The world is beautiful.";
console.log(sentence4.replaceAll("world", "universe"));  // Output: "Welcome to the universe. The universe is beautiful."

let sentence5 = "The moon, the stars, the sky.";
console.log(sentence5.replaceAll("the", "a"));  // Output: "A moon, a stars, a sky."
