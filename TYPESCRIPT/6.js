var _a;
// Number
var age = 30;
var marks = 30.5;
var hex = 0xff;
var binary = 10;
// String
var first_name = 'John';
var last_name = "Doe";
var full_name = "".concat(first_name, " ").concat(last_name);
// Boolean
var isReady = true;
// Symbol
var UNIQUE_KEY = "xyZhs2hs255jhg";
var obj = (_a = {}, _a[UNIQUE_KEY] = "SecretValue", _a);
// Null & Undefined
var empty = null;
var undef;
// Object
var person = { name: "Bob" };
//Void
function log() {
    console.log("log");
}
//Never
function fail() {
    throw new Error("This always fails");
}
// Challenge for me
function processTransaction(amount, isCredit, description) {
    if (amount < 0) {
        throw new Error("Amount cannot be negative");
    }
    var finalDescription = description !== null && description !== void 0 ? description : "No description provided";
    var status = isCredit ? "credited" : "not credited";
    console.log("The amount of ".concat(amount, " regarding ").concat(finalDescription, " is ").concat(status, "."));
}
var amount = 5000;
var description = undefined;
var isCredit = true;
processTransaction(amount, isCredit);
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
