// example 1: tuples with 2 values
/* 
let person:[string,number]=["John",45]
console.log(person[0])
 */
//example 2: tuple with multiple value
/* 
let use:[number,string,boolean,string]=[101,"check",true,"sam"]
console.log(use)

//example 3: itearte using for loop

console.log("using traditional for loop....")
for (let i=0;i<use.length;i++){
    console.log(use[i])
}

//example 4: using for..in


console.log("using for...in loop....")
for (let i in use){
    console.log(use[i])
}

//example 5: using for..of loop

console.log("using for...of loop....")
for (let i of use){
    console.log(i)
} */


// Example 6: Tuple array (array of tuples)

let students:[number,string][]=[ [101,"John"],[102,"Peter"] ]
console.log(students.length)

console.log(students[0]) //[ 101, 'John' ]

let tp=students[0]
console.log(tp[0])
console.log(students[0][0])

