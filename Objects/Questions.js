// 1.Create an object student with name, age, and marks. Print all values
let student = {
    name: "Sagar",
    age: 18,
    marks: "100%"
};
console.log(`Values : ${student.name}, ${student.age}, ${student.marks}`);

// 2.Add a new property grade to an existing object.
student.grade = "Grade A";
console.log(student);

// 3.Update the age property of an object.
student.age = 19;
console.log(student);

// 4.Delete the marks property from an object
delete student.marks;
console.log(student);

// 5.Access object values using bracket notation
console.log(student["age"]);



// 6.Check if a property exists in an object

let property = "age";
console.log(property in student);


// if (student[property]) {
//     console.log("It exist");
// } else {
//     console.log("Not");

// };

