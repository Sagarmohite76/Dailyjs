let function1=(a,b)=>{
    return a+b;
}
console.log(function1(2,2));

let prime=(n)=>{
    let isprime=true;
    if(n<2){
       isprime=false;
       return isprime;
    }
    else{
        for(let i=2;i<n;i++){
            if(n%i==0){
                isprime=false;
               return isprime
            }
        }
    }
    if(isprime){
        return `prime`
    }
}
console.log(prime(10));


