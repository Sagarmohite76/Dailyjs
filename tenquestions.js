// 1. Largest
let arr=[1,2,3,45,56];
function largestNumber(array){
let largest=0;
for(let ele of array){
    if(largest<ele){
        largest = ele
    }
}
console.log(largest);
}
largestNumber(arr);

// Even odd
function evenorOdd(n){
    if(n%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
evenorOdd(2);

// Fabin
