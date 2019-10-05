function greeter(person: string): string {
  return "Bonjour, " + person;
}

// using a void return type
function logGreeter(person: string): void {
  console.log("Bonjour, " + person);
}

// Text, string
let myName: string = "Malcolm";

// Normal strings
let greeting: string = "Hello, " + myName;
// Template strings (must use ` (lower case ~) and $)
let greeting2: string = `Hello, ${myName}`;

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
