// Method overloading and constructor overloading in Typescript

class Calculator{
    
// Constructor Overloading
    constructor();      //default constructor
    constructor(a:number,b:number);     //parameterized constructor

    constructor(a?:number,b?:number){
        
        if(a!=undefined && b!=undefined){
            console.log("Sum of a & b:",(a+b))
        }else{
            console.log("Default constructor invoked...")
        }

    }


// Method Overloading

    add(a:number,b:number):number
    add(a:number,b:number,c:number):number

    add(a:number,b:number,c?:number):number{
        
        if(c!=undefined){
            return a+b+c
        }
        
        return a+b
    }

}


// Constructor Overloading invoking
let f1=new Calculator()
let f2=new Calculator(4,5)

// Method Overloading invoking

console.log("Adding 2 numbers:", f1.add(10,5))
console.log("Adding 3 numbers:", f2.add(10,12,8))


