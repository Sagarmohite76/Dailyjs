let date = new Date();
console.log(`Today's date :${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
// First day
let firstDay = new Date(year, month, 1).getDay(); 
console.log(firstDay);
// last day
let lastDay = new Date(year, month, 31).getDay(); 
console.log(lastDay);

// Days in month
let lastDate = new Date(year,month+1, 0).getDate(); // last date of month
console.log(lastDate);





