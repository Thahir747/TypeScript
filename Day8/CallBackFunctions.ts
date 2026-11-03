//Example 1
 
/* 
//callback function
function sh(message:string){
    console.log(message)
}

// function that takes callback function as an parameter
function gr(name:string,callback:(message:string)=>void){
    console.log(name)
    callback("Test")
}

//calling the callback fn
gr("John",sh)
 */


//Example 2

function dis(result:number):void{
    console.log(result)
}

function test(num1:number,num2:number,callback:(result:number)=>void){
    let res:number= num1+num2
    callback(res)
}

test(2,7,dis)