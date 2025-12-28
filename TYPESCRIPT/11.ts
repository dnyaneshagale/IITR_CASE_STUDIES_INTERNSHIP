type Transaction = {
    id: number;
    type: "checkout" | "return" | "cancelled" | "priority";
};

const transactions: Transaction[] = [
    { id: 1, type: "checkout" },
    { id: 2, type: "cancelled" },
    { id: 3, type: "return" },
    { id: 4, type: "priority" },
    { id: 5, type: "checkout" }
];

const inventory: { [title: string]: number } = {
    "The Hobbit": 3,
    "1984": 5,
    "TypeScript Guide": 2
};

const visitors: string[] = ["Alice", "Bob", "Carol"];

let countCheckout:number = 0;
let countReturn:number = 0;
let countCancelled:number = 0;
let countPriority:number = 0;

for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
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

console.log(`Checkouts: ${countCheckout}, Returns: ${countReturn}, Cancelled: ${countCancelled}, Priority: ${countPriority}`);
let i = 0;
while (true) {
    const transaction = transactions[i];

    if (transaction.type === "priority") {
        break;
    }
    i++;
}

let isSwitchedOff: boolean = true;
do {
    console.log("You have a missed call while you were away.");
} while (!isSwitchedOff);

for (let item in inventory) {
    inventory[item] = 0;
}


for (let i = visitors.length - 1; i >= 0; i--) {
    console.log(visitors[i]);
}

for (const name of [...visitors].reverse()) {
    console.log(name);
}

