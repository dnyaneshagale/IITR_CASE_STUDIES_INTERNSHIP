// Number
let age: number = 30;
let marks: number = 30.5;
let hex: number = 0xff;
let binary: number = 0b1010;

// String
let first_name: string = 'John';
let last_name: string = "Doe";
let full_name: string = `${first_name} ${last_name}`;

// Boolean
let isReady: boolean = true;

// Symbol
const UNIQUE_KEY = "xyZhs2hs255jhg";
let obj = { [UNIQUE_KEY]: "SecretValue" };

// Null & Undefined
let empty: null = null;
let undef: undefined;

// Object
let person: object = { name: "Bob" };

//Void
function log(): void {
    console.log("log");
}

//Never
function fail(): never {
    throw new Error("This always fails");
}

// Challenge for me
function processTransaction(amount: number, description?: string, isCredit: boolean = false): never | void {
    if (amount < 0) {
        throw new Error("Amount cannot be negative");
    }

    const finalDescription = description ?? "No description provided";

    const status = isCredit ? "credited" : "not credited";

    console.log(
        `The amount of ${amount} regarding ${finalDescription} is ${status}.`
    );
}

let amount: number = 5000;
let description: string | undefined = undefined;
let isCredit: boolean = true;

processTransaction(amount, description, isCredit);

/*
KEY TAKEAWAYS :
7. Common Pitfalls & Best Practices
Always specify types for variables and function parameters.

Handle null and undefined explicitly to avoid bugs.

Use never only for truly unreachable code.

Prefer objects for structured data; use symbols for unique keys.

8. Quick Recap & Key Takeaways
TypeScript’s built-in types cover all common values and behaviors.

Strong typing prevents many runtime errors.

Each type has a clear purpose and usage.

9. Optional: Programmer’s Workflow Checklist
Use explicit types for all variables and function parameters.

Handle special values (null, undefined, never) with care.

Use objects and symbols where appropriate.

Test for edge cases (missing values, errors).
 */