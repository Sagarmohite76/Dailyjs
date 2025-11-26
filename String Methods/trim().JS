let sentence1 = "   Hello there!   ";
console.log(sentence1.trim());  // Output: "Hello there!"

let sentence2 = "   This  is  a  test.   ";
console.log(sentence2.trimStart());  // Output: "This  is  a  test.   "

let sentence3 = "\tWow! That's amazing.\n";
console.log(sentence3.trimEnd());  // Output: "\tWow! That's amazing."

let sentence4 = "    ";
console.log(sentence4.trimStart());  // Output: ""

let sentence5 = "\nHello\nWorld!\n";
console.log(sentence5.trimEnd());  // Output: "\nHello\nWorld!"


