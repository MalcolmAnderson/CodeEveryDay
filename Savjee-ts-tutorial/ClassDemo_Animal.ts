abstract class Animal {
  private name: string;
  

  constructor(theName: string) {
    this.name = theName;
  }

  walk(distance: number) {
    console.log(`Hi, my name is ${this.name} and I\'m walking ${distance} meters`);
  }
}

class Dog extends Animal {
    constructor(theName: string){
        super(theName);
    }
}

let myAnimal = new Dog("Dave");
myAnimal.walk(10);

class Snake extends Animal{
    constructor(theName: string){
        super(theName);
    }
    walk(distance: number){
        console.log("Snakes don't really walk");
    }
}
