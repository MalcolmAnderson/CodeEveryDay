Understand the difference between let and const  
https://tylermcginnis.com/var-let-const/

	var - variable declaration
	var creates a function scoped variable
	
let is block scoped. and declarations are hoisted to the top of the block, however the initialization of the variable is **not** hoisted, so referening a let varable before the initialization will result in a reference error.
	
hoisting
	all var declaration are "hoisted" to the top of the function to be global to the function.  variables delared with "var" are **not** block scoped.

	declarations **without** being proceeded by "var" are hoisted to a global scope.
	
const variables prevent reassignemnt of the varables.
	but with reference objects, making changes to the properties or contents of the variable is not considered a change.
	My current thinking is that this is a lock on the **address** of the reference varibale (like arrays and objects.)
	const variables are not immutable, they just can't be reasigned.
	
"Best Practice" is to use const everywhere if possible, unless the varibale is going to change, like in a for loop.