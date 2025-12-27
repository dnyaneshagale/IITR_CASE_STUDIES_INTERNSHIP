enum Role {Doctor, Nurse, Admin}

interface Staff {
    id: number;
    name: string;
    role: Role;
}

let staffMembers : Staff[] = [{
id : 1, name : "Dnyanesh", role : Role.Admin}
];

function printSummary(staff:Staff) {
    console.log("ID:", staff.id , "Name:", staff.name, "Role:", staff.role);
}
printSummary(staffMembers[0]);


/*
KEY TAKEAWAYS :
7. Common Pitfalls & Best Practices
Use interfaces to define object shapes for clarity and safety.

Prefer enums for related constants instead of plain numbers or strings.

Use tuples only when element order and type are fixed and meaningful.

Organize related data in arrays for easy processing.

Use classes for objects with both data and behavior.

8. Quick Recap & Key Takeaways
User-defined types (arrays, tuples, enums, interfaces, classes) help you model real-world data safely and clearly.

They make your code more maintainable, scalable, and expressive.

Organize your data structures with type safety for fewer bugs and easier collaboration.

9. Optional: Programmer’s Workflow Checklist
Use enums for related sets of constants.

Define interfaces for all complex objects.

Use arrays for collections of similar items.

Use tuples for fixed-structure, ordered data.

Use classes for objects that combine data and methods.

Always annotate types for clarity and safety.
 */