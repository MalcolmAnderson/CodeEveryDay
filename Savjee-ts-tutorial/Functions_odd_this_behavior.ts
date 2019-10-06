class Greeter{
    firstName = "Malcolm"
    // "this" gets lost
    sayHello(){
        setTimeout(function(){
            console.log("Hello, " + this.firstName);
        }, 500);
    }
}


class Greeter2{
    firstName = "Malcolm"
    // anonymous function doesn't get lost
    sayHello(){
        setTimeout(() => {
            console.log("Hello, " + this.firstName);
        }, 500);
    }
}

let bob = new Greeter();
bob.sayHello();

let tom = new Greeter2();
tom.sayHello();
