//two part
// let a:number=10;
// let b:number=20;

//single line
let a:number=10, b:number=20;

//Arithmetic operations

console.log("Normal")
console.log(a+b)
console.log(b-a)
console.log(a*b)
console.log(b/a)
console.log(a%b)
console.log(5**2)

//Assignment operators

a=10
b=5

// a+=b //a=a+b
// console.log(a)

console.log("****Assignment operators*****")
console.log(a+=b) //a=a+b //15
console.log(a-=b) //10
console.log(a*=b) //50
console.log(a/=b) //10
console.log(a%=b) //0

//Relational operators/Comparison operators --returns boolean value
// > , < , >= , <= , == , != , ===(strict equality, only in ts)

console.log("****Relational operators*****")

a=10
b=20
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a!=b)

// difference btw ==(equality)  & ===(strict equality)

console.log("****equality & strict equality *****")
let num1:any=10
let num2:any="10"

console.log(num1==num2) //true (check only value)
console.log(num1===num2) //false (check value along with data type)

//logical operators ---  && || !
//return true or false
//works between boolean variables

console.log("****logical operators *****")

let b1:boolean=true
let b2:boolean=false

console.log(b1&&b2) //false
console.log(b1||b2) //true
console.log(!b1) //false
console.log(!b2) //true

//combination of logical and relational operators

console.log("****Mixing of logical and relational operators *****")

console.log(30>10 && 10>5) //true
console.log(30<10 || 10>5) //true








