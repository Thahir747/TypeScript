// for(let i=1;i<10;i++){
//     console.log(i)
// }

//even method 1
/* for(i=1;i<=10;i++){
    if(i%2==0){
        console.log(i)
    }
    
} */

//even method 2
/* for(let i=0;i<=10;i+=2){
        console.log(i) 
} */

        // Scenario 1
/* let i:number;  // global variable 

for(i=1;i<=5;i++){  // if i write like this for(let i=1;i<=10;i+=2) then it will be anther variable
    console.log(i)    
}
console.log("outside loop",i)  */


// Scenario 2
/* let i:number;  // global variable 

for(let i=1;i<=5;i++){  // if i write like this for(let i=1;i<=10;i+=2) then it will be anther variable
    console.log(i)    
}
console.log("outside loop",i)  //this makes error */


let i:number
for (i=1;i<=5;i++);

console.log("outside loop",i)

