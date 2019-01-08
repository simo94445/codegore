// The following string enables the new JS. Only comments can be above this, otherwise it's ignored.
"use strict"


// ===========================================================Variables
// To declare variables we do this:
//
// let aNum;
// aNum = 3;
//
// This can also be done like this:
//
// let aNum = 3;
//
// We can do multiple variables at once, like this:

/*
let aNum = 3,
aDifferentNum = 2,
aString = "hello";
*/

// Variables can be named using letters, digits, and the symbols $ and _. The first character cannot be a number. Reserved named cannot be used either, such as 'let' or 'class'.


// We can have constants too, they are written as:
//
// const myConstant = "can't change me"
//
// It's common practice to use uppercase constants as aliases to make life easier. 'const COLOR_RED = "#F00";' lets us use the color RED without remembering the hex value. Uppercase constants are used for precomputed or known values, ie pageLoadTime isn't known prior to program execution, so it's written in lowercase, while the color RED is constant.
//
//
// You can denote strings using "", '', and ``. "" and '' does the same job, but `backticks` allows us to insert varibales or expressions into a string, such as:

/*
let name = "Sir"
alert(`hello you, your name's ${name} innit?`)
*/

// ==========================================================Data types
// You can figure out datatypes of variables by calling the typeof operate.
//
// typeof x
// typeof(x)
//
// This returns a string with the datatype. Functions are Objects in Javascript, but typeof treats them differently. Null returns Object too, that's wrong, too.

/*
let a = "Nuwdhauijd";
alert( `hello ${"bitch"}` ); // returns "hello bitch"
alert( `hello ${a}` ); // returns "hello Nuwdhauijd"
alert( `hello ${1}` ); // returns "hello 1"
*/

// You can convert datatypes, ie use the toString, toBoolean or toNumber operate like this:
//
// value = String(value);
// value = Number(value); <--- Strings is read as is, whitespaces are ignored.
// value = Boolean(value); <--- Empty strings return false, as does null, NaN, 0 and Undefined. 1 returns true.
//
// This turns the value into a string, no matter the datatype.



// =============================================================Operators
// Operaters applies to operands. 1*3 has two operands, the left operand is 1, the irght operand is 3. Operands are also called arguments.
// An operator is unary if it has only a single operand. ie:
//
// let x = 5;
// x = -x; <--- -1, unary negation was applied.
//
// An operator is binary if it has two operands. ie:

/*
let x = 1,
y = 2;
alert( y - x  ); <--- 1, binary minus subtracts values.
*/

// Here we're talking about two different operators, the unary negation (single operand, reverses the sign) and the binary subtraction (two operands, - subtracts here).
// If one of the operands is a string while doing binary +, all operands' datatype is converted to string. If the binary + is applied to strings, it merges (concatenates) them. This looks like this:
//
// "1" + 2; <--- 12
// "10" + 11; <--- 1011
// "hello " + "world"; <---- hello world
//
// String concatenation and conversion is  a feature of the binary "+". Other operators only work with numbers, as they always convert their operands to numbers. ie:
//
// "1" - 1; <--- 0
// "200" / "2"; <--- 100
//
// The unary plus, when a + is applied to a single value, doesn't do anything with numbers, but if the operand isn't a number, it's converted into one, just like with number(x);. ie:
//
// +true; <--- 1
// +""; <--- 0
//
// This is useful if we receive strings from HTML we want to use as numbers. Example:

/*
let foo = "2"
let bar = "4"
alert( +foo + +bar ); <--- 6. Without unary +, it would return 24. Number(x) would've done just the same thing, but would take up much more space and time.
*/

// Unary pluses are applied to values before binary plusses, this is because of their higher precedence.
// For the full precedence table: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence .
// Generally the unary operators have higher precedence than their corresponding binary ones.
//
// ==========================================================Assignment
// Assignment, "=", is also an operator, it has a very low precedence of 3. That's why varibles like x = 2 * 2 + 2 has the calculations done first before storing the result in x. You can do chained assignments like this:
//
// let a, b, c
// a = b = c = 5 + 5; <--- a, b and c's values are all 10.

// Assignments always return a value, even if you do an asignment inside an assignment. ie
/*
let a = 1,
b = 2,
c = 3 - (a = b + 1); //This makes a = 3, and c = 0.
*/

// To do modulus, you use %
//
// 5 % 2; <--- 1.
//
// To do exponentiation, you use **
//
//
// 2 ** 3; <--- 8 because 2^3=8
// 4 ** (1/2); <--- This is the same as the sqrt of.
//
// To do increments and decrements, use ++ and -- respectively. They can only be applied to variables. Increments and decrements are both operators, and all operators return a value. If you use ++variable or --variable, the prefix form returns the new value, while the postfix form returns the old value(this is prior to increment/decrement). An example for prefix form:

/*
let counter = 1;
let a = ++counter; <--- (*) this is prefix form
alert(a); <--- 2
*/

// In short, if we want to increment/decrement the value AND use the result of the operator right now, we need the prefix form. If we wnat to decrement/increment but use the old value, we use the postfix form.
//
// =========================================================Bitwise operators
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
//
//
// We can do the += -= *= thing in javascript too. "modify and assign operators"
//
// Commas have very low precedence, what they do is allow you to run multiple operations, but only return the result of the very last operation.
// In javascript we can od the < > <= >= == != things too.
// When comparing strings, the strings are evaluated letter by letter, ie "a < "b", "o" > "a", "Glow" > "Glee".
//
// You can use the strict equality oprator, ===, that checks equality without type conversion. This is useful when you want to differentiate between 0 and false, and "" and false, undefined and null.
//
// Equality check == and comparisons < > >= <= work differently, comparisons convert null to a number, treats it as a zero, hence null >= 0 is true, but null == 0 and null > 0 is false. == works by rule, without any conversions, so they return true.
// Just be very careful when using comparisons with undefined or null.
//
//
// ==================================================Alert, prompt and confirm
//
// alert(message) alerts user, it opens a modal window (visitor can't interact with rest of page until the alert has been dealt with.)
//
// result = prompt(title[, default]); shows a modal window with a text message, and an input fielt for the visitor, with the buttons OK/CANCEL.
// alert(`Hello ${result}, you sure are a thing`); <--- Hello default, you sure are a thing
//
// Function confirm shows a modal window with a question and two buttons: OK and CANCEL.
// The result is true if OK is pressed and false otherwise.
// For example:
//
// let isBoss = confirm("Are you the boss?");
// alert( isBoss ); // true if OK is pressed

/*
const prompt = require('electron-prompt'); <--- we need "npm install electron-prompt --save" to do this
prompt({
    title: 'Name Assignment',
    label: 'Name Prompt',
    value: 'Enter your name boi',
    inputAttrs: {
       type: 'string'

     }
})
.then((r) => {
    if(r === null) {
        console.log('user cancelled');
    } else {
        alert(`Hello, ${r}, how are you?`);
    }
})
.catch(console.error);
*/

// If and Else works as they use to. if (args){code}else if{code}else{code}
//
// We can use the Ternary Operator "?" instead of the if statement for shorter code in some instances. This looks like:
//
// let result = condition ? value1 : value 2;
//
// This is read as condition ? _do this if true_ : _do this if false_;
// We can have multiple ?, which can be done like this:

/*
let age = prompt('age?', 18);
let message = (age < 3) ? 'hello young one.' :
(age < 18) ? 'hello older one' :
(age < 100) ? 'hello elderly' :
'hello the eldest of us';
alert( message );
*/

// This is kind of like if / else if / else tests, if the test returns false it moves onto the next test.

/*
const prompt = require('electron-prompt'); //<--- we need "npm install electron-prompt --save" to do this
prompt({
    title: 'Login',
    label: 'Enter Login Credentials',
    value: 'Enter your username boi',
    inputAttrs: {
        type: 'string'
     }
 })
 .then((r) => {
     if(r === null) {
         console.log('user cancelled');
     }else if (r === "admin"){
         prompt({
             title: 'login',
             label: 'Enter Login Credentials',
             value: 'Enter your password boi',
             inputAttrs: {
                 type: 'string'
             }
         })
             .then((r) => {
                 if(r == "12345"){
                     alert("Hello and welcome, it's all fine and good");
                 } else{
                     alert("Wrong password boi");
                 }
             })
         .catch(console.error);
     }
     else{
         alert("I don't know you, nice to meet you though.");
     }
 })
.catch(console.error);
*/

// ===============================================================Logical Operators
// OR "||" returns true if just one of the operands return true. This can look like this:

/*
let hour = 9;
if (hour < 10 || hour > 18){ // you can use more than just one || bro
    alert( "The office is closed" );
}
*/

// When multiple || are used, the operator evaluates the operands from left to right, each operand is converted to boolean, if the result is true, it stops and returns the original value of the operand.
// If all other operands have been assessed, (ie they were all false), return the last operand.
// This means that if an operand returns true in the chain of ||, it returns the first true value. If none of them are true, all are false, the last operand is returned.
// A value is returned in its original form, not converted to a boolean. Like this:

/*
alert( 1 || 0 ); // 1 (1 is truthy)
alert( true || 'no matter what' ); // (true is truthy)
alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)
alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)
*/

// This can be used like this, too:

/*
let x;
false || (x = 1); // The first statement is false, so it moves onto the next, which makes x = 1.
alert(x); // 1

let x;
true || (x = 1); // The first statement is true, so it stops there and does not assign x any value.
alert(x); // undefined
*/

// The rules for && is about the same, except that AND returns the first false value, while OR returns the first true value. Example:

/*
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
alert( 1 && 2 && null && 3 ); // null
alert( 1 && 2 && 3 ); // 3, the last one, as they all return true.
*/

// The precedence of && operator is higher than ||, so it executes first. ie: alert( 5 || 1 && 0 ); // 5, 1 && 0 is evaluated first, but 0 is false, so it returns 5.

/*
let x = 1;
(x > 0) && alert( 'Greater than zero!' ); // The action in the right part of && would execute only if the evaluation reaches it. That is: only if (x > 0) is true.
*/

// NOT "!" works like usual, you can have two of them to return the boolean type of something. example:

/*
alert( !true ); // false
alert( !0 ); // true. A double NOT !! is sometimes used for converting a value to boolean type:
alert( !!"non‐empty string" ); // true
alert( !!null ); //false
*/

/*
let age = 90;
if (!(age >= 14 && age <= 90)){
    alert("not in range");
} else{
    alert("in range, noob");
}
*/

/*
if (-1 || 0) alert( "first" ); // This code runs because -1 evaluates to true.
if (-1 && 0) alert( "second" ); // This code doesn't run because 0 evaluates to false.
if (null || -1 && 1) alert ( "third" ); // This code runs too, because -1 && 1 evaluates to true.
*/

// While loops work as usual, you can have do while loops to. This lets you run the code at least once no matter whether the condition is true or false. It can look like this:

/*
let i = 0;
do {
alert( i );
i++;
} while (i < 3);
*/

// ================================================The for loop

// for loops are built like this

/*
for(begin, condition; step){ // begin executes once when entering the loop, condition is checked before every loop iteration, step executes after the body on each iteration, but before the condition check.
    // LOOP BODY, you do stuff here, this iterates as long as the condition is true.
}
*/

// This loop runs alert(i) for i from 0 up to 10, excluding 10.

/*
for(let i = 0, i < 10; i++){
    alert(i);
}
*/

// The variable i in the previous examples are inline, that is they're declared inline variables. i cannot be called outside of the loop body. You can use variables outside of the loop though.
// Had we already declared i, we could replace "let i = 0" with ";". We can do some crazy shit too, like this:

/*
let i = 0
for (; i < 3;){
alert(i++);
}
*/

// That shit runs like a while loop (while i < 3).
// We can create infinite loops by for(;;){}, that will run over and over.
// You can break out of the loop with "break;" like this:

/*
let sum = 0;
while (true) {
    let value = +prompt("Enter a number", '');
    if (!value) break; // If the user fails to enter an input, it breaks the loop.
    sum += value;
}
alert( 'Sum: ' + sum );
*/

// "continue" does about the same thing, except it skips the current iteration and continues if the condition allows it to. That looks a bit like this:

/*
for (let i = 0; i < 100; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
    alert(i); // 1, then 3, 5, 7, 9, skipping every other number.
}
*/

// We can use labels to break nested loops, like this

/*
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; // (*)
        // do something with the value...
    }
}
alert('Done!');
*/

// =======================================The switch statement
// Switch statements can replace multiple if checks. The syntax is like this:

/*
switch(x) {
    case 'value1':
        ...
        [break]
    case 'value2':
        ...
        [break]
    default:
        ...
        [break]
}
*/

// If there's no break;, the execution continues with the next case without any checks.

// ============================================= Functions boiiiiiiii
// Functions are blocks of code to run when called, like we know them. The syntax is:

/*
function showMessage(){
    alert( "Welcome to functions, this function has been called with no parameters and it wouldn't care if you put any parameters in it." );
}
showMessage();
*/

/*
function showMyMessage(string, times){
    for(;times > 0; times--){
        alert(string); // example of using parameters here, lel
    }
}
showMyMessage("hello boi", 5); // shows 5 alerts with "hello boi".
*/

// Variables declared inside functions are local variables, that is they only exist inside the function they're called in. You can use global variables in functions though.
// You can use "return" to return a value from a function, like we use to.

/*
function min(arg1, arg2){
    if(arg1 > arg2){return arg1;} else{return arg2;}
}
alert(min(5,2));
*/

/*
function pow(arg1, arg2){
    return (arg1**arg2)
}
alert(pow(3, 2));
*/

// =====================================Callback functions
// I'm just inserting some code here, I'll know what I mean.

/*
function ask(question, yes, no) {
if (confirm(question)) yes()
    else no();
}
function showOk() {
    alert( "You agreed." );
}
function showCancel() {
    alert( "You canceled the execution." );
}

// Can be written much shorter by:


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Do you agree?",
    function() { alert("You agreed."); }, // anonymous functions boiiii
    function() { alert("You canceled the execution."); }
); // Just call using anonymous functions, that's the spirit of JS apparently.
*/

/*
// An example of a Function Declaration:
function times(a, b) {
    return a * b;
}

// An example of a Function Expression
let times = function(a, b){
    return a * b;
}
*/

// Function Declarations can be called earlier than it's defined. Function declarations are read first, sort of like an initialization stage, where function expressions can only be called after they have been defined.

// ===============================================Arrow Functions
// You can do arrow functions pretty easily like this:

/*let myFunc = ( arg1, arg2, ...argN ) => expression;*/

// This can be interpreted like this:

/*
let myFunc = function (arg1, arg2, ...argN){
    return expression;
}

// use case could be:

let power = ( x, y ) => a ** b;
alert( power(5, 5) ); // This is like our power of function earlier, just prettier and shorter.


// for multiline functions:

let sum = (a, b) => {
return a + b;
}; // Remember to end with semicolon because it's an expression not a declaration.
alert(sum(5,2));
*/

/*
let ask = (question, yes, no) => {
    (confirm(question))?yes():no();
};

ask(
    "Do you concur boii?",
    () => { alert("It seems you don't need me gentlement"); },
    () => { alert("It seems you didn't concur. You should've concurred."); }
);
*/

// ==================================================== I should probably learn how to do automated testing with Mocha.

