let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let n = 1;
while (n <= 20) {
    if (n % 2 === 0) {
        console.log(n);
    }
    n++;
}

let num = 10;
let sum = 0;
let x = 1;
while (x <= num) {
    sum += x;
    x++;
}
console.log("Sum =", sum);

let number = 12345;
let reversed = 0;
while (number > 0) {
    let digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
}
console.log("Reversed =", reversed);

let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}

let str = "Hello";
let index = 0;
while (index < str.length) {
    console.log(str[index]);
    index++;
}

let value = 2;
while (value <= 1000) {
    console.log(value);
    value *= 2;
}

let correctPassword = "12345";
let input = "";
while (input !== correctPassword) {
    input = prompt("Enter password:");
}
console.log("Access Granted!");

let num2 = 987654;
let countDigits = 0;
while (num2 > 0) {
    num2 = Math.floor(num2 / 10);
    countDigits++;
}
console.log("Digits:", countDigits);

let n2 = 5;
let fact = 1;
while (n2 > 0) {
    fact *= n2;
    n2--;
}
console.log("Factorial =", fact);

let pass="Sagar123"
let istrue=true;
for(let i=0;i<pass.length;i++){
    if(pass.includes(pass[i].toUpperCase()) && pass.length==8 && pass.includes(parseInt(pass[i]))){
        istrue=true
        
    }else{
        istrue=false
        
    }
}
if(istrue){
    console.log("ok");
    
}else{
    console.log("Not ok");
    
}

