let students = [
    { name: "Sagar", age: 19, Marks: 100 },
    { name: "Ram", age: 19, Marks: 100 },
    { name: "Sita", age: 19, Marks: 100 },
    { name: "Krishna", age: 19, Marks: 100 },
    { name: "Pra", age: 19, Marks: 100 },
    { name: "Ritesh", age: 19, Marks: 100 }

];
console.log(students[2]["name"]);

// Print key:value pair in object
console.log({ name: students[2].name });

// Delete 
delete students[2]["name"];
console.log(students[2]);

// Add key:value pair to object :
students[2].grade = "A";
console.log(students[2]);

// To change the value of key in object :
students[2].Marks = 90;
console.log(students[2]);

// To access the key in the object :
console.log((Object.keys(students[2])[2]).toString());

// To change the key in the object:
// First way
students[2].Age = students[2].age;
delete students[2].age;
console.log(students[2]);
// Second way
let rename = Object.keys(students[0])[0];
students[0].Name = students[0][rename];
delete students[0].name;
console.log(students[0]);

// To print key values pair 
// to get all
console.log((Object.entries(students[0])).toString());
// to get specific
console.log((Object.entries(students[0])[2]).toString());

if (students[4].name.length <= 5) {
    console.log(`Length of the name key in 1st object in student array is less than 5 i.e ${students[4]["name"].length}<=5`);

} else {
    console.log("Not");

}


//
// console.log(students[2].grade);



// Prototype
// function Info(name,age,Marks){
//   this.name=name;
//   this.Marks=Marks;
//   this.age=age;
// };

// let ob=[
//     new Info("Sagar",19,100),
//     new Info("Ram",19,100)
// ]
// console.log(ob);

// Example 1: Students with Details
const Students1 = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 22, grade: "B" },
  { name: "Charlie", age: 23, grade: "A+" }
];
console.log("1. Students:", Studentstudents1);

// Example 2: Books with Authors and Pages
const books = [
  { title: "1984", author: "George Orwell", pages: 328 },
  { title: "Brave New World", author: "Aldous Huxley", pages: 288 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 }
];
console.log("2. Books:", books);

// Example 3: Products with Prices and Categories
const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Coffee Maker", price: 30, category: "Home Appliances" }
];
console.log("3. Products:", products);

// Example 4: Movies with Directors and Ratings
const movies = [
  { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
  { title: "The Dark Knight", director: "Christopher Nolan", rating: 9.0 },
  { title: "Titanic", director: "James Cameron", rating: 7.8 }
];
console.log("4. Movies:", movies);

// Example 5: Employees with Positions and Salaries
const employees = [
  { name: "John", position: "Manager", salary: 5000 },
  { name: "Sara", position: "Developer", salary: 4000 },
  { name: "Mike", position: "Designer", salary: 3500 }
];
console.log("5. Employees:", employees);

// Example 6: Cars with Models and Years
const cars = [
  { model: "Tesla Model S", year: 2022 },
  { model: "Ford Mustang", year: 2020 },
  { model: "Toyota Corolla", year: 2021 }
];
console.log("6. Cars:", cars);

// Example 7: Cities with Population and Country
const cities = [
  { name: "New York", population: 8419600, country: "USA" },
  { name: "Tokyo", population: 13929286, country: "Japan" },
  { name: "Paris", population: 2148327, country: "France" }
];
console.log("7. Cities:", cities);

// Example 8: Players with Teams and Stats
const players = [
  { name: "LeBron James", team: "Lakers", points: 27.0 },
  { name: "Stephen Curry", team: "Warriors", points: 30.0 },
  { name: "Kevin Durant", team: "Nets", points: 29.0 }
];
console.log("8. Players:", players);

// Example 9: Movies with Genres and Release Dates
const movieDetails = [
  { title: "The Matrix", genre: "Sci-Fi", releaseDate: "1999-03-31" },
  { title: "Avatar", genre: "Action", releaseDate: "2009-12-18" },
  { title: "The Godfather", genre: "Crime", releaseDate: "1972-03-24" }
];
console.log("9. Movie Details:", movieDetails);

// Example 10: Countries with Capitals and Continents
const countries = [
  { name: "Canada", capital: "Ottawa", continent: "North America" },
  { name: "India", capital: "New Delhi", continent: "Asia" },
  { name: "Germany", capital: "Berlin", continent: "Europe" }
];
console.log("10. Countries:", countries);
