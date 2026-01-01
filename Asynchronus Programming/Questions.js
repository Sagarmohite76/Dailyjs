// Print the message “Task completed” after 3 seconds using setTimeout.
setTimeout(() => {
    console.log('Task completed');

}, 3000)

// Stop printing "Processing..." after 3 seconds  using  setInterval.
let timer = setInterval(() => {
    console.log("Processing...");
}, 1000);

setTimeout(() => {
    clearInterval(timer);
    console.log("Stopped");
}, 3000);


// Print numbers 1, 2, 3 with a gap of 1 second between each number using setTimeout..

setTimeout(() => {
    console.log(1);
}, 1000)

setTimeout(() => {
    console.log(2);
}, 2000)

setTimeout(() => {
    console.log(3);
}, 3000)


//
for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
        console.log(i);

    }, i * 1000)
}


// Add two numbers after 2 seconds and print the result using setTimeout.
function add(a, b) {
    console.log(a + b);

}
setTimeout(() => {
    add(5, 5)
}, 2000);


// 🟢 LEVEL 1 – EASY (Basics of Timing)

// 1. Print "Hello JavaScript" after 2 seconds using setTimeout.
setTimeout(() => {
    console.log("Hello javascript");

}, 2000)


// 2. Print "Welcome User" after 1 second using setTimeout.
setTimeout(() => {
    console.log("Welcome User");

}, 1000)

// 3. Print "Loading..." every 1 second using setInterval.
setInterval(() => {
    console.log("Loading");

}, 1000)


// 4. Stop printing "Loading..." after 5 seconds.
let time = setInterval(() => {
    console.log("Loading");

}, 1000);

setTimeout(() => {
    clearTimeout(time)
}, 5000)


// 5. Print the number 10 after 3 seconds using setTimeout.
setTimeout(() => {
    console.log(10);

}, 3000)



// 6. Print "Done" after 4 seconds.
setTimeout(() => {
    console.log("Done");

}, 4000)


// 🟡 LEVEL 2 – MEDIUM (Control & Logic)

// 1. Print numbers 1 to 5, each after 1 second gap, using setTimeout.
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);

    }, i * 1000)
}


// 2. Print "Processing..." every 1 second and stop it after 4 seconds.
let timing = setInterval(() => {
    console.log("Processing...");

}, 1000)
setTimeout(() => {
    clearTimeout(timing)
}, 4000)



// 3. Add two numbers (5 + 7) after 2 seconds and print the result.
function add3(a, b) {
    console.log(a + b);

}
setTimeout(() => {
    add3(5, 7)
}, 2000)

// 4. Print "Start", then after 2 seconds print "Middle", and after 4 seconds print "End".

// for (let i = 0; i <= 4; i += 2) {
//     setTimeout(() => {
//         console.log("Start");

//     }, i * 1000)
// }

let arr = ["Start", "Middle", "End"]
for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
        console.log(arr[i]);

    }, (i + 2) * 1000)
}


// 5. Print even numbers from 2 to 10 with a 1-second delay between each number.
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        setTimeout(() => {
            console.log(i);

        }, i * 1000)
    }
}


// 6. Print "Timeout Finished" only once after 6 seconds.
setTimeout(() => {
    console.log("Timeout Finished");

}, 6000)



// 🔴 LEVEL 3 – HARD (Advanced Thinking)

// 1. Print numbers 1 to 10 using setInterval, then stop printing after number 10.
let i = 1;

let intervalId = setInterval(() => {
    console.log(i);

    if (i === 10) {
        clearInterval(intervalId);
    }

    i++;
}, 1000);



// 2. Print "Timer running..." every second and stop it automatically after 5 seconds.

let timing2 = setInterval(() => {
    console.log("Timer running...");

}, 1000);
setTimeout(() => {
    clearTimeout(timing2)
}, 5000)


// 3. Print numbers 5, 4, 3, 2, 1 with 1-second delay, then print "Go!".
let b = 5;
let timing3 = setInterval(() => {
    if (b == 0) {
        console.log('Go!');
        clearInterval(timing3);
    } else {
        console.log(b);
        b--

    }
}, 1000)


// 4. Add two numbers entered in variables after 3 seconds and display the result.
let m = 20;
let n = 20;
setTimeout(() => {
    console.log(m + n);

}, 3000)

// 5. Print "Task 1", "Task 2", "Task 3" each after 1 second gap using nested setTimeout.
setTimeout(() => {
    console.log("Task 1");
    setTimeout(() => {
        console.log("Task 2");
        setTimeout(() => {
            console.log("Task 3");

        }, 1000)
    }, 1000)

}, 1000)

// 6. Print numbers from 1 to 5, but stop automatically if number becomes 3.


for (let i = 5; i >= 0; i--) {
    setTimeout(() => {
        if (i == 0) {
            console.log("Time up");

        } else {
            console.log(i);

        }

    }, (5 - i) * 1000)
}




// Using setTimeout, print "Welcome to JavaScript" after 3 seconds.
setTimeout(() => {
    console.log("Welcome to JavaScript");

}, 2000)
// Create a function that adds two numbers and call it after 2 seconds using setTimeout.
function add4(a, b) {
    console.log(a + b);

}
setTimeout(() => {
    add4(5, 10)
}, 2000)

// Using setInterval, print "Loading..." every 1 second.
setInterval(() => {
    console.log("Loading...");

}, 1000)

// Using setInterval, print numbers from 1 to 10 and stop the interval after printing 10.
let x = 1;
let timing5 = setInterval(() => {
    if (x > 10) {
        clearTimeout(timing5);
    } else {
        console.log(x);
        x++
    }
}, 1000)

// Start a setInterval and stop it after 6 seconds using clearInterval.
let timer1 = setInterval(() => {
    console.log("Stop");

}, 1000)
setTimeout(() => {
    clearInterval(timer1)
}, 6000);


// 1) Print the message "Start" immediately and "End" after 2 seconds using setTimeout.
setTimeout(() => {
    console.log("Start");
    setTimeout(() => {
        console.log("End");

    }, 2000)
}, 0)


// 2)Print "Processing..." every 1 second using setInterval. After 3 seconds, stop the interval and print "Done".
let timer2 = setInterval(() => {
    console.log("Processing...");


}, 1000)
setTimeout(() => {
    clearTimeout(timer2);
    console.log("Done");

}, 3000);

 
// 2nd way
let y = 1;
let timer3 = setInterval(() => {
    if (y == 3) {

        console.log("Done");
        clearInterval(timer3)
    } else {
        console.log("Processing...");

    }
    y++;
}, 1000)




// 3) Using setTimeout, print numbers 1 to 5, each after 1 second gap (1, 2, 3, 4, 5).
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);

    }, i * 1000)
}

let p = 1;
let s = setInterval(() => {
    console.log(p);
    if (p > 5) {
        clearInterval(s)
        console.log("stop");

    }
    p++

}, 1000);


// Everyone solve this problem
