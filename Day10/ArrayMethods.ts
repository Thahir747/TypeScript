let num:number[]=[1,2,3,4]
let str:string[]=["a","b","c","d","e","f","g","h","i"]

console.log(num)
console.log(str)

//length -- attribute (Not a method)

console.log("Size of num is:",num.length)
console.log("Size of str is:",str.length)

// 1. push() -- add single/ multiple element to end of an array

num.push(6,7,8)
console.log("After Push",num)

// 2.pop() -- removes the last element from the array

let lastnum=num.pop()
console.log("After pop",num)
console.log("Removed element",lastnum)

// 3. shift() -- removes first element from array

let res1=num.shift()

console.log("After shift",num) //[ 2, 3, 4, 6, 7 ]
console.log("Removed number:",res1)


// 4. unshift() -- add single/multiple elements to the begining of an array

num.unshift(1)
console.log("After unshift:",num) //[ 1, 2, 3, 4, 6, 7 ]


// 5. Concat -- concat multiple arrays of same type

let combinedArray=num.concat([8,9],[10])
console.log("Concated Array:",combinedArray) // [1,2,3,4,6,7,8,9,10]

// 6. slice() -- extract a section of array

let sliced=combinedArray.slice(1,4)
console.log("After slice:",sliced)

let sliced2=str.slice(0,2)
console.log(sliced2)

// 7. splice() -- add/remove elements from an array (from everywhere)

console.log("Current numbers: ",combinedArray)
console.log("current string:",str)
//ex 1:

let rmv=str.splice(1,2)  // (this removes--(starting index,ele to removes))
console.log("After splice:",str)
console.log("Removed elemnts:", rmv)

//ex 2:

str.splice(1,0,'o','p')
console.log("After splice:",str)

//ex 3: -- giving delete coount

str.splice(1,2,'o','p')
console.log("After splice:",str)

// 8. indexOf() -- find index of an element

//console.log(str)
//ex 1
let indexOfBa=str.indexOf("i")
console.log(indexOfBa)

//ex 2
let indexOfB=str.indexOf("i",4)
console.log(indexOfB)

// 9. includes() -- checks if an elemen exist (return true or false)

let isExist=str.includes("h")  // true
console.log(isExist)

let isExist1=str.includes("z")  //false
console.log(isExist1)

// 10. toString() -- convert array to string

let numstr=num.toString();
console.log(numstr)

let myArray:string[]=['w','e',"l","c","o",'m','e']
console.log("original array:",myArray)

let convertedArray=myArray.toString();
console.log("Converted array:",convertedArray)