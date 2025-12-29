var Member = /** @class */ (function () {
    function Member() {
    }
    return Member;
}());
var members = [
    { id: 1, name: "Alice", email: "alice@eg.com" },
    { id: 2, name: "Bob" }
];
function displayMember(id, name, email) {
    for (var i = 0; i < members.length; i++) {
        if (members[i].id === id) {
            name = members[i].name;
            email = members[i].email;
            console.log("ID:", id, "Name:", name, email);
            break;
        }
    }
}
var fines = [5, 10, 2.5];
function calculateFines() {
    var totalFine = 0;
    for (var i = 0; i < fines.length; i++) {
        totalFine += fines[i];
    }
    return totalFine;
}
function computeFees(price, discountRate) {
    if (discountRate === void 0) { discountRate = 0.1; }
    return price - (price * discountRate);
}
function vipGreet(name) {
    console.log("Welcome, " + name + " our VIP member!");
}
function consoleGreet(name) {
    console.log("Welcome, + " + name + " !");
}
function factorial(n) {
    var result = 1;
    for (var i = n; i > 1; i--) {
        result *= i;
    }
    console.log("Factorial of ".concat(n, " is ").concat(result));
}
displayMember(1);
displayMember(2);
console.log("Total fines:", calculateFines());
console.log("Fee after discount:", computeFees(100));
console.log("Fee without discount:", computeFees(100, 0));
vipGreet("Alice");
consoleGreet("Bob");
factorial(5);
function generateReport(data, format) {
    if (format === "json") {
        return JSON.stringify(data, null, 2);
    }
    return data.map(function (item) { return JSON.stringify(item); }).join("\n");
}
var books = [
    { title: "1984" },
    { title: "The Hobbit" },
    { title: "Brave New World" }
];
var textReport = generateReport(books);
console.log(textReport);
var jsonReport = generateReport(books, "json");
console.log(jsonReport);
