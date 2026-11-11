// Inheritance


// Parent class
class car{
    name:string
    color:string
    model:string

    constructor(name:string,color:string,model:string){
        this.name=name
        this.color=color
        this.model=model      
    }

    start(){
        console.log("Car started")
    }

    stop(){
        console.log("Car stopped")
    }

    displayCar(){
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`) 
    }
}

// Child class
class Honda extends car{  //inheritance
    year:number

    constructor(name:string,color:string,model:string,year:number){
        super(name,color,model)
        this.year=year
    }


    // Method overriding
    start(){
        console.log("Honda started")
    }

    yom(){
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM:${this.year}`)
    }
}

// let car1=new Honda("civic","Black","Honda",2000)
// car1.start()

class bmw extends car{
    year:number

    constructor(name:string,color:string,model:string,year:number){
        super(name,color,model)
        this.year=year
    }


    // Method overriding
    start(){
        console.log("BMW started")
    }

    yom(){
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM:${this.year}`)
    }

}

//Honda object
let obj1=new Honda("civic","Black","Honda",2020)
// console.log(obj1.name)
// console.log(obj1.color)
// console.log(obj1.model)
// console.log(obj1.year)

// obj1.start()
// obj1.yom()
// obj1.displayCar()
// obj1.stop()

//BMW object
let obj2=new bmw("BMW","RED","I3",2020)

// obj2.start()
// obj2.displayCar()
// obj2.stop()
// obj2.yom()
// console.log(obj2.name)

let obj3:car=new Honda("civic","Black","Honda",2020)

obj3.displayCar()
obj3.start()
obj3.stop()
//obj3.yom()  // not accessible