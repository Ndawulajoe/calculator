function callMyName(joseph){
    joseph()
    joseph()
    joseph()
    joseph()
}
function like(){
    console.log('joseph like coding')
}
//callMyName(like)

function howMany(action,num){
    for(let i=0;i<num;i++){
        action()
    }
}
//howMany(like,30)

function squre(arr){
    const results =[]
    for(let num of arr){
        let ans = num*2;
        results.push(ans)
    }
    return results
}
console.log(squre([4]))
function multplay(num){
    return function(x){
        return x*num
    }
}
const checky= multplay(3)
//console.log(checky(40))
function inBetween(x,y){
    return function(num){
    return num>=x && num<=y;
    }
}
const agelimit= inBetween(18,50)
console.log(agelimit(19))