// describePerson function
function describePerson(name, age) {
    if (age !== undefined) {
        console.log("Name: ".concat(name, ", Age: ").concat(age));
    }
    else {
        console.log("Name: ".concat(name, ", Age: Unknown"));
    }
}
// calculatePrice function
function calculatePrice(basePrice, discount) {
    if (discount === void 0) { discount = 0.1; }
    return basePrice - basePrice * discount;
}
// Test calls
describePerson("Eve");
describePerson("Frank", 28);
console.log(calculatePrice(100)); // 90
console.log(calculatePrice(100, 0.2)); // 80
