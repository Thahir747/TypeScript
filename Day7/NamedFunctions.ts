//Named Function: A function that is declared with a Named

//syntax
/* function fncName(para):returntype{
    //block of code
} 
    
fncName();

*/

//Example 1: Named Function with No parameter and no return type

/* function display():void{
    console.log("Welcome to typescript")
}

display() */

//Example 2: Named Function with parameter and return type

/* function addNumber(x:number,y:number):number{
    return x+y

} */

// let a:number=addNumber(5,8)
// console.log(a)
//console.log(addNumber(5,8))


//Example 3: Named Function with Rest parameters
// Rest parameters= Dont restrict the no: of values that you can pass to a function

/* function addNumber(...nums:number[]){
   let i
   let sum:number=0
   for (i=0;i<nums.length;i++){
    sum=sum+nums[i]
   }
console.log("Sums",sum)
} 

addNumber(1,5)
addNumber(1,6,7,5) */


// example 5:  Named Function with rest parameter - multiple type

/* function element(...elements:(number | string)[]):number{

    return elements.length

}
console.log(element(3,"John",2,1,"scott"))
console.log(element(10,10,50,14,1,2,8,5,15,1))
console.log(element("John","test")) */

// example 6:  Named Function with optional parameters

/* function displayDetails(id:number,name:string,mailid?:string):void{
    console.log("Id:",id)
    console.log("Name:",name)
    if(mailid!= undefined){
        console.log("Mail:",mailid)
    }
    
}
//displayDetails(124,"fem","fem@gamil.com")
displayDetails(124,"fem") */

// example 6:  Named Function with default parameters

function calDis(price:number,rate:number=5):void{
    
    let dis:number=price*rate
    console.log("Discount is",dis)
}
calDis(5,2)
calDis(6)
