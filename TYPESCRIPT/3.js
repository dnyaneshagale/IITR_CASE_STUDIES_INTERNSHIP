var nameo = "John";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("name: " + nameo);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);
// Type assertion
var str = '1';
var str2 = str;
console.log(typeof (str2));
// Variable scope
var global_num = 12; // global variable
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // class variable
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // local variable
    };
    Numbers.sval = 10; // static field
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval); // static variable
var obj = new Numbers();
console.log("Class num: " + obj.num_val);
// CHALLENGE FOR ME
var city = "Pune";
var temperature = 30;
var isRaining = false;
function weatherReport(city, temperature, isRaining) {
    console.log("In " + city + ", it is " + temperature + "°C.");
    if (isRaining) {
        console.log("It is Raining...");
    }
    else {
        console.log("It is not Raining...");
    }
}
weatherReport(city, temperature, isRaining);
