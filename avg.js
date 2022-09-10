//const add= function(x,y){
//    return x+y;
//}
//const subtract= function(x,y){
//    return x-y;
//}
//const multplay=function(x,y){
//    return x*y;
//}
//const division= function(x,y){
//    return x/y;
//}
//let operation=[add,subtract,multplay,division];
//    for(let sub of operation){
//        let num =sub(30,5)
//        console.log(num)
//    }
//    console.log(operation[0](30,5))
//    console.log(operation[1](30,5))
//    console.log(operation[2](30,5))
//    console.log(operation[3](30,5))

 //   const thing={
 //       doSomething:multplay
 //   }
 //   console.log(thing.doSomething(2,4))
 function callThreeTimes(f){
    f()
    f()
    f()
 } 
 function call(){
    console.log('i am joseph')
 }
 console.log(callThreeTimes(call))

 function eat(){
    console.log('i love eation matoke')
 }

 
 function repeat(action,num){
    for(let i=0;i<num;i++){
        action()
    }
 }
 repeat(call,13)
 repeat(eat,20)

 function pickOne(f1,f2){
    let num =Math.random();
    console.log(num)
    if(num<0.5){
        f1()
    }else{
        f2()
    }
 }
 pickOne(call,eat)