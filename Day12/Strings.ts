//Declartion

/* let str1:string="Example with double quote"
let str2:string='Example with single quote'
let str3:string=`Example with back tick`

console.log(str1)
console.log(str2)
console.log(str3)

let num:number=10
console.log("Num is",num)
console.log(`Num is ${num}`) */

// string methods
 let str:string="Hello, Typescript"

 // 1. length -- find length of a string

 console.log("length is",str.length)

 // 2. toUpperCase(), toLowerCase() -- 

 console.log("In Upper case:", str.toUpperCase())
 console.log("In Lower case:", str.toLowerCase())

 // 3. charAt() & indexOf() --
 
 console.log("Char at 12 is", str.charAt(12))
console.log("Index of c", str.indexOf("T"))

// 4. substring()

console.log("Subtrings are:",str.substring(1,4))  // Hello -- 4th index is not selected.. ie, exclusive

// 5. includes() -- return boolean (true or false)

console.log('Example of includes()')
console.log(str.includes('T'))
console.log(str.includes('Hello'))
console.log(str.includes('ello'))

//6. startsWith()  & endsWith() -- return boolean (true or false)

console.log('Example of startsWith() & endsWith()')
console.log(str.startsWith('Hello'))
console.log(str.endsWith('!'))

// 7. replace()
//"Hello, Typescript"

console.log("Before Replacing: ",str)
console.log("After Replacing: ",str.replace('Typescript','Playwright'))

// 8. split()  -- break to multiple part based on delimeter & return array

let words:string[]=str.split(" ")
console.log("After spliting: ",words)

//ex2 :
let mystring:string="abc@gmail.com,xyzabc"
let word:string[]=mystring.split(",")
console.log(word)
console.log(word[0])
console.log(word[1])

// 9. trim() , trimStart() , trimEnd()  -- to remove spaces

let mySpace:string="      welcome to Typescript   "

console.log("Original String:", mySpace)

console.log("Using trim():", mySpace.trim())
console.log("Using trimStart():", mySpace.trimStart())
console.log("Using trimEnd():", mySpace.trimEnd())

// 10. concat

let myString1:string="Welcome"
let myString2:string="Boss"
let myString3:string="Java"


console.log("After concatenation:",myString1.concat(myString2))
console.log("After word concat:",myString1.concat(" World"))
console.log("Multiple Concat: ", myString1.concat(myString2).concat(myString3))

// concept of string immutability

let po:number=10

let res=po+5
console.log(res)
console.log(po)

let imm:string="welcome"

let mod:string=imm.concat("to type script")
console.log(imm)

// multiline string  -- backtick
let multiline:string=`welcome
cvb
b
cb
b`

console.log(multiline)

