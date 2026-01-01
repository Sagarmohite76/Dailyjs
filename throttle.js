function throttle(fn,delay){
    let lastCall=0;
    return function(...arg){
        let now=Date.now()
     if(now-lastCall>=delay){
        fn(...arg);
        lastCall=now
     }
    }
}

function sendmsg(msg){
    console.log("Message is",msg);
    
}
const sendmsgdata=throttle(sendmsg,3000)
sendmsgdata("hi")
sendmsgdata("hello")
sendmsgdata("goodmorning")


setTimeout(()=>{
sendmsgdata("goodnight")
},4000)