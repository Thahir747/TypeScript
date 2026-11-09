//creating object

// Different ways to create object in TS/JS

// 1. using 'object' type - directly define the values for variable(JS/TS)
// 2. Inline Type object - we also define the datatype of the key (TS)
// 3. Using type aliases (TS)
// 4. Using the classes (JS ES16/TS)

// 1 . using 'object' type
// The TS 'object' type represents all values that are not in primitive types

// let employee:object={name:"John",age:30,salary:50000,job:"Engineer"}  // here we cannot create method

let employee={name:"John",
    salary:50000,
    job:"Engineer",
    getDetails:function(){
        //console.log(this.name,this.salary,this.job)
        return `${this.name} is ${this.job} earning ${this.salary}`
    }
}

console.log(typeof employee)

//Accessing object   -- approach 1 (using . notation)

console.log("//////using approach 1/////")
console.log(employee.name, employee.salary,employee.job) //John 50000 Engineer

console.log(employee.getDetails()) // John is Engineer earning 50000

//Accessing object   -- approach 2 (using bracket notation)

console.log("//////using approach 2/////")
console.log(employee["name"], employee["salary"],employee["job"])

console.log(employee["getDetails"]())

// modify the values
employee.job="Manager"
employee["job"]="Manager"

console.log(employee.job)
 
//================================================================================================
// 2. Inline Type object 

let student:{name:string,
    age:number,
    grade:string,
    getSummary:()=>string} ={
        name:"scot",
        age:20,
        grade:"A",
        getSummary:function(){
            return `${this.name} is ${this.age} years old and scored grade ${this.grade}`
    } 
}

console.log(student.getSummary())

let student1:{name:string,
    age:number,
    grade:string,
    getSummary:()=>string} ={
        name:"Sam",
        age:25,
        grade:"B",
        getSummary:function(){
            return `${this.name} is ${this.age} years old and scored grade ${this.grade}`
    } 
}

console.log(student1.getSummary())
// in this approach we have write/declare multiple time, to solve this we use aliases

// 3. Using type aliases

//ex:1 
type product={
    name:string,
    price:number,
    getInfo:()=>string
}

let book1:product={
    name:"Java",
    price:200,
    getInfo:function(){
        return `${this.name} costs ${this.price}`
    }

}

let book2:product={
    name:"Typescript",
    price:100,
    getInfo:function(){
        return `${this.name} costs ${this.price}`
    }

}
console.log(book1.getInfo())
console.log(book2.getInfo())

// Ex:2 -- combine multiple

type personal={
    name:string,
    age:number
}

type contact={
    email:string,
    phone:number
}

type candidate=personal & contact & {
    getContactinfo:()=>string
}

let can:candidate={
    name:"Tess",
    age:34,
    email:"Tess@gmail.com",
    phone:673527383,
    getContactinfo:function() {
        return `${this.name} ${this.age} ${this.email}`
    }
}

console.log(can.getContactinfo())


//============================================================
// 4. Using the classes  -- we mainly use this

class person{
    ssn:string;
    firstname:string;
    lastname:string;

constructor(ssn:string,firstname:string,lastname:string){
    this.ssn=ssn
    this.firstname=firstname
    this.lastname=lastname
}

    getFullname():string{
        return `${this.firstname} ${this.lastname}`
    }

    getDetails():string{
        return `${this.ssn} ${this.getFullname()}`
    }
}

let person1=new person("123","TestFirst","Testlast")
let person2=new person("854","Test2First","Test2last")

console.log(person1.getDetails())
console.log(person2.getDetails())