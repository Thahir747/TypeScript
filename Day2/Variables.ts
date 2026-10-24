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
function blockScope(){
    if(true){
        let ms="Hello let"
        const greet="Hello const"

        // console.log(ms)
        // console.log(greet)
    }

    //console.log(ms)
    //console.log(greet)
}

blockScope()