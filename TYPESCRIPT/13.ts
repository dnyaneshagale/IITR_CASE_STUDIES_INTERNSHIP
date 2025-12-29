// describePerson function
function describePerson(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Name: ${name}, Age: ${age}`);
    } else {
        console.log(`Name: ${name}, Age: Unknown`);
    }
}

// calculatePrice function
function calculatePrice(basePrice: number, discount: number = 0.1): number {
    return basePrice - basePrice * discount;
}

// Test calls
describePerson("Eve");
describePerson("Frank", 28);

console.log(calculatePrice(100));      // 90
console.log(calculatePrice(100, 0.2)); // 80
