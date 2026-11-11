// AccessModifier.ts


class Person{

    public name:string
    protected age:number
    private ssn:number

    constructor(name:string,age:number,ssn:number){
        this.name=name
        this.age=age
        this.ssn=ssn
    }

    display(){
        console.log("Name: ",this.name)
        console.log("Age: ",this.age)
        console.log("SSN: ",this.ssn)
    }
}

class employee extends Person{

    private employeeId:number

    constructor(name:string,age:number,ssn:number,id:number){
        super(name,age,ssn)
        this.employeeId=id
    }


    showEmployee(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.employeeId)
       // console.log(this.ssn)  // unable to access because it is private 
    }

}

let emp=new employee("Test",45,1001,5555)

emp.display()
emp.showEmployee()

console.log(emp.name) // accessible
// console.log(emp.age) // not accessible
// console.log(emp.ssn) // not accessible
// console.log(emp.employeeId) // not accessible