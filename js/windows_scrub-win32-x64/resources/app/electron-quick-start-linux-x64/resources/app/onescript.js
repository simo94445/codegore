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
/
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
// --//--
// ==================================================== Objects
// Objects are used to store keyed collections of varios datas, and more complex entities. Objects can be created using figure brackets {...}, with an optional list of properties.
// Properties are written as: "key: value" pairs, where the key is a string (property name) and the value can be _anything_.
// To understand Objects, we can imagine them as cabinets with signed files, storing data in its file by the key. It's easy to find a file by its name and to add or remove files.
// We can create empty objects with one of two syntaxes:

/*
let user = new Object(); // Object constructor syntax
let user = {}; // Object literal syntax, this is the usual way to create objects.
*/

// Here's an example of creating an object using the Object literal syntax.

/*
let user = { // create object
    name: "Sir", // by key "name" store value "Sir"
    age: 28,
    profession: "doctor"
}; // Close with semicolon because it's an exression not a declaration.
*/

// Properties have keys (known as names or identifiers) before the colon :, followed by a value. In the previous example, we have 3 properties with 3 different values.
/// Property values can be accessed using the dot notation like this:

//alert( user.name + " " + user.age + " " + user.profession  ); // Sir 28 doctor

// To remove a property, we use the delete operator like this:

// delete user.age;
// delete user.profession;
// Now user only has 1 property, that's name.

// You can have multiword properties, which work like this:

/*
let user = {};
user["one two"] = true;
alert(user["one two"]); // returns true
delete user["one two"];

// or

let user = {
    "one two" = true
}
alert(user["one two"]);
*/

// We can do computed properties, like so:

/*
let computer = prompt("What type of computer?", "SBC");
let computerstuff = {
    [computertype]: "Single-board computer",
};

alert ( computer.SBC ); // "Single-board computer" if computertype="SBC"

// or

let computer = prompt("What type of computer?", "SBC");
let computerstuff = {};
computerstuff[computertype] = "SBC"; // "Single-board computer"
*/

// We use dot notation if the property names are known and simple, and square brackets when it gets more complex.
// Properties of objects can have any name we desire, except  "__proto__". This is for historic reasons.
// While coding, we often use existing variables as values for property names, ie:

/*
function makeArgs(arg1, arg2){
    return {
        arg1: arg1,
        arg2: arg2,
    };
}
let args = makeArgs("a string", 42);
alert(args.arg1 + " " + args.arg2);

// There's a special property value shorthand to make life easier though:

function makeArgs(arg1, arg2){
    return {
        arg1,
        arg2,
    };
}
*/

// We can check for the existence of a property by just trying to access it. If it returns "undefined", it means that it doesn't exist. That's because nonexisting properties return undefined.

/*
let args = {};
alert ( args.nonexistigArg === undefined ); // returns true because that property doesn't exist.

// There's a cool way to do this though:

let args = {
    arg1: "foo",
    arg2: "bar",
};
alert( "arg1" in args ); // Returns true, args.arg1 exists
alert( "arg3" in args ); // returns false, no such property of args.
*/

// We can use for loops on properties of objects, like this:

/*
let args = {
    arg1: "an argument",
    arg2: "another argument",
    arg3: 232,
    arg4: true,
};

for(let myArgs in args){
    alert( myArgs ); // arg1, arg2, arg3, arg4
    alert( args[myArgs] ); // "an argument", "another argument", 232, true
}
*/

// The order of properties in an object is the same as they are added in, with exception of numbers. Integer numbers are sorted, other's appear in creation order. Here's an example:

/*
let objectWithNums = {
    "4": "Four",
    "7": "Seven",
    boneappletea: "example",
    "1": "One",
    "3": "Three",
    exreme: "no regrats",
};
for(let args in objectWithNums){
    alert(args); // 1 3 4 7 boneappletea exreme
    alert(objectWithNums[args]);
}
*/

// To counteract this, we can change the integer (integer property to non integer property) to ie: "+1" "+3" "+2" and call them by alert( +args );
//
// A variable does not store the object itself, but its "address in memory", which means that variables merely 'refer' to it. Ie:

/*
let objectivus = { key: "value" };
let variablus = objectivus;
variablus.key = "new value"; // Change the value of the object through the variable
alert(objectivus.key); // "new value", this is to show that variablus just refers to objectivus, instead of copying its values and creating a new variable.
*/

// Objects are only equal if they are the same object, two different objects are not equal, even though they're both empty, ie:

/*
let x = {};
let y = {};
alert( x==y ); false
alert( x===y ); false

// To show that an object is equal to itself:

let a = {};
let b = a;
alert( a==b ); // true
alert( a===b ); // true
*/

// An object contained in a constant can be changed, that's because const fixes the value to the constname, it merely contains a reference to an object that's modifyable. ie:

/*
const myConst = {
    key1: "Original O'key"
};
myConst.key1 = "New key"
myConst.key2 = "Adding another O'key"

for(let args in myConst){
    alert( args ); // key1 key2
    alert( myConst[args] ); // "New key" "Adding another O'key"
}
*/

// We can use Object.assign to copy values of objects to other objects, like this:

/*
let userTest = { name: "nice" };
let permissionTest = { R: true };
let permissionTest2 = { W: true };
Object.assign(userTest, permissionTest, permissionTest2); // Now user has name: "nice", R: true, W: true. Any existing values are overwritten by Object.assign();.

// We can clone easily like this:

let cloneMe = {
    value1: true,
    value2: "boii",
    exreme: 4,
    5: 6,
};

let clone = Object.assign({}, cloneMe);
*/

// ============================================================================= References inside Objects
// We now know that Objects can contain primitive values, but they can contain references to other objects, too. Like this:

/*
let objWithRef = {
    key1: "Hey a string!",
    key2: 24,
    anObject: {
        key1: "Hey another string!",
        key2: 35,
        another: true,
    }
};

alert ( objWithRef.key1 + " " + objWithRef.anObject.key1 ); // Hey a string! Hey another string!
*/

// To clone an object within an object, such that the clone does not contain a reference to the contained object, but actually has its own copy of said object, we do Deep Cloning.
// There's a standard algorithm for deep cloning that can do that for us, we can get that from the JavaScript library called lodash, the method is called _.cloneDeep(obj).
// Don't reinvent the wheel, use this:
// https://lodash.com/docs#cloneDeep

// ======================================================================= Object practice

/*
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
alert( user.name ); // undefined
*/

/*
function isEmpty(obj){
    for( let keys in obj ){
        return false;
    }
    return true;
}
//let emptyObj = { name: "hello" };
alert( isEmpty(emptyObj) ); // false
*/

/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

function sum(obj){
    let salarySum = 0;
    for(let keys in obj){
        salarySum += obj[keys];
    }
    return salarySum;
}
alert ("The sum is: " + sum(salaries)); // 390
*/

/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumerics(obj){
    for(let keys in obj){
        if(typeof obj[keys] == "number"){
            obj[keys] *= 2;
        }
        else{
            console.log(obj[keys] + " is not a number");
        }
    }
}
multiplyNumerics(menu);
alert(menu); // Multiplied the values by 2, without touching the string.
*/

// ======================================================== Garbage collector
// Reachable values cannot be deleted for obvious reasons, such as:
//
// Local variables and parameters of the current function
// Variables and parameters for other functions on the current chain of nested calls
// Global variables
// Some internal variables
//
// These are called roots.
//
// Any other values that are considered reachable if it's reachable from a root by a reference or by a chain of references.
// Like if there's an objsect inside a local variable, and the object has a property referencing another object, that object is considered reachable, and those that it references are also reachable.
//
// There's a background process in the JavaScript engine that monitors all objects and removes those that have become unreachable, that's called the Garbage Collector. Ie:

/*
let myVar = {
    key: "Everything's temporary.",
};
// We have an object referenced to by myVar now.
myVar = null;
// The object has been collected by the garbage collector now. The object's gone because it's unreachable.
// Had we set another variable, ie: "let myVar2 = myVar;", the object would still be reachable, and thus not be collected by the garbage collector.
*/

/*
function marry(man, woman){
    woman.husband = man;
    man.wife = woman;
    return{
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

// The function marries two objects by having them reference each other and returns a new object that contains them both. If we remove two references:

delete family.father;
delete family.mother.husband;

// The man becomes unreachable, and thus the garbage collector collects the object with no references it, freeing up memory.
// If we delete everything:
delete family;
// No references are made to neither the man or woman, so they are collected by the garbage collector. Even though the two objects might be referencing each other, they cannot exist if they aren't referenced by the global variable "family". That is, they have been unlinked from the root, no reference to them any longer, you can't reference family.anyone because it doesn't exist.
*/

// For further reading into garbage collection: http://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection http://v8project.blogspot.com/


// =============================================================== Symbol type
// By specification, object property keys can either be of string type, or symbol type. They can't be integers, nor booleans. So far we've only used strings, this is what symbols can give us though:

// Symbol values represent unique identifiers. This type of valye can be created using Symbol():

/*
let id = Symbol();
let id2 = Symbol("A description");
let id3 = Symbol("A description");
// Symbols are guaranteed to be unique, even if we have many symbols with the exact same descriptions, they are different values. The description is just a label, it doesn't affect anything.

console.log( id3 == id2 ); // false

// Strings and symbols are fundamentally different and should not occasionally convert one into another. Hence if we want to show a symbol, we have to convert it to a string, ie:

alert( id2.toString() ); // Symbol(id2);
*/

// We can create hidden properties of an object, that no other part of the code can occasionally access or overwrite. If we want to store an "identifier" for the object user, we can use a symbol as a key for it:

/*
let user = { name: "boi" };
let id = ("unique identifier");
user[id] = "Some ID Value";
alert( user[id] ); // we can access the data using the symbol as the key.
*/

// To use a symbol in an object literal, we need to use square brackets:

/*
let id = Symbol("unique ID");
let user = {
    name: "Boiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
    [id]: iwadjwuidj0q2ej0qdwh08hr08q3hfwh
};
*/

// Symbolic properties do not participate in for..in loops. You need direct access by the symbol ie: alert( "Direct: " + user[id] );
// This is the cool thing about Symbols, they are hidden.
// Object.assign does however copy both string and symbol properties. This works because when we clone or merge objects, we usually want all properties copied, including symbols.

// Global symbols are used to have same-named symbols to be the same entities. For example, different parts of our application wants to access symbol "id" meaning exactly the same propery. To do this, we need to use the Global Symbol Registry. We can create symbols in it and access them later, and it guarantees that repeated accesses by the same name return exactly the same symbol. To do this we use Symbol.for(key). This cal checks the global registry, and if there's a symbol described
// as a key, it returns it, otherwise it creates a new symbol and stores it in the registry by the given key. ie:

/*
let id = Symbol.for("id"); // Symbol is created here because it doesn't exist yet.
let anotherID = Symbol.for("id");
alert( id === anotherID ); // true
// Symbols inside this registry are called _global symbols_.
*/

// When using global symbols, not only Symbol.for(key) can be used to return a symbol by name, but you can return a name by symbol using Symbol.keyFor(sym). Ie:

/*
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
alert( Symbol.keyFor(Symbol.for("name")) ); // name
*/

// This works only for global symbols though, it works by looking up the key for the symbol inside the global symbol registry. If it cannot find a symbol, it returns undefined.

// ========================================================================== Methods
// Methods are functions as properties of objects, like so:

/*
let cat = {
    name: "Boiii",
    age: 918329381,
};
cat.doSomething = function(){ // Create a function expression and assign it to the property cat.doSomething of the object.
    alert( "prrt" );
};
cat.doSomething(); // prrt, we called the function contained by the object.

// We can use declared functions as well, like this:
function doSomethingPlease(){
    alert( "prrt but politely" );
}
cat.doSomethingPolitely = doSomethingPlease;
cat.doSomethingPolitely(); // prrt but politely
*/

// We can use the shorthand syntax for this, to make life a little easier:

/*
let cat = {
    doSomething(){
        alert("prrt");
    }
};
cat.doSomething();
*/

// To call properties contained in the object, we can use this., like this:

/*
let cat = {
    name: "boiii",
    age: "19239124812",
    cool: true,
    something: "prrt",
    doSomething(){
        alert( "The cat's name's " + this.name + " and he's " + this.age + " years old. We ask him to do something, and he replies: " + this.something  );
    }
};
cat.doSomething();
*/

// this's value is evaluated at runtime, it can be anything. The same function might have different this' when called from different objects:

/*
let cat = { status: "god of the nth realm" };
let something = { status: "The unspoken" };

function doSomething(){
    alert( this.status );
}

cat.idea = doSomething;
something.idea = doSomething;
cat.idea(); // god of the nth realm
something.idea(); // The unspoken
doSomething(); // undefined, when using "use strict". Without using "use strict", this would be the global object (window in a browser). This is historical behavior that use strict fixes. If a function uses 'this', then it's usually meant to be called in the context of an object.
*/
// ============================================================= Reference type
/*
let user = {
    name: "Boii",
    hi(){
        alert(this.name);

    }
    bye(){
        alert("bye");
    }
};
// user.hi(); // Boii, this method of calling works fine
(user.name == "Boii" ? user.hi : user.bye)(); // This causes an error.
let hi = user.hi // This loses the "this". This is because the expression is called at runtime, the "this" in this is called as a function without "this". Sorry about the phrasing.
hi(); // Error, "this" is undefined

// You can't call the property of an object using dot notation in a ternary operator, this is because dot notation returns not a function, but a value of the special Reference Type.
// https://tc39.github.io/ecma262/#sec-reference-specification-type
// The Reference type is a "specification type" (we don't use this, it's used internally by JS). The value of Reference Type is a three-value combination as such:
// (base, name, strict)
// in our case, it's (user, "hi", true).
// When parathenses () are called on the Reference TYpe, they receive all the information about the object and its method, and can set the right "this" (user in this case).
// Other operations such as hi = user.hi discards the reference type as a whole, and takes the value of user.hi (the function) and passes it on, such that any further operation uses its original "this". The correct value of "this" is only passed the right way if the function is called directly using obj.method() or obj[method]() syntax.
// Property accessors (dot or square brackets) return a value of the Reference Type. Any operation on it except a method call (assignment = or ||) turns it into an ordinary value that doesn't carry the information allowing to set "this".

// Arrow functions don't have their own "this". If we reference "this" from an arrow function, it's taken from the outer "normal" function. Ie:
/*
let user = {
    firstName: "Boii",
    sayHi() {
        let arrow = () => alert(this.firstName); // "this" in the arrow functions uses the "this" of the function that contains it, so in this case it's Boii.
        arrow();
    }
};
user.sayHi(); // Boii
// This is useful when we actually don't want a seperate "this", but rather to take it from the outer context.
*/

/*
function makeCats(){
    return{
        name: "Boi",
        ref(){
            return this;
        }
    };
};
let cat = makeCats();
alert( cat.ref().name ); // Boi, this is because cat.ref() is a method, and the value of "this" is set to the object before the dot notation . .
*/

/*
let calculator = {
    sum(num1, num2){
        this.num1 = num1,
        this.num2 = num2,
        alert( this.num1 + this.num2 );
    },
    mul(num1, num2){
        this.num1 = num1,
        this.num2 = num2,
        alert( this.num1 * this.num2 );
    },

};
calculator.mul( 5, 6 );
*/

/*
let ladder = {
    step: 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep(){
        alert (this.step);
        return this;
    },
};
ladder.up().up().showStep();
*/

// =========================================================== Object to primitive conversion
// When objects are added or subtracted, or printed, special methods in objects take care of the conversion.
// Objects have no boolean values, as the boolean value of Objects always is true. All Objects are true in a boolean context. There's only string and numeric conversions.
// Numeric conversion happens when we subtract objects, or apply any mathmatical functions. Date objects can be subtracted, date1 - date2 returns the time difference between the two dates.
// String conversion usually happens as we output an object using alert(obj); and the likes.
// When an Object is used somewhere a Primitive is expected/needed, ie in an alert or mathematical expression, it's converted to a primitive value using the ToPrimitive algorithm.
// see https://tc39.github.io/ecma262/#sec-toprimitive for deeper understanding.
// That algorithm allows us to customize the conversion using a special object method. Depending on context, to conversion has something called a "hint". There are 3 variants:
// "string" for object-to-string conversion. This is used in alert();.
// "number" for object-to-number conversion. This is used in maths, ie Number(obj), let n = +obj, < > / * ** and such.
// "default" rarely occurs, this is when the operator doesn't know what type to expect. Ie like when binary plus + works fine both with strings and numbers, or when an object is compared using == with a string, number or symbol.
// default is treated the same as string or number.

// To do the conversion, JavaScript attempts to find and call three object methods:
// obj[Symbol.toPrimitive](hint) if the method exists
// obj.toString() and obj.valueOf() if it's a string, whatever exists
// obj.valueOf() and obj.toString() if the hint is "number" or "default".

/*
let cats = {
    status: "Sacred holiness of the abyss",
    souls: 13928931283,
    [Symbol.toPrimitive](hint){
        alert(`hint: ${hint}`);
        return hint == "string" ? `{status: "${this.status}"}` : this.souls;
    }
};

alert(cats); // hint: string -> {"status: Sacred holiness of the abyss"}
alert(+cats); // hint: number -> 13928931283
alert(cats + 500); // hint: default -> result of 13928931283 + 500
// The single method cats[Symbol.toPrimitive] handles all conversion cases, as we can see. cats becomes a self-descriptive string, or a soul amount depending on the conversion.
*/


// =================================================================== Constructer, operator "new"
// {...} allows us to create a single object, but sometimes (often) we need to create many similar objects, like for multiple users or menu items. This can be done using the constructor function and the "new" operator.
// Constructor functions are technically just regular functions, but they have two conventions though:
// They are named with capital letter first.
// They should be executed only with the "new" operator. ie:

/*
function Cat(name){
    this.name = name;
    this.isSentient = true;
    this.isEternal = true;
    this.isMagnificent = true;
}
let cat = new Cat("Whiskers");
let cat2 = new Cat("Marlin");
let cat3 = new Cat("Albert");
alert(cat.name);
alert(cat2.isSentient);
alert(cat3.name);
*/

// Essentially when the function is executed as new Cat, it does the following things:
// Adds new empty object and assigns it to "this"
// The function body is executed, usually it modifies "this", like adding new properties to it.
// The value of "this" is returned.

// The main purpose of constructors is to implement reuseable object creation code.
// We can check whether a function was called with "new" or without it using the "new.target" property. This is useful to allow syntax flexibility. Like this:

/*
function Cat(name){
    if( !new.target ){
        return new Cat(name);
    }
    this.name = name;
}
let tom = Cat("Tom"); // Redirects call  to new Cat
alert( tom.name ); // Tom
*/

// Constructors usually doesn't have a return statement, as their task is to write all the necessary stuff into "this", and then automatically become the result. If there is a return statement, the rules are the following:
// If "return" is called with object, then it's returned instead of "this"
// If "return" is called with a primitive, it's ignored.
// "return" with an object returns that object, in all other cases "this" is returned.
// For example, here "return" overrides "this" by returning an object:

/*
function BigCat(){
    this.name = "Boiiiiiiiiiiiiiiiiii";
    return { name: "boy" }; // Here we return an object that overrides the "this" return.
}
alert( new BigCat().name ); // boy, it returned the object.
// Constructors usually don't have return statements.
*/


// We can have methods in constructors, like this:

/*
function Cat(name){
    this.name = name;
    this.isHappy = function(){
        alert( "I am pleased that this is good and cool, I'm: " + this.name );
    }
}

let kitty = new Cat("Kitty");
kitty.isHappy(); // I am pleased that this is good and cool, I'm Kitty
*/

/*
let myObj = {};
function A(){ return myObj }
function B(){ return myObj }
alert( new A() == new B() ); //true
// If a function returns an object, then new returns that instead of "this". So two objects can for instance return the same externally defined object myObj.
*/

/*
function Calculator(){
    this.sum = function( num1, num2 ){
        this.num1 = num1;
        this.num2 = num2;
        return this.num1 + this.num2;
    };
    this.mul = function( num1, num2 ){
        this.num1 = num1;
        this.num2 = num2;
        return this.num1 * this.num2;
    };
}
let calculator = new Calculator();

alert ( "sum = " + calculator.sum( 5, 6 ) );
alert ( "mul = " + calculator.mul( 5, 6 ) );
*/

/*
function Accumulator(start){
    this.value = start;
    this.add = function( num ){
        this.num = num;
        this.value += num;
        return this;
    };
    this.read = function(){
        return this.value;
    };
}

let accumulator = new Accumulator( 0 );
accumulator.add( 1 );
accumulator.add( 10 );
accumulator.add( 19 ).add( 10 ).add( 40 );
alert( "The accumulated value is: " + accumulator.read() );
*/

/*
function Calculator(){
    let methods = { // Define an object with our methods for subtraction and addition in an object so that we can add more later
        "-": ( x, y ) => x - y, // Arrow function expression
        "+": ( x, y ) => x + y
    };

    this.calculate = function( str ){ // Create a function using function expression notation with 1 parameter, str.

        let split = str.split(' '), // This splits the string (an array of characters) into 3 parts using whitespaces as seperators (split)
        x = +split[0], // First number
        op = split[1], // Mathematical operation
        y = +split[2]; // Last number

        if( !methods[op] || isNaN(x) || isNaN(y)){ // We only take certain mathematical expressions(op) and numbers (x and y)
            return NaN;
        }
        return methods[op]( x, y ); // Plug in x and y into our methods function, using the chosen operator.
    }

        this.addMethod = function(name, func){ // We have to do this to add methods
        methods[name] = func; // Adds the new function to our methods object.
        };
}

let calc = new Calculator; // create a calc with the properties of the Calculator constructor function.

calc.addMethod( "*", ( x, y ) => x * y ); // Add our own flavour of mathematical operators
calc.addMethod( "/", ( x, y ) => x / y );
calc.addMethod( "**", ( x, y ) => x ** y );

alert( calc.calculate( "5 + 5" ) ); // Use our sweet new calculator
alert( calc.calculate( "5 ** 2" ) );
alert( calc.calculate( "10 / 3" ) );
*/


// ========================================================================================= Data types
// We've already learned a bit about data types, but I guess it's time for some elaboration.

// Objects are able to store multiple values as properties. They are denoted using {}, like: { key: value, awesome: true }. Functions in JavaScript are actually objects.
// We can store functions as properties in objects, like so:
/*let myObj = {
    key1: "value1";
    myFunc: function{
        alert( this.key1 );
    },
    aBool: true;
};*/

// Primitives as objects
// You can do a lot of things with primitives, like strings or numbers. Accessing them as methods would be cool.
// Primitives must be as fast and lightweight as possible.
// This is possible as the language allows access to methods and properties of strings, numbers, booleans and symbols.
// When methods are accessed for primitives, an "object wrapper" is created that provides the extra functionality, which is destroyed when the method has done its job.
// Object wrappers are different for each primitive types and are called: String, Number, Boolean, and Symbol. They each provide their different sets of methods.
// An example of this is a string method, just look at this:
/*let str = "A regular string that isn't all that loud";
alert( str.toUpperCase() ); // A REGULAR STRING THAT ISN'T ALL THAT LOUD /s (see the added sarcasm)*/

// And just like that our primitives provide methods, while remaining lightweight. JavaScript puts a lot of effort in optimizing this and making it easy on resources.
// Here's an example of a method for a float.
/*let floatingN = 1.1378917389123;
alert( floatingN.toFixed(3) ); // This automatically rounds the number to our given precision (in this case 3 decimals).*/

// Such methods work via temporary objects, but the JavaScript engine does a great job at optimizing that internally, on modern computers they're barely felt.
// null and undefined have no wrapper objects, nor do they provide us with any methods. They're about as primitive as involuntarysm.
// Assigning properties to primitives is a nogo, they cause errors. Create objects {} instead.

// ============================================ Numbers
// We can write huge numbers easily like this:
/*let billion = 1e9; // 1 and 9 zeroes, e denotes (e)xponent.
alert( billion ); // 1000000000
alert( 4.2e9 ); // 4.2 billion
alert( 8e-6 ); // This is for tiny numbers, here's 6 zeroes before 8*/

// We can write in Hex, binary and octal, too. This is good for character encoding, colors and much more.
// alert( 0xff ); // shows us 255, lowercase or uppercase, it doesn't matter.
// alert( 9b11111111 ); // Binary form of 255
// alert( 0O0 ); // I'm fucking with you here, that's octal for 0. It's a 0oN, the highest octal is 0o377(255) or something.

// toString(base) is a method that returns a string representation of a number in the numeral system with a given base. ie:
/*let num = 255;
alert( num.toString(16) ); // ff, this shows us the base16 value
alert( num.toString(2) ); // 11111111, this shows us the binary value, good for bitwise operations.*/
// base=16 is used for hex colors, character encoding, digits can be 0..9 or A..F
// base=2 is used for binary
// base=36 is the maximum, digits can be 0..9 A.., the whole latin alphabet used to represent a number. A nice usecase for base36 is creating a long numeric identifier into something shorter, like a short url.
// To use methods on Numbers, you need to call the method using two dots .. for JS to know that it's not a float you're trying to create, but a method you're trying to call.
// To round numbers we have a couple of ways:
// Math.floor // Rounds down
// Math.ceil // Rounds up
// Math.round // Rounds to nearest integer
// Math.trunc // removes anything after the decimal point without any rounding. Odd but probably useful.

// Numbers can be too big, as JavaScript is only able to store numbers in 64 bits, 52 of which are used to store digits, 11 to store the position of the decimal point (0 for integers) and 1 bit for the sign.
// If a number is too big, it'll overflow the 64 bit storage, maybe causing "infinity" to be your result.

// To test if a number really isn't a number, we can use isNaN(NaN); // true in this case
// NaN doesn't equal anything, not even itself, so NaN === NaN // false
// To test if a number is finite, we can use isFinite("29"); // true, isFinite("str"); // false, because that's NaN and is equal to nothing.
// To test if something is NaN, we can actually use Object.is(NaN, NaN); // === true, this is useful
// Numeric conversions using Number() or unary + is strict, because if a value isn't exactly a number, it fails.
// To read values like "10€" or "12px", we can use parseINT and parseFloat, they read the number from a string as far as possible, then upon an error, return what it has gathered.
// alert( parseInt( '1010px' ) ); // 1010, you get the idea. It reads from left to right, so it'll return an error for "a1010" because such is life.
// parseInt('0xff', 16); // 255, this is because parseInt function has an optional second parameter that specifies the numeral system.

// ========================================================================== Cool math stuff
// Math.random(min, max) is a function that chooses a random number between 0 and 1 (not including 1) or between the specified parameters.
// math.Max(3, 5, -10, 0, 1); // 5, it returns the greatest number from the arbitrary number or arguments
// math.Min(3, 5, -10, 0, 1); // -10, it returns the smallest number from the arbitrary number of arguments.
// For more, see: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math (I heard they have trigonometry, nerds)
// alert( "\u{1F60D}"); // ;)

// The length of a string can be found using the .length method, ie alert( "hiewhuwaidjawd".length ); // returns the length of that keyboard mash, remember that it's a numeric property, not a function, so there's no need to add brackets after it.
// Accessing characters is kind of cool, it allows us to get a character at a position pos, using square brackes [pos] or calling the method str.charAt(pos). The first character starts from the 0 position.
/*let myStr = "HE LLO1!";
alert( myStr[0] ); // H
alert( myStr[2] ); // " "
alert( myStr.charAt(3) ); // L
alert( myStr.[myStr.length -1] ); // ! , this finds the last char.
// We can also do iteration over characters using a for..of loop
for(let char of myStr){
    alert(char); // H, E, , L, L, O, 1, !
}*/

// We can use str.indexOf to look for a substr in str, starting from the given position pos, and return the position where the match was found or -1 if nothing can be found.
// let str = ('obnoxious developer')
// str.indexOf('obno') // 0
// str.indexOf('no') // 2
// A second parameter allows us to search starting from the given position, ie:
// str.indexOf('no', 2) // 0
// There's also method that searches from the last char and back, it's called str.lastIndexOf(pos).
// The method str.includes(substr, pos) returns true or false depending whether str contains substr.
// There's also str.startsWith and .endsWith, they do what they are named.

let sindsyg = {
    tekst(str){
        this.tekst = str;
        let sindsygTekst = ""
        for(let char of str){
            sindsygTekst += this.random(char);
        }
        return sindsygTekst;
    },
    random(upperLower){
        let number = Math.random()*10;
        if(number>5){
            return upperLower.toUpperCase();
            number = Math.random()*10;
        } else{
            return upperLower.toLowerCase();
            number = Math.random()*10;
        }
    }
};

function changeText(){
  document.getElementById('theText').innerHTML = sindsyg.tekst(document.getElementById('theText').innerHTML);
}
//alert(sindsyg.tekst("Jeg har skrevet et lille script der laver sindsyg tekst for mig"));
