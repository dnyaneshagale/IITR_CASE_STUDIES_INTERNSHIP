let surveyAnswer:  any;
surveyAnswer = "Yes";
surveyAnswer = 5;
surveyAnswer = ["Option A", "Option B"];

let allAnswers: any[] = [];
allAnswers.push("No");
allAnswers.push(10);
allAnswers.push({ comment: "N/A" });

for (let ans of allAnswers) {
    console.log("Received answer:", ans);
}


// CHALLENGE FOR ME :

function recordAnswer(qId:any, answer:any) {
    let recAns: any[] = [];
    recAns.push(qId);
    recAns.push(answer);

    for (let ans of recAns) {
        console.log("Received answer:", ans);
    }
}

let qId:any = 1;
let answer:any = "any can hold any type of dataType";
recordAnswer(qId, answer);

qId = 2;
answer = "let should not be used for constants";
recordAnswer(qId, answer);

qId = 3;
answer = "constants cannot be modified after declaration";
recordAnswer(qId, answer);


/*
KEY TAKEAWAYS :
7. Common Pitfalls & Best Practices
Avoid using any unless truly necessary.

Document why you’re using any and plan to replace it.

Type-check values before using them (e.g., with typeof).

Use unknown if you want to force type checking before use.

8. Quick Recap & Key Takeaways
The any type is flexible but removes type safety.

Use any for dynamic or unknown data, but prefer specific types when possible.

Always validate or check the type of any values before using them.

9. Optional: Programmer’s Workflow Checklist
Use any only when you don’t know the type.

Replace any with a specific type as soon as you know the structure.

Check the value’s type before using it.

Document all uses of any for future refactoring.
 */