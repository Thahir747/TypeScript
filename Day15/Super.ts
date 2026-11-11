// super() -- used to invoke immediate parent class constructor
// super  -- used to invoke immediate parent class method
// super cannot be used to invoke parent class property, in java it is possible

class Parent {
    nuj:number=78

    constructor(){
        console.log("this is parent constructor")
    }

    display(){
        console.log("Display method from parent")
    }
}

class ch extends Parent{

    nuj:number=45  //overrided

    constructor(){
        super()     // invoke parent constructor -- mandotory
        console.log("this is child constructor")
    }

    show(){

        //console.log(super.nuj)    // ts doesnt support .. in java 
        console.log(this.nuj)
        console.log("Display method from child")
    }

    display(){  //overrided
        super.display()  // invoke parent class display also executed
       // console.log("this is child display")
    }
}

let c1=new ch()

//c1.show()
c1.display()



