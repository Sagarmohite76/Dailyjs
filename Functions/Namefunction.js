function cube(n) {
    return n ** 3;
}
console.log(cube(2));


function prime(numtocheck) {
    for (let i = 2; i < numtocheck; i++) {
        if (numtocheck % i == 0) {
            return "Not prime"
        }
    }
    if (numtocheck < 2) {
        return "Not prime"
    } else {
        return "Prime"
    }
}
console.log(prime(10));

// Factorial 
function factoria(n) {
    if (n < 0) {
        return 'Factorial of negative number is not defined ';
    } else if (n == 0) {
        return `Factorial of ${n} is 1`;
    }
    let factor = 1
    for (let i = 1; i <= n; i++) {
        factor *= i
    }
    console.log(factor)
}
factoria(5);


function add(a, b) {
    console.log(a + b);

}
add(2, 2);

function calcuate(a, b, c) {
    switch (c) {
        case "+":
            return `Addition of ${a} and ${b} is ${a + b}.`;


        case "-":
            return `Subtraction of ${a} and ${b} is ${a - b}.`;


        case "*":
            return `Multilication of ${a} and ${b} is ${a * b}.`;


        case "/":
            return `Division of ${a} by ${b} is ${a / b}.`;


    }
}
console.log(calcuate(2, 2, "+"));

function evenorOdd(n) {
    if (n % 2 === 0) {
        console.log(`${n} is a Even number.`);
    } else {
        console.log(`${n} is a Odd number.`);
    }
};
evenorOdd(2);