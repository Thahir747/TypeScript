// Anonymous fnc (unnamed fn/nameless fn)

// anony fn is a fn that does not have a name. instead it is assigned
// to a variable which act as its name

//syntax:
/* 
let variable = function(para){
    //fn body
}

variable();  //calling
 */

//example 1 -- Anonymous fnc 

/* 
let m= function():string{
    return "Hello TypeScript"
}
console.log(m())
 */


//example 2 -- Anonymous fnc with parameters

let mul=function(a:number,b:number):number{
    return a*b
}
console.log(mul(7,3))