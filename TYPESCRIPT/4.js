// Syntax of let:
// let var_name: var_type = value;
// Example:
var car_name = "Brezza";
var car_price = 1000000;
console.log(car_name); // Output: Brezza
console.log(car_price); // Output: 1000000
// Syntax:
//
//const var_name: var_type = value;
// Example:
var lang = 'TypeScript';
var PI = 3.14;
console.log("Language: ".concat(lang)); // Output: Language: TypeScript
console.log("Value of PI: ".concat(PI)); // Output: Value of PI: 3.14
// My challenge
var score = 10;
var COUNTRY = "INDIA";
if (1) {
    score = 9;
    // COUNTRY = "BHARAT"; // Shows error
    console.log("Score: ".concat(score));
    console.log("Country: ".concat(COUNTRY));
}
