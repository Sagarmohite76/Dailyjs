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



// 1.Write a JavaScript program that iterates over an object using a for...in loop and removes all properties whose values are null, undefined, or an empty string.

let ob={
    null:null,
    undefined:undefined,
    name:"Sagar",
    age:""
}
for(let key in ob){
    if(ob[key]===null || ob[key]===undefined || ob[key]===""){  
        delete ob[key]
    }
}
console.log(ob);



// 2.Write a JavaScript program that uses a for...of loop to calculate the total price of all items in an array of numbers.\

let arr=[12,500,9000];
let total=0
for(let ele of arr){
 total += ele;
}
console.log(total);


// 3.Write a JavaScript program that uses a for...in loop to find the total sum of all numeric values present in an object.
let ob1={
    first:20,
    sec:30,
    nmae:"Sagar"
}
let sum=0;
for(let key in ob1){
    if(Number(ob1[key])){
     sum += ob1[key]
    }
}
console.log(sum);



// 4.Write a JavaScript program that uses a for...of loop to convert all words in an array to uppercase and store the results in a new array.

let array=['ram',"sita","sagar"];
let newArr=[];
for(let ele of array){
    newArr.push(ele.toUpperCase());
}

console.log(newArr);
