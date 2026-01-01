// Create a function that throws an error if the input is not a number.
function error(a){
    if(isNaN(a)|| typeof a !="number"){
        throw new Error("This not a number")
    }
    return a
}
try{
  console.log(error("45"));
  
}catch(err){
    console.log(err.message);
    
}


// Create a function that throws an error if the number is less than 0.
function error1(a){
    if(a<0){
        throw new Error("Number is less than 0")
    }
}
try{
    error1(70);
}catch(err){
    console.log(err.message);
    
}



// Create a function that throws an error if the input is not a string.
function noString(str){
    if(typeof str != "string" ){
        throw new Error("It is not a string");
    }
    return "It is a string"
}
try{
    console.log(noString("45"));
    
}catch(err){
    console.log("Error Caught :",err.message);
    
}finally{
    console.log("Error is solved");
    
}

// Create a function that throws an error if the array is empty.
function arrEmpty(arr){
    if(arr.length==0){
        throw new Error("Array is empty");
    }
    return arr
}
try{
    console.log(arrEmpty([3,4]));
    
}catch(err){
    console.log("Error Caught :",err.message);
    
}


// Create a function that throws an error if the object has no properties.

function checkEmptyObject(obj) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        throw new Error("Input is not a valid object");
    }

    if (Object.keys(obj).length === 0) {
        throw new Error("Object has no properties");
    }

    return "Object has properties";
}

try {
    console.log(checkEmptyObject({ name: "Sagar", age: 22 }));
} catch (err) {
    
    console.log("Error Caught:", err.message);
}


// Create a function that throws an error if division by zero is attempted.

// Create a function that throws an error if the password length is less than 8.

// Create a function that throws an error if the input is null or undefined.

// Create a function that throws an error if the age is below 18.

// Create a function that throws an error if the input is not an array.