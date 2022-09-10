function multplay(num){
    return function(x){
        return x*num;

    }
}
let all=multplay(10)
//console.log(all(20))
function difurenc(x,y){
    return function(num){
        return num>=x && num<=y;
    }
}
let limt = difurenc(5,18)
//console.log(limt(20))
function difurenc (x,y){
    return function(num){
        return num>=x && num<=y
    }
} 
const age= difurenc(1,5)
//console.log(age(3))

function product(num){
    return function (x){
        return x*num
    }
}
const my=product(20)
//console.log(my(2))
function under(x,y){
    return function(num){
        return num>=x&&num<=y
    }
}
const follIn=under(1,10);
console.log(follIn(12))

function squre(arr){
    let result=[]
    for(let num of arr){
        let ans = num*2
        result.push(ans)
    }
    return result
} 
console.log(squre([6]))