// 1.
let arr = [1, 2, 3, 4, 5];
let result = arr.map((e) => {
    if (e % 2 === 0) {
        return e * 2
    } else {
        return e * 5
    }
});
console.log(result)

// 2.
let price = 20000;
switch (true) {
    case (price >= 10000):
        console.log("Discounted price ", price * 0.20);
        break;

    case (price >= 10000):
        console.log("Discounted price ", price * 0.10);
        break;

    case (price >= 10000):
        console.log("Discounted price ", price);
        break;

    default:
        console.log("Enter correct price")

};

// 3.
let num = [1, 2, 3, 4, 5];
let result1 = num.reduce((acc, e) => {
    acc + e, 0
});
console.log(result1);

// 4.
let array = [1, [2, [3, 4]], 5];
let flattenarray = array.flat(2);
console.log(flattenarray);

// 5.
let a = 34;
let b = 45;
let c = "+";

switch (c) {
    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;


    case "*":
        console.log(a * b);
        break;


    case "/":
        console.log(a / b);
        break;

    default:
        console.log("Not a Airthmatic operator")
};

// 6.
let Num = 150;
let range = (Num >= 100 && Num <= 200) ? "In range 100-200" : "Not in range";
console.log(range)