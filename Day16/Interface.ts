// interface
// syntax
/* 
interface interfaceName{
    properties
    abstract methods
}
 */

// 1. regular Properties
// 2. optional Properties
// 3. readonly properties & function types
// 4. extending interfaces
// 5. class implements interface

// Example 1: Basic interface

interface person{
    name:string
    age:number
}

let student:person={
    name:"Scout",
    age:55
}

console.log("**********Example 1**********")
console.log(student)  //{ name: 'Scout', age: 55 }
console.log(student.name) //Scout
console.log(student.age) //55


// Ex: 2 Optional properties (?)

interface Employee{
    id:number,
    name:string,
    department?:string  //Optional properties
}

let emp:Employee={
    id:501,
    name:"Yung",
}

let emp1:Employee={
    id:501,
    name:"Yung",
    department:"IT"
}

console.log("**********Example 2**********")
console.log(emp)    //{ id: 501, name: 'Yung' }
console.log(emp.name)   //Yung
console.log(emp.id) //501
console.log(emp.department) //undefined
console.log(emp1.department)    //IT


// Ex: 3 readonly property

interface book{
    name:string,
    readonly isbn:string

    display():void // abstract method
}

let b1:book={
    name:"Book of Love",
    isbn:"lo-457845",

    display() {
        console.log("Abstract method value:",b1.isbn)
    }
}

console.log(b1.name)
console.log(b1.isbn)
b1.display()

console.log("After modifying")

b1.name="Book of heartbreak"
console.log("New title:",b1.name)
// b1.isbn="dfghj"  //not possible

// Ex 4: extending interface
/* 
console.log("******* Extending interface********")
// parent
interface animal{
    name:string
}

//child
interface dog extends animal{

    color:string

}

let mydog:dog={
    name:"Johnny",
    color:"Red"
}

console.log(mydog.name)
console.log(mydog.color)
 */

// ex: 5 : class can implements interface

interface animal{
    name:string,
    sound():void
}

class dog implements animal{

    // we need to redefine to 
    name:string // from interface 
    color:string

     constructor(name:string,color:string){
        this.name=name
        this.color=color
    } 

    sound(): void {
        console.log("barking...........")
    }

}

let pet=new dog("Mickey","Black")

console.log(pet.name)
console.log(pet.color)
pet.sound()