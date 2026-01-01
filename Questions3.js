// 1. Create an object student and write a function to print its details.
 
let student={
    name:"Sagar",
    rollNo:45,
    Marks:100,
    education:"Bca"
};
function details(obj){
    console.log(obj);
    
}
details(student)

// 2. Create an array of student objects and print all names using a function.

let arrofob=[
    {name:"Ram",Marks:100},
    {name:"Sita",Marks:100},
    {name:"Sagar",Marks:100}

]
function allName(obj){
    for(let i=0;i<obj.length;i++){
        console.log(obj[i].name)
    }
}
allName(arrofob)
// 3. Write a function that accepts an object and returns the number of properties.
function acceptsobj(obj){
    return Object.keys(obj).length
};
console.log(acceptsobj("Total Properties :",student));



// 4. Create an object with a method to calculate total marks.
let markslist={
    Math:90,
    Science:90,
    English:90,
    Sanskrit:90,
    totalMarks:function (){
       return this.totalMarks=this.Math+this.English+this.Science+this.Sanskrit;

}
}
console.log(markslist.totalMarks())
console.log(markslist);


// 5. Write a function to add a new property to an object.
function newproperty(obj,newproperty,newvalue){
  obj[newproperty]=newvalue;
  return obj
}

console.log(newproperty(student,result,"A"));


// 6. Create an array of objects and use a loop to display all data.

// 7. Write a function to check whether a property exists in an object.

// 8. Create an array of objects and find the length using a function.

// 9. Write a function that returns an object.

// 10. Create an object and update its property using a function.
