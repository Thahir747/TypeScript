//ArrowFunction.ts

//example 1: with no parameters and no return type
/* 
let test=():void =>{
    console.log("Hello")
}

test()
 */

//example 2: with parameters and return type
/* 
let va=(x:number,y:number):number=>{  
    return x*y
}
console.log(va(5,8))
 */

//example 3: with implicit return  (only when single statement is there)

// let va=(x:number,y:number):number=> x+y
// console.log(va(5,8))


// example 4: arrow fn with optional parameter

/* let test=(id:number,name:string,mailid?:string):void =>{  //if we give first para as optional followed should be optional
    console.log("Id:",id)
    console.log("Name:",name)
    if(mailid!= undefined){
        console.log("Mail:",mailid)
    }
    
}
test(124,"fem","fem@gamil.com")
test(124,"fem") */

// example 5:  arrow fn with default parameters

/* let test= (price:number,rate:number=6):void =>{
    
    let dis:number=price*rate
    console.log("Discount is",dis)
}
test(5,2)
test(6) */

//Example 6:  arrow fn with Rest parameters

/* 
let test= (...nums:number[])=>{
   let i
   let sum:number=0
   for (i=0;i<nums.length;i++){
    sum=sum+nums[i]
   }
console.log("Sums",sum)
} 

test(1,5)
test(1,6,7,5)
 */
