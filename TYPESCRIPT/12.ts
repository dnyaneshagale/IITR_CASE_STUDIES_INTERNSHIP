class Member {
    id: number;
    name: string;
    email?: string;
}

let members:Member[] = [
    {id: 1, name: "Alice", email: "alice@eg.com"},
    {id: 2, name: "Bob"}
];

function displayMember(id:number, name?:string, email?:string) : void {
    for (let i = 0; i < members.length; i++) {
        if (members[i].id === id) {
            name = members[i].name;
            email = members[i].email;
            console.log("ID:", id, "Name:", name, email);
            break;
        }
    }
}

let fines: number[] = [5, 10, 2.5];

function calculateFines() : number {
    let totalFine: number = 0;
    for (let i = 0; i < fines.length; i++) {
        totalFine += fines[i];
    }
    return totalFine;
}

function computeFees(price:number, discountRate:number=0.1):number {
    return price - (price * discountRate);
}

function vipGreet(name:string) : void {
    console.log("Welcome, " + name + " our VIP member!");
}

function consoleGreet(name:string) : void {
    console.log("Welcome, + " + name + " !");
}

function factorial (n:number) : void {
    let result: number = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    console.log(`Factorial of ${n} is ${result}`);
}

displayMember(1);
displayMember(2);

console.log("Total fines:", calculateFines());

console.log("Fee after discount:", computeFees(100));
console.log("Fee without discount:", computeFees(100, 0));

vipGreet("Alice");
consoleGreet("Bob");

factorial(5);

function generateReport(data: object[]): string;
function generateReport(data: object[], format: "json"): string;
function generateReport(data: any[], format?: string): string {
    if (format === "json") {
        return JSON.stringify(data, null, 2);
    }
    return data.map(item => JSON.stringify(item)).join("\n");

}

const books = [
    { title: "1984" },
    { title: "The Hobbit" },
    { title: "Brave New World" }
];
const textReport = generateReport(books);
console.log(textReport);

const jsonReport = generateReport(books, "json");
console.log(jsonReport);


