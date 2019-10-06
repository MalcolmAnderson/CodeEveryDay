// lastName is optional - but no default value
function greet1(firstName: string, lastName?: string): void{
    console.log("Hello, " + firstName + " " + lastName);
}

// lastName is optional - with a default value
function greet2(firstName: string, lastName: string = "Smith"): void{
    console.log("Hello, " + firstName + " " + lastName);
}

greet1("Xavier", "Something");
greet1("Xavier");

greet2("Xavier", "Something");
greet2("Xavier");