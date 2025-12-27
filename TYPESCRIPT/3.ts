var nameo: string = "John";
var score1: number = 50;
var score2: number = 42.50;
var sum = score1 + score2;
console.log("name: " + nameo);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);

// Type assertion
var str = '1';
var str2: number = <number><any>str;
console.log(typeof(str2));


// Variable scope
var global_num = 12; // global variable
class Numbers {
    num_val = 13; // class variable
    static sval = 10; // static field

    storeNum(): void {
        var local_num = 14; // local variable
    }
}
console.log("Global num: " + global_num);
console.log(Numbers.sval); // static variable
var obj = new Numbers();
console.log("Class num: " + obj.num_val);


// CHALLENGE FOR ME
var city:string = "Pune";
var temperature:number = 30;
var isRaining:boolean = false;

function weatherReport(city:string, temperature:number, isRaining:boolean):void {
    console.log("In " + city + ", it is " + temperature + "°C.");
    if (isRaining){
        console.log("It is Raining...");
    } else {
        console.log("It is not Raining...");
    }
}

weatherReport(city, temperature, isRaining);

/*
7. Common Pitfalls & Best Practices
Never start variable names with a number or use spaces.

Use type annotations for clarity and safety.

Don’t use reserved keywords as variable names.

Keep variable scope as small as possible to avoid bugs.

Use type assertions only when you are sure of the type.

8. Quick Recap & Key Takeaways
Variables are named storage locations in memory.

TypeScript enforces naming rules and strong typing.

You can declare variables with type, value, both, or neither.

Variable scope controls where a variable can be accessed.

Type assertion lets you tell the compiler how to treat a variable’s type.

9. Optional: Programmer’s Workflow Checklist
Use valid, descriptive variable names.

Declare types for variables when possible.

Assign values that match the declared type.

Understand and control variable scope.

Use type assertions responsibly.

Avoid using any unless absolutely necessary.

Test variable assignments and observe compiler errors.
 */