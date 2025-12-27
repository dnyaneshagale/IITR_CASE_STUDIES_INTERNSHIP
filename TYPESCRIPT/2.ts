let message:  string  =  "Hello World";
console.log(message);

// Object Orientation in TypeScript
class Greeting {
    greet(): void {
        console.log("Hello World!!!");
    }
}

let obj = new Greeting();
obj.greet();

// Data Modeling & Code Walkthrough
let productName:  string  =  "Bananas";

function printProduct(name: string): void {
    console.log("Product: " + name);
}

// This function prints the product name
printProduct(productName);


class Store {
    open(): void {
        console.log("Store is open!");
    }
}
let store = new Store();
store.open();


// My challenge
let fruit:string = "Banana";
console.log(fruit);

function  doubleTheVal(num:number):void {
    console.log("DoubleTheVal: " + 2*num);
}

class Person {
    sayHello(): void {
        console.log("Hello!");
    }
}

let person = new Person();
person.sayHello();

/*
KEY TAKEAWAYS =>
7. Common Pitfalls & Best Practices
Don’t use invalid identifiers (e.g., starting with a number or using spaces).

Use comments to explain tricky code.

Indent and format your code for readability.

Don’t use reserved keywords as names.

Use classes and methods to organize related code.

8. Quick Recap & Key Takeaways
TypeScript syntax defines the rules for writing clear, structured programs.

Use variables, functions, classes, and comments to organize your code.

Follow identifier and keyword rules to avoid errors.

Use whitespace and indentation to make your code easy to read.

9. Optional: Programmer’s Workflow Checklist
Use valid identifiers for all variables and functions.

Add comments to explain code where needed.

Organize code into functions and classes.

Use the TypeScript compiler with helpful flags.

Format and indent code for readability.

Test your code by compiling and running it.

Avoid using reserved keywords as names.
 */