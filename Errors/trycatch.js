try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
} finally {
    // Code that always runs
}

try {
    console.log(y);

} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (err) {
    console.log("Error caught:", err.message);
}


function checkAge(age) {
    if (age < 18) {
        throw "You must be 18 or older";
    }
    return "Access granted";
}

try {
    console.log(checkAge(16));
} catch (err) {
    console.log("Error caught:", err);
}


