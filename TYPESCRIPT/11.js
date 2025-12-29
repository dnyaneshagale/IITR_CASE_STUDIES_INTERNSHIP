var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var transactions = [
    { id: 1, type: "checkout" },
    { id: 2, type: "cancelled" },
    { id: 3, type: "return" },
    { id: 4, type: "priority" },
    { id: 5, type: "checkout" }
];
var inventory = {
    "The Hobbit": 3,
    "1984": 5,
    "TypeScript Guide": 2
};
var visitors = ["Alice", "Bob", "Carol"];
var countCheckout = 0;
var countReturn = 0;
var countCancelled = 0;
var countPriority = 0;
for (var i_1 = 0; i_1 < transactions.length; i_1++) {
    var transaction = transactions[i_1];
    switch (transaction.type) {
        case "checkout":
            countCheckout++;
            break;
        case "return":
            countReturn++;
            break;
        case "cancelled":
            countCancelled++;
            break;
        case "priority":
            countPriority++;
            break;
        default:
            console.log("Unknown transaction type");
    }
}
console.log("Checkouts: ".concat(countCheckout, ", Returns: ").concat(countReturn, ", Cancelled: ").concat(countCancelled, ", Priority: ").concat(countPriority));
var i = 0;
while (true) {
    var transaction = transactions[i];
    if (transaction.type === "priority") {
        break;
    }
    i++;
}
var isSwitchedOff = true;
do {
    console.log("You have a missed call while you were away.");
} while (!isSwitchedOff);
for (var item in inventory) {
    inventory[item] = 0;
}
for (var i_2 = visitors.length - 1; i_2 >= 0; i_2--) {
    console.log(visitors[i_2]);
}
for (var _i = 0, _a = __spreadArray([], visitors, true).reverse(); _i < _a.length; _i++) {
    var name_1 = _a[_i];
    console.log(name_1);
}
