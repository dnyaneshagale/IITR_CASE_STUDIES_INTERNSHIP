// My solution =>
/*
type CustomerID = string;
type OrderStatus = "pending" | "shipped" | "returned";

type Customer = {
    id : CustomerID;
    name : string;
    email? : string;
}

type processOrder = (
    orderId: number,
    callback: (status: OrderStatus) => void
) => void;

type Container<T> = {
    value : T;
}

const customerContainer: Container<Customer> = {
    value: {
        id: "101",
        name: "Dnyanesh",
        email: "dnyanesh@zxy.com"
    }
};

console.log(customerContainer);
 */
var consoleLogger = function (msg) { return console.log("[LOG] ".concat(msg)); };
var customer = { id: "C123", name: "Alice" };
var processOrder = function (status) {
    consoleLogger("Order is now ".concat(status));
};
processOrder("pending");
// 4. Wrap Customer in Container<T>
var customerContainer = {
    value: customer,
    timestamp: new Date()
};
console.log(customerContainer);
/*
KEY TAKEAWAYS =>
8. Quick Recap & Key Takeaways
Type Aliases = named templates for any TypeScript type.

Cover primitives, unions, tuples, objects, functions, and generics.

Improve code readability, reuse, and consistency.

Keep aliases focused, meaningful, and well‐named.

 */ 
