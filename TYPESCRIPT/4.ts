// Syntax of let:
// let var_name: var_type = value;


// Example:
let car_name: string = "Brezza";
let car_price: number = 1000000;
console.log(car_name);   // Output: Brezza
console.log(car_price);  // Output: 1000000

// Syntax:
//
//const var_name: var_type = value;
// Example:
const lang: string = 'TypeScript';
const PI: number = 3.14;
console.log(`Language: ${lang}`);      // Output: Language: TypeScript
console.log(`Value of PI: ${PI}`);     // Output: Value of PI: 3.14

// My challenge
let score:number = 10;
const COUNTRY:string = "INDIA";

if(1) {
    score = 9;
    // COUNTRY = "BHARAT"; // Shows error
    console.log(`Score: ${score}`);
    console.log(`Country: ${COUNTRY}`);
}

/*
8. Common Pitfalls & Best Practices
Always initialize const variables when declaring them.

Use let for variables that change, const for variables that never change.

Don’t try to access block-scoped variables outside their block.

Never redeclare a let or const variable in the same scope.

Prefer const by default for safety; use let only when necessary.

8. Quick Recap & Key Takeaways
let and const provide block scope and prevent accidental redeclaration.

Use let for variables that may change, const for values that should never change.

Both let and const are safer and more predictable than traditional variable declarations.

Always initialize const variables and avoid reassigning them.

9. Optional: Programmer’s Workflow Checklist
Use let for variables that may change.

Use const for variables that should never change.

Never redeclare a variable with let or const in the same scope.

Always initialize const variables.

Keep variable scope as small as possible (prefer block scope).

Test variable access inside and outside blocks to understand scope.
 */


