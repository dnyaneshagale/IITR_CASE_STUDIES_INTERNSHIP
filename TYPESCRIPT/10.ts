// My Challenge
function checkSign(num:number) : void {
    if (num > 0) {
        console.log("The number is positive");
    }
}

function evenOrOdd(num:number) : void {
    if (num % 2 === 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
}

function getGrade(score:number) : string {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function provideFeedback(grade:string) : void {
    if (grade === "A") {
        console.log("Excellent work!");
    } else if (grade === "B") {
        console.log("Good job!");
    } else if (grade === "C") {
        console.log("You passed.");
    } else if (grade === "D") {
        console.log("Needs improvement.");
    } else if (grade === "F") {
        console.log("Failed. Better luck next time.");
    }
}

checkSign(10);
evenOrOdd(7);
console.log(getGrade(85));
provideFeedback(getGrade(85));

/*
KEY TAKEAWAYS:
7. Common Pitfalls & Best Practices
Always include braces {} even for single statements: avoids errors when adding lines later.

Use strict equality === for comparisons to avoid type coercion bugs.

In switch, always add a default case and break after each case.

Order else if from most to least restrictive to ensure correct branch selection.

Keep each decision block focused on a single rule for readability.

8. Quick Recap & Key Takeaways
if for single checks.

if…else for two‐way branching.

else if for multiple conditions.

switch for selecting among discrete values.

Organize decision logic into small, reusable functions for clarity and maintainability.
 */