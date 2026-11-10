/*
1.class
2. Read only properties
3. optional property

4. static variables & methods
    // 1. static properties/methods are common/shared across all the objects
    // 2. static properties/methods can be accessed through class name directly
    // 3. static properties/methods can be modified using any object
    // 4. we cannot use this for static properties, instead we use class name

*/

class Student{
    readonly studentId:number  // readonly property(can only be assigned once inside constructor)
    name:string     //regular property
    email?:string   // optional property
    static schoolName:string="Britto School"

    constructor(sid:number,name:string,email?:string){
        this.studentId=sid
        this.name=name
        this.email=email   
    }

    displayInfo():void{
        console.log("Student ID:",this.studentId)
        console.log("Student ID:",this.name)
        console.log("School Name:",Student.schoolName)

        if(this.email){
            console.log("Student ID:",this.email)
        }
        
    } 

    static changeSchoolName(newName:string):void{
        Student.schoolName=newName
    }
}

let student1=new Student(201,"Sam")
let student2=new Student(202,"John","John@gmail.com")

console.log("**************Printing student 1 details**************")
student1.displayInfo()
console.log("**************Printing student 2 details**************")
student2.displayInfo()

// trying to modify

// student1.studentId=45
// student1.name="Test"
// console.log(student1.name)


// change the school name using static method
Student.changeSchoolName("Fatima school")
console.log("**************Printing student 1 details after changing school name**************")
student1.displayInfo()

console.log("**************Printing student 2 details after changing school name**************")
student2.displayInfo()
