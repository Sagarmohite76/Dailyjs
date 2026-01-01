function add(a, b, fn) {
    console.log(a + b);
    fn()

}
function call() {
    console.log("Addition");

}
add(2, 3, call);

// Even and odd
function even(n, fn) {
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            setTimeout(() => {
                console.log(i);

            }, 1000)
        }
    }
    fn(n);
}
function odd(n) {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 != 0) {
            setTimeout(() => {
                console.log(i);

            }, 1000)
        }
    }
}
even(10, odd)

function Even(n, fn) {
    if (n % 2 == 0) {
        console.log("Even");

    }
    fn(n)
}
function Odd(n) {
    if (n % 2 != 0) {
        console.log("ODD");

    }

}
Even(3, Odd);


function orderFood(callback) {
    console.log("Food is being prepared...");

    setTimeout(() => {
        callback();
    }, 3000);
}

function foodReady() {
    console.log("Food is ready! ");
}

orderFood(foodReady);
