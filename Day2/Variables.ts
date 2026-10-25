// var vs let vs const
/*
1. Scope of the variable
2. Declaration/Assignment
3. Re-Declaration
4. Re-initialization/Re-Assignment
5. Hoisting


*/
 
/*

// Example 1
var age=30
console.log(age)

function varScope(){
    if(true){
        var ms="Hello"
        console.log(ms)
    }
    console.log("This is outside: " + ms)
}

varScope()

*/

// Example 2
/* function blockScope(){
    if(true){
        let ms="Hello let"
        const greet="Hello const"

        // console.log(ms)
        // console.log(greet)
    }

    //console.log(ms)
    //console.log(greet)
}

blockScope() */

/* function scopediff(){

    if(true){
        var num1=10
        let num2=20
        const num3=30
        // console.log(num1)
        // console.log(num2)
        // console.log(num3)
    }

    // console.log(num1)
    // console.log(num2)
    // console.log(num3)

}

scopediff() */

// 2. Declaration

//Example 1: var can be declared without initialization

/* var x
console.log(x)
x=30
console.log(x) */

//Example 2: let can be declared without initialization
/* let y
console.log(y)
y=30
console.log(y) */


//Example 3: const must be initialized at the time of Declaration 
//const z //incorrect
//const z=50 // correct
//console.log(z)


// 3. Re-Declaration

// var - allows
// let,const - not allowed

// Example 1: var - allows

/* var city="New York"
var city="LA"
console.log(city) */

// Example 2: let  - Not allows

/* let country="New York"
let country="LA"
console.log(country) */

// Example 3: const  - Not allows
/* 
const planet="Earth"
const planet="Mars"
console.log(planet) */

// 4. Re-initialization/Re-Assignment

// var, let - allows
// const - not allowed

// Example 1: var - allows

 /* var city="New York"
 city="LA"
console.log(city) */ 

// Example 2: let  - allows

 /* let country="New York"
 country="LA"
console.log(country) */ 

// Example 3: const  - Not allows
 
/* const planet="Earth"
planet="Mars"
console.log(planet) */ 



//5. Hoisting

// var throws undefined
// let & const throws error

/* console.log(a) //undefined
var a=10
console.log(a) */

/* console.log(a) //throw error
let a=10
console.log(a) */

/* console.log(a) //throw error
const a=10
console.log(a) */






