// Approach 1: Using literals

/* 
let names:string[]=[]  //declaration

//initialization
names[0]="John"
names[1]="Perth"
names[2]="scout"
names[3]="Love"
 */
/* 
let names:string[]=["John","Love","Sam","Scout"] //declaration + initialization

console.log(names)
console.log(names[0])
 */

// Approach 2: Using generic way (Array<T> keyword)

let empNames:Array<string>=["John","Love","Sam","Scout"]
// console.log(empNames)

let empId:Array<number>=[101,2054,545]
// console.log(empId)

let data:Array<string|number>=["John",101,452,"Love",154,"Yung"]
// console.log(data)

let mixed:Array<any>=["John",101,452,"Love",154,"Yung",true,null]
//console.log(mixed)

// Example 1
//iterate using for loop  -- index mandotory

console.log("Total Length is:", empNames.length)

console.log("Employee names......")

 for (let i=0;i<empNames.length;i++){
    console.log(empNames[i])
 }

 // Example 2: iterating using 'for... in' loop (indexes)

 console.log("Employee id....")

 for (let i in empId){
    console.log(empId[i])
 }

 // Example 3: iterating using the 'for... of' loop (values)

 console.log("Mixed data.....")

 for (let value of data){
    console.log(value)
 }


 // Example 4: Passing an array to the function
 // search an element in a  n array using function

function search(ele:number,arr:number[]):boolean{
for (let i=0;i<arr.length;i++){
   if(arr[i]==ele){
      return true
   }
 }
 return false
}

let arr:number[]=[10,20,30,40,50]

console.log(search(10,arr))  //true
console.log(search(60,arr))  // false


//example 5: a function takes an array and returns an array

function capWords(arrs:string[]):string[]{

   let result:string[]=[]

   for (let i=0;i<arrs.length;i++){
      result[i]=arrs[i].toUpperCase()

   }
   return result
}

let words:string[]=["tetdsu","dsfg","fsg"]
console.log(capWords(words))
