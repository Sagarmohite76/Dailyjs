// *
// **
// ***
// ****
// *****

// Q1
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*"
    }
    console.log(row);

}

// Second way
let row = "";
for (let i = 1; i <= 5; i--) {
    row += "*"
    console.log(row);
}



// *****
// *****
// *****
// *****
// *****

// Q2
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        row += "*"
    }
    console.log(row)
}

// 1
// 12
// 123
// 1234
// 12345
// Q3

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j
    }
    console.log(row);
}

// 1
// 22
// 333
// 4444
// 55555
// Q4

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += i
    }
    console.log(row);
};


// *****
// ****
// ***
// **
// *
// Q5

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 5; j >= i; j--) {
        row += "*"
    }
    console.log(row);

};

//     *
//    ***
//   *****
//  *******
// *********
// Q6

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = i; j <= 5; j++) {
        row += " "
    };

    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*"
    }

    console.log(row);
}

// *********
//  *******
//   *****
//    ***
//     *
// Q7


for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = i; j <= 5; j++) {
        row += " "
    };

    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*"
    };

    console.log(row);
}


// 1
// 2 3
// 4 5 6
// 7 8 9 10
// Q8

let num = 1;
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + num +" ";
        num++;
    }
    console.log(row);
};


// 1
// 01
// 101
// 0101
// 10101
// Q9
let zero = 1;
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row = row + zero;
        zero = (zero == 1) ? 0 : 1;

    };
    console.log(row);
};

// 1.
let num1 = 15;
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = i; j <= 5; j++) {
        row += " ";

    };
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "#"
    }
    console.log(row);

}

//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
// Q10
let size = 4;
for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = i; j <= size; j++) {
        row += " ";

    };
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*"
    };
    console.log(row);

}

for (let i = size - 1; i >= 1; i--) {
    let row = "";
    for (let j = i; j <= size; j++) {
        row += " ";

    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*"
    }
    console.log(row);

};