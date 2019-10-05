"use strict";
function greeter(person) {
    return "Bonjour, " + person;
}
// using a void return type
function logGreeter(person) {
    console.log("Bonjour, " + person);
}
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
var joystickStatus = Directions.Down;
console.log(joystickStatus);
var user = "Jane User6";
console.log(greeter(user));
