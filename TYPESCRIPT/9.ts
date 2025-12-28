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




// Given solution =>
type Logger = (message: string) => void;
const consoleLogger: Logger = msg => console.log(`[LOG] ${msg}`);
type OrderStatus = "pending" | "shipped" | "returned";

// 1. Primitive Alias for CustomerID
type CustomerID = string;

// 2. Object Alias for Customer
type Customer = {
    id: CustomerID;
    name: string;
    email?: string;
};
let customer: Customer = { id: "C123", name: "Alice" };

// 3. Function Type Alias for processOrder
type OrderCallback = (status: OrderStatus) => void;
const processOrder: OrderCallback = status => {
    consoleLogger(`Order is now ${status}`);
};
processOrder("pending");

type Container<T> = {
    value : T;
    timestamp : Date;
}

// 4. Wrap Customer in Container<T>
let customerContainer: Container<Customer> = {
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