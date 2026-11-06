// forEach() , map() , filter() , reduce() , some() , every()

// 1. forEach() -- 
//syntax -- array.forEach(function(currentvalue,index,array){})

// Example 1: get index of all the fruites along with value

let fruites:string[]=['apple','banana','orange','mango','kiwi']

/* console.log("printing using for..in loop")
for(let i in fruites){
    console.log(i,fruites[i])
} */

/* console.log("printing using for..each method")

 fruites.forEach(function(currentvalue,index){
    console.log(`${index} ${currentvalue}`)
})  */


//using arrow fn 

/* fruites.forEach((currentvalue,index)=>{
    //console.log(`${index} ${currentvalue}`)
    console.log(index,currentvalue)
}) */

// Ex:2 capture and print in uppercase

/* console.log("Printing in UPPERCASE......")
fruites.forEach((currentvalue)=>{
    console.log(currentvalue.toUpperCase())
}) */

// 2. map()--
//syntax -- array.map(function(currentvalue,index,array){})

//ex 1: get square of all the numbers in an array. 

let num:number[]=[1,2,3,4,5]
/* 
let squared=num.map(function(element){
    return element*element
})
console.log("Original:",num)
console.log("Squared:",squared)
 */

//Ex:2 

/* let doubled=num.map((element)=>{
    return element*2
}) */
/* 
let doubled=num.map((element)=> element*2) // if one statement is available
console.log("Original:",num)
console.log("Doubled:",doubled)
 */

// 3. filter()-- 
// array.filter(function(currentvalue,index,array){})

//Ex:1
/* let even=num.filter(function(element){
    return element%2==0
})
console.log(even) */

/* let even=num.filter((element)=> element%2==0)
console.log(even) */

// Ex:2
/* let greaterThanThree=num.filter((element)=> element>3)
console.log(greaterThanThree) */

// 4. reduce() -- return single value
//syntax -- array.reduce(function(accumulator,currentvalue,index,array){})

//EX:1 get total of array
//num.reduce(function(accumulator,currentvalue,index,array){})

let total=0

for(let i=0;i<num.length;i++){
    total=total+num[i]
}
console.log("Sum is",total)

let reduced=num.reduce((total,element)=>{
    return total+element
},1)

console.log(reduced)



