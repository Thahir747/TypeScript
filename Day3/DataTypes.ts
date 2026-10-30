/* 
1. Primitive Data Types (built-in)
 number
 string
 boolean

2. Non Primitive Data Types (built-in) */

// 1. number type (both integers and floating)

/* let age:number=25
let price=25.5
let big=345634524

console.log("Age: ", age )
console.log("Price: ", price )
console.log("Big: ", big )

console.log(typeof(age))
console.log(typeof(price)) */

// 2. string

/* let firstName:string="John"
let lastName:string='Kenedy'

//console.log("Hello",firstName,lastName)

let greet:string=`Hello ${firstName} ${lastName}`
console.log(greet) */

// 3. boolean
/* let isStudent:boolean=true

let hasJob:boolean=false

console.log("Is Student?",isStudent)
console.log("Has Job?",hasJob) */

// 4. Null & undefined
/* 
let emptyValue:null=null
let noAssign:undefined=undefined

console.log(emptyValue)
console.log(noAssign)

let price:number
console.log(price) */

// 5. ANY Types

/* let value:any="Testing"
console.log(typeof(value))

value=100 // if i would have write string instead of any, this line will show compile time error
console.log(typeof(value))

value=true
console.log(typeof(value))

console.log(value) */

// 6. Union

/* let id:number|string

id="Asd123"
console.log(id)

id=78
console.log(id)

id=true
console.log(id) */

// 7. void

/* function show():void{
    console.log("welcome")
}

show() */

/* function sum(x:number,y:number){
    console.log(x+y)
}

sum(10,20) */


function sum1(x:number,y:number):number{
    return(x+y)
}

let res:number=sum1(10,50)

console.log(res)

