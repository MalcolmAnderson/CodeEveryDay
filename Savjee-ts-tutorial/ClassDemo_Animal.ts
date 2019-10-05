class Animal {
  private name: string;

  constructor(theName: string) {
    this.name = theName;
  }

  walk(distance: number) {
    console.log(`Hi, my name is ${this.name} and I\'m walking ${distance} meters`);
  }
}

let myAnimal = new Animal("Dave");
myAnimal.walk(10);
