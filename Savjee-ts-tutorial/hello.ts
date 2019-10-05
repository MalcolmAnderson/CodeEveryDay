function greeter(person: string): string {
  return "Bonjour, " + person;
}

// using a void return type
function logGreeter(person: string): void {
  console.log("Bonjour, " + person);
}

enum Directions {
  Up,
  Down,
  Left,
  Right
}

let joystickStatus = Directions.Down;
console.log(joystickStatus);

var user = "Jane User6";

console.log(greeter(user));
