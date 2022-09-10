
//function anyNumber(x,y){
  //  console.log(x+y)
    //console.log(x*y)
 //   console.log(x/y)
   // console.log(x-y)
    
//}
//anyNumber(20,10)
//for(let i=0;i<10;i++){
//    anyNumber(20,10)
//}

//function isPurple(color){
 //   return color.toLowerCase()==='purple';
//}
//console.log(isPurple('purple'))
//function isUgandan(citizinship){
//    return citizinship.toLowerCase()==='ugandan'
//}
//console.log(isUgandan('UGANDAN'))
//function theRegister(name){
//    return name.toLowerCase()==='ndawula joseph'
//}
//console.log(theRegister('ndawula joseph'))
//function isSeasons(season){
 //   return season.toLowerCase()==='dry'
//}

//console.log(isSeasons('dry'))
//function isHot(temp){
 // return temp.toLowerCase()==='toohot';
//}
//console.log(isHot('tooHot'))
//function eat(food){
//  return food.toLowerCase()==='posho'
//}
//console.log(eat('rice'))
//console.log(eat('Posho'))

//function containPurple(arr){
 // for(let color of arr){
 //   if(color==='blue'||color==='red'){
 //     return true;
 //   }
 // }
 // return false;
//}
//console.log(containPurple(['black','reed','yellow']))
//console.log(containPurple(['red','black','blue']))

//function names(arr){
//  for(let names of arr){
 //   if(names==='joseph'||names==='joan'){
 //     return true;
 //   }
 // }
 // return false;
//}
//console.log(names(['joo','joseph','tom']))
//console.log(names(['nillan','jollan','mike']))

//function isValidPassword(password,username){
 // if(password.length <8){
 //   return false
 // }
 // if(password.indexOf (' ')!== -1){
//
 //   return false
 // }
 // if (password.indexOf (username)!== -1){
 //   return false;
 // }
 // return true;
//}
//console.log(isValidPassword('89Fjj1nms','dogLuvr'))
//console.log(isValidPassword('dogLuvr124!','dogLuvr'))
//console.log(isValidPassword('89Fjj1nms','Ndawula'))
//console.log(isValidPassword('jj12','Ndawula'))
//console.log(isValidPassword('Jollan123','jollan'))

//function isValidPassword(password,username){
//  if(password.length <8 || 
//    password.indexOf(' ') !==-1 ||
///    password.indexOf(username) !==-1){
//      return false;
//    }
 //   return true;
//}
//console.log(isValidPassword('89Fjj1nms','dogLuvr'))
//console.log(isValidPassword('dogLuvr124!','dogLuvr'))
//console.log(isValidPassword('89Fjj1nms','Ndawula'))
//console.log(isValidPassword('jj12','Ndawula'))
//console.log(isValidPassword('Jollan123','jollan'))

//function isValidPassword(password,username){
//const less = password.length <8;
//const hasSpace = password.indexOf(' ')!==-1;
//const same =password.indexOf(username)!==-1;
//if(less||hasSpace||same){
//  return false;
//}
//return true;
//}
//console.log(isValidPassword('89Fjj1nms','dogLuvr'))
//console.log(isValidPassword('dogLuvr124!','dogLuvr'))
//console.log(isValidPassword('89Fjj1nms','Ndawula'))
//console.log(isValidPassword('jj12','Ndawula'))
//console.log(isValidPassword('JOseph123','joseph'))
//console.log(isValidPassword('@Ddawula255','ndawula'))
//console.log(isValidPassword('$Nillan123','nillan'))
function isValidUserName(username,password) {
  if(username.length<8 ||
    username.indexOf(' ')!==-1 ||
    username.indexOf(password)!==-1){
      return false;
    }
   return true;
}
//console.log(isValidUserName('username','zsername'))
function ispangram(sentace){
  let lowerCased=sentace.toLowerCase();
  for(let sub of 'abcdefghijklmnopqrstuvwxyz'){
   if (lowerCased.indexOf(sub)===-1){
      return false;
    }
  }
  return true;
}
//console.log(ispangram('A quick brown fox jumps over the lazy dog'));
//console.log(ispangram('A quik bown fx jumps oer the lazy dog '));
 function ispangram(sentace){
  let lowerCased=sentace.toLowerCase();
  for(let sub of 'ndawulajoaseph'){
    if(!lowerCased.includes(sub)){
      return false;
    }
  }
  return true;
 }
 console.log(ispangram('ndawulajoseph'));
 console.log(ispangram('NWAWULAJOSEPH '));
 