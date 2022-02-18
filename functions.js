// var a=true;
// console.log(a);
// console.log(typeof a);
// var num=89;
// console.log(`half of ${num} is ${num/2}`);

function calculator(str,a,b){
    if(str=='add'){
        return function add(){
            console.log(a+b);
        }
    }
    else if(str=='sub'){
        return function sub(){
            if(a>=b)
            console.log(a-b);
            else
            console.log(b-a);
        }
    }
    else if(str=='mult'){
        return function mult(){
            console.log(a*b);
        }
    }
    else if(str=='div'){
        return function div(){
            if(b!=0)
            console.log(a/b);
            else
            console.log("invalid divisor")
        }
    }
}
let returnedFunc=calculator('add',2,3);
let returnedFunc2=calculator('sub',2,3);
let returnedFunc3=calculator('div',2,3);
let returnedFunc4=calculator('mult',2,3);

returnedFunc();
returnedFunc2();
returnedFunc3();
returnedFunc4();


//2) Function expression
// let sayHi=function(){
//     console.log("hello guys");
// }
// sayHi();
// console.log(""+sayHi);
