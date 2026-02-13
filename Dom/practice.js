let result = document.getElementById("result");

function add() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    result.textContent = `Result: ${a + b}`
}


function sub() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    result.textContent = `Result: ${a - b}`
}

function mul() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    result.textContent = `Result: ${a * b}`
}

function div() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    result.textContent = `Result: ${a / b}`
}