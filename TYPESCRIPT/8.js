var profile1 = {
    username: "AlexDoe",
    bio: null
};
var profile2 = {
    username: "SamSmith",
    bio: "Loves coding and coffee.",
    avatarUrl: "https://example.com/sam.jpg"
};
function showProfile(user) {
    console.log("Username: " + user.username);
    if (user.bio === null) {
        console.log("Bio: No bio provided.");
    }
    else {
        console.log("Bio: " + user.bio);
    }
    if (user.avatarUrl === undefined) {
        console.log("Avatar: default_placeholder.png");
    }
    else {
        console.log("Avatar: " + user.avatarUrl);
    }
}
showProfile(profile1);
console.log("---");
showProfile(profile2);
/*
KEY TAKEAWAYS :

7. Common Pitfalls & Best Practices
Don’t confuse null and undefined: Use null for intentional emptiness, undefined for “not set yet.”

Always check for both null and undefined when handling optional or missing values.

Use union types (type | null) for fields that can be empty.

Use optional properties (prop?: type) for fields that may be missing.

8. Quick Recap & Key Takeaways
null means “intentionally empty”; undefined means “not set yet.”

Use null for fields that are deliberately empty, and undefined for optional or not-yet-initialized values.

Always check and handle both cases in your logic for safe, predictable code.

9. Optional: Programmer’s Workflow Checklist
Use null for fields that are intentionally empty.

Use undefined for optional or not-yet-initialized fields.

Always check for both null and undefined before using a value.

Use union types and optional properties for flexibility.

Provide sensible defaults when displaying or using possibly missing values.
 */ 
