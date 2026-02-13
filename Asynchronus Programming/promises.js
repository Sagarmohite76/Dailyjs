//  Creating a Promise
// Syntax
// const promise = new Promise((resolve, reject) => {
//     // async task
// });

// Example
const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});


// Consuming a Promise (then, catch, finally)
// .then() – for success
// .catch() – for error
// .finally() – always runs
// promise
//   .then(result => {
//       console.log(result);
//   })
//   .catch(error => {
//       console.log(error);
//   })
//   .finally(() => {
//       console.log("Done");
//   });




let p1=new promise((resolve,reject)=>{
    let a=12;
    if(a>=10){
        resolve()
    }
})