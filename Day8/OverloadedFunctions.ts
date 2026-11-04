//OverloadedFunctions.ts


//example 1: different parameter type(datatype)
/* 
function getInfo(id:number):string
function getInfo(name:string):string

function getInfo(param: number | string):string{

    if(typeof param=="number"){

        return(`UserID is ${param}`)
    }else{
         return(`Username is ${param}`)
    }
}

console.log(getInfo(105)) */


//example 2: Different number of parameters


/* 
function add(a:number,b:number):number
function add(a:number,b:number,c:number):number


function add (a:number,b:number,c?:number):number{

    // if(c!=undefined){
    //     return a+b+c 
    // }
    //     return a+b

    if(c!=undefined){
        return a+b+c
    }
        return a+b
    
}

console.log(add(12,81))
 */


//example 3: Different return type

/* 
function pro(input:string):string
function pro(num:number):number

function pro(input:string | number): string | number {

    if(typeof input=="string"){
        return input.toUpperCase();
    }else{
        return input*5
    }
}

console.log(pro("Welcome"))
console.log(pro(2))
 */

//example 4: 

function greet(name:string):string
function greet(age:number):string
function greet(isMarried:boolean):string

function greet(value: string | number | boolean):string{

    if(typeof value=="string"){
        return `Hello ${value}`

    }else if(typeof value=="number"){
        return `Age is: ${value}`

    }else{

        let res=value?"Married":"Single"
        return res

    }
}

console.log(greet("Thahir"))
console.log(greet(45))
console.log(greet(true))
console.log(greet(false))