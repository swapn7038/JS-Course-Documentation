// First fix your path, from where are you going to learn stuff. Currently I am on Udemy JS course, some YouTube
// Channels. Write down every thing, whatever you are learning, by just watching tutorial you are not going to learn anything.
// Write down or comment all the stuff like : From which youtube video did you watch which concept, date,day and time also. It will help you to analyse you
// to analyse your progress 
////////////////////////////////////////////////////////////////////////////////////////////////
// Be patient and you will learn things 
// GRIT : Interest + Passion 
//  You dont need to watch lot of videos, just two or three, just take notes of everything, every thing you listen or read note down here. Revise it again and again. 

// If you want to learn web dev just learn HTML, CSS and JavaScript. That is more than enough for you.
// Try to find your path 
// I have wasted a lot of time allready, now its time to organise yourself to a path, strategically and start learn from zero or more
// Start building out stuff, by googling stuff, after you learn basic, thats how you will learn things 
////////////////////////////////////////////////////////////////////////////////////////////////
// Some tips from Dev Ed : Youtube Channel 
// 1. Watch entire tutorial on Youtube
// 2. Code along with tutorial 
// 3. Comment every process of the code step by step on another file 
// 4. Recall doing the same tutorial and if you forget something see your own notes
// 5. Then with the knowledge do your personal projects
// ////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
//  * Technical thapa : Javascript😎😋
// Lec Starts at : 24:40 ( values and variables in js )

// var myName = "Swapnil";
// console.log(myName);

// var => key word 
// myName => Variable name 
// "Swapnil" => value of variable

// Naming variables : Rules and best practices 
// 1. The first character must be a letter or an underscore (...)
//  or an dollar sign ($). You cant use a number as the first character
// 2. The rest of the variables can include any letter, any number, or the underscore. Can`t use 
// any other characters, including spaces. 
// 3. Variables names are case sentitive 
//  4. No limit to variables name 
//  5. Cant use reserved keywords eg: var, const, let, function, 

// 1) 😭Challlenge time 
// var _myName = "swapnil"
// var _1myName = "Random"
// var 1myName = "Random2"
// var $myName ="Random3"
// only 3rd one will show error 

// *  DATA TYPES AND VARIABLES // Time Stamps : 38:45
// Six Data Types that are primitive, 
// 1. undefined : typeof instance ==="undefined"
// 2. Boolean : typeof instance === "boolean"
// 3. Number : typeof instance === "number"
// 4. String : typeof instance === "string"
// 5. Bigint : typeof instance ==="bigint"
// 6. Symbol : typeof instance === "symbol"

// var myName = "DITMS"
// console.log(typeof(myName));

// typeof operator 

// var myAge = 20;
// console.log(myAge);
// console.log(typeof(myAge));

// var iAmSwapnil = true;
// console.log(iAmSwapnil);
// console.log(typeof(iAmSwapnil));

// 🤑 2. Challenge time 
// Data practices 

// console.log(10 + "20");
// Output : 1020 number + String

// console.log(9 - "5");
// Here we will get output 4 // Bug 

// console.log("Java " + "Script");
// Output : JavaScript

// console.log(" " + " ");
// Output : 

// console.log(" " + 0);
// Output : 0 

// console.log("Swapnil" - "Shelke");
// Output : NaN  (not a number )

// console.log(true + true);
// Output : 2 Because in JS true is considered as one 

// console.log(true + false);
// Output : 1

// console.log(false - true);
// Output : -1 

// console.log(false + true);
// Output : 1 

// INTERVIEW QIESTION 
// 1. Difference between null vs undefined 

// var iAmUseLess = null;
// console.log(iAmUseLess);
// console.log(typeof(iAmUseLess));

// Output : null 
// Output : undefined 

// 2. Interview Question
// What is NaN 
// If we minus two string then the outhput in NaN 
// console.log("DITMS" - "Deogiri");
// Output : NaN 

// NaN is a property of global object, in other words, it is a variables in global scope. 
// The initial value of NaN is not a number 

// var myPhonenumber = 9876543210;
// var myName = "Swapnil";
// console.log(isNaN(myPhonenumber));
// console.log(isNaN(myName));
// Output : false 
// Output : true 

// if (isNaN(myName)) {
//     console.log("Please enter the valid number");
// }
// Output : Please enter the valid number

// 3. Challenge Time // NaN practice 
// console.log(NaN === NaN);
// Output : false

// console.log(Number.NaN === NaN);
// Output : false 

// console.log(isNaN(Number.NaN));
// Output : true 

// console.log(Number.isNaN(NaN));
// Output : true 


//  * 🤗3rd Section Expression and Operators 
// 1. Assignment operators 
// 2. Arithematic 
// 3. Comparison
// 4. Logical 
// 5. String 
// 6. Consditional (ternary) operator 

// Increment and decrement operator 

// var num = 15;
// var myNum = num++;
// console.log(num);
// console.log(myNum);
// Output : 16 15 

// console.log(num++ + 5);
// console.log(myNum);
// Output : 21 15 

// Comparison operators 
// A comparisom operator compares its operands and 
// returns a logical value based on whether the comparison is true. 

// var a = 30;
// var b = 10;

// Equal ( == ); 

// console.log(a == b);
// Output : false 


// Not equal to ( != ); 
// console.log(a != b);
// Output : true 


// Greater than ( > ); 
// console.log(a > b);
// Output : true 

// Greater than equal to (>=); 
// console.log(a >= b);
// Output : true 

// Less than (<); 
// console.log(a < b);
// Output : false

// Less than or equal to (<=); 

// Logical operators 
// typically used with boolean (logical), 
// var a = 30;
// var b = -20;

// Logical AND (&&)
// the logical AND (&&), true if all the operands are true // very important 
// console.log(a > b && b > 0); 
// Output : true 

// Logical OR operator ( || )

// Logical NOT (!)
// if we are getting true value then make it false, 
// and if we getting false value then make it true 

// console.log(!((a > 0) || (b < 0)));
// Output : false 

// console.log(!false);
// Output : true 


// String operators 
// the concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings. 


// console.log("Swapnil " + "Shelke");
// Output : Swapnil Shelke 


// * 4. Challenge time
// 1. What will be output of 3**3; 
// console.log(3 ** 3); // 3 * 3 * 3 
// console.log(3 ** 5); // 3 * 3 * 3 * 3 * 3 * 3
// Output : 27 
// Output : 243

// 2. console.log(9 ** 2);
// Output : 91 

// * this operator is known as exponential operator 
// console.log(10 ** -1); // 1/10 

// 3. Write a program to swap two numbers 
// var a = 10;
// var b = 5;

// temp = a; // temp = 10; 
// a = b; // a = 5; 
// b = temp; // b = 10; 


// console.log("valu of a is " + a);
// console.log("valu of b is " + b);


// 4. Write a program to swap numbers values without using third variables?
// a = a + b; // a = 15; 
// b = a - b; // b = 5; 
// a = a - b; // a = 10; 

// console.log("valu of a is " + a);
// console.log("valu of b is " + b);

// ! Interview Question 
// 1. What is the differnence bewteen == and === ?
// var num1 = 5;
// var num2 = "5";

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1 == num2);
// Output : true
//? == only checks the value 

// var num1 = 5;
// var num2 = "5";

// console.log(num1 === num2);
// Output : false 
//?  === checks value and data type as well 



// * 4th section Control statement and Loops 
// 1. if...else 
//! Write a program to check given year is leap year not 
// Leap are the years which are exactly divided by 4 ( such as 2016, 2020, 2024)

// var year = 2021;
// if (year % 4 == 0 ? console.log("This is leap year") : console.log("This is not leap year"));



//! Js program to write tables 9th table 

// for (var i = 0; i <= 10; i++) {

//     console.log(9 * i);
// }


// * 5th section : Functions in JavaScript 
// Function Def : Block of code, desugned to perform particular task. 
// Before we use the function we need to define it. 
// A function definition (also called a function declaration, or function statement)
// consists of function keyword, followed by the name of function.

// A list of parameters to the fnuction, enclosed in paranthesis and separated by commas.
// 

// function sum(a, b) {
//     finalAns = a + b;
//     console.log(finalAns);
// }

// sum(50, 100);
// sum(100, 500);
// sum(100, 1000);
// Value inside this are argument

//! What is differnence between function parameter and function function argument 
//* Function parameter vs Function argument 
//? Function parameter are the names listed in the function's definition
//? Function argument are the real values passed to the function  


//* Interview question 
// Why function?
// We can reuse code multiple times, after defining it once. 
// We can call same code multiple times with different arguments to produce result. 

// OR

// DRY : Dont Repeat Yourself   

// OR 

// A function  is reusable code which we can call anywhere in our program, which eliminared 
// to write same thing again and again

// Function Expression 
// Simply it means " Create a function and put it into the variables "

// function sum(a, b) {
//     finalAns = a + b;
//     console.log(finalAns);
// }

// sum();


// Time Stamp : 3:35:00
//! Arrays Starts here //  Time Stamp : 4:19:51 
//* Arrays in JS 6th section
// When we use var, we can only store only one value at one tme. 
// When we need to store multiple value that time simply we will use arrays 
// In JS we have an Array Class and arrays are the protopype of this class 


//* Array Substring 1 Traversal in array 
// Navigate through an array 

// let arr = ["swapnil", "DITMS", "Deogiri", "random", "Pune", "ABC", "swapnil", "DITMS", "Deogiri", "random", "Pune", "ABC", "swapnil", "DITMS", "Deogiri", "random", "Pune", "ABC"]
// console.log(arr[17]);
// console.log(arr[arr.length - 1]);

//! To check the length of an array 
// console.log(arr.length);

// let arr = ["swapnil", "DITMS", "Deogiri", "random", "Pune", "ABC", "swapnil", "DITMS", "Deogiri", "random", "Pune", "ABC", "swapnil", "DITMS", "Deogiri", "random", "Pune", "ABC"]
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// after update ES6 we have for..in and for..of loop too 
// let arr = ["swapnil", "DITMS", "Deogiri", "random", "Pune", "ABC", "swapnil", "DITMS", "Deogiri", "random", "Pune", "ABC", "swapnil", "DITMS", "Deogiri", "random", "Pune", "ABC"]

//? for in loop returns index values 
// for (let elements in arr) {
//     console.log(arr);
// }

//? for off loop gives us strings 

// for (let elements of arr) {
//     console.log(elements);
// }


//? for each loop 
//? calls a function for each element in the array 

// let arr = ["swapnil", "DITMS", "Deogiri"]

//! We use forEach loop here
// arr.forEach(function(element, index, array) {
//     console.log(element + " index is :" + index + " " + array);
// });

//! forEach loop using fat arrow function
// arr.forEach((element, index, array) => {
//     console.log(element + " index is :" + index + " " + array);
// });

//* Array sunbestion 2 ✔ Searching and filter in an array 
// Array.prototype.indexOf() 
// Array.prototype.lastIndexOf() 
// Array.prototype.includes()

// find method  
// find index method  


// returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number 
//!!  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// Filter method 
// Sorting methods for array 
// Array.sort() 

//* Last index of method watch this on other youtube channel 



























// Time stamp : 4:46:09 Continue again from here 




// To run js file type node script.js in terminal 
///////////////////////////////////////////////////////////////////////////////
// This is from Udemy Which I dont understand 

// let js = 'amazing';
// if (js === 'amazing') alert('JS is fun');
// 50 + 50;
// console.log(50 + 50 + 50);

// let firstName = 'Swapnil';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
////////////////////////////////////////////////////////////////////////////////////////////////

/*// Lec : 34
// Function declaration and Expression 

//function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(2001);
console.log(age1);


// function Expression 
const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(2003);

console.log(age1, age2);
*/
/* 
////////////////////////////////////////////////////////////////////////////////////////////
Lec No : 35
Arrow functions : Added in ES6 : Shorter form of function
Shorter form of function, faster to write

 function Expression 
const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
}

// Arrow function 
// birthYear => 2037 - birthYear; //To store it 
const calcAge3 = birthYear => 2037 - birthYear;
// Here we store the fnuction expression in variable known as calcAge3 
// One liner function
const age3 = calcAge3(1991);
console.log(age3);

The value we claculated give output without writing return value
We dont need parenthesis here, we just write one line of code Here

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
return retirement
    return '${firstName} return is ${retirement} years';
}

console.log(yearsUntilRetirement(1991, 'Swapnil'));
console.log(yearsUntilRetirement(1990, 'Ajay'));

Using arrow function is easy but get complicated later 
You need to learn step by step, if anyone tells you everything at the same time you will get overwelmehed 
*/ //

////////////////////////////////////////////////////////////////////////////////////////////
/*

Lec No : 36 
 Function calling other functions
 We do many times in JS thats why it is so important, Beginners struggle with this a lot 

function cutFruitPieces(fruit) {
    return fruit = 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${orangePieces} piece of apples and ${orangePieces} piece of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));

Calling a function inside a function : DatafLow

*/

////////////////////////////////////////////////////////////////////////////////////////////
// Lecture No: 37 - Reviewing Functions Everything we learn Until 
//  Not understand enything nees to wath again 

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// Section 8 : How JS works behind the screen
// Lec Number : 87 -Section intro
// Lec No : 88 - Section Intro 
// Lec No : An High Level Overview of JAvaScript 
// JS is a High Level, OOP, Multi_paradigm Programming Language
// ❤
// 😁High-Level : Any computer program neeeds resources : Memory 
// Low-Level : C - Where we have to manually manage resources 
// But in High level languages we dont have to  manually manage resources 
// Downside is program in Python and JS (which are high level languages), progrms are never to be that fast 
// 😄Garbage Collectio : JS removes objects in memory which are of not any use . Its lile JS have a cleaning guy, we dont have to work on this by ourselves
// 😀Interpreted or just-in-time compiled : We write code in JS but to understand to computer we need to convert it into machine language in the 0s and 1s form
// and that process is known as compilation or and the software does that is known as Compiler
// But in JS this process happens in JS engine Thats why we called it as interpreted or just-in-time compiler
// 😉Multi-paradigm : An approach and mindset of set structuring code, which will direct your coding style and technique
// Three Popular Paradigm are 
// 1. Precedural Programming
// 2. Object-oriented Programming(OOP) :Prototype based object oriented approach 
// 3. Functional Programming(FP) 
// Many languages are only Object oriented or Functional, but Js is so flexible that it has all that features that
// 
// First-classs functions : Functions are simply treated as variables. We can pass them into other functions, and return them from functions. 
// JS is Dynaimically-typed language => No data type definitoin. Types become known at euntime / Datatyped variable is automatically changed
// Single-threaded programming : This two are most complicated topics 
// Non-blocking event loop : and this one also / JS runs in one simgle threrad, so it can do only one thing at a time
// So what about a long-running task ? : Sounds like it would block the single thread. However, we want non-blocking behaviour!
// How do we achieve that : By event loop
// Event loop : By using an Event loop : takes long running tasks, execute them in the "background", and puts them back in the main thread once they are finished  

////////////////////////////////////////////////////////////////////////////////////////////
// Lec No : 90 - The JS engine and Runtimes 
// What is JS engine : Program that Executes JS code Ex: Google, Node.js, V8 Engine  
// Its easy to understand JS engine, but complicated to understand it components 
// Any JS engine conatains CALL STACK and HEAP
// CALL STACK is the place where all the code actually executes, using something called Ecectution Context 
// HEAP is unstrucctured pool, where objects are stored 
// Computer Science Sidenote: Compilation vs Interpretation
// Compilation : Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer
// Interpretation : Interpreter runs through the source code and execute it line by line 
// Just-in-time (JIT) compilation: Entire code is converted into machine code at once, then executed immediately.
//  Just-in-time (JIT) compilation Followed by Js
// Parsing :AST => Compilation => Execution(Happens in CALL STACK) => Optimization
// The Bigger Picture: JS Runtime |

// WEB APIs : DOM, Timers, Fetch API ...
// Callback Queue : click, timer, data
// Call back function from DOM event lidtener 
// Thread Pool 

////////////////////////////////////////////////////////////////////////////////////////////
// Lec No : 91 => Execution context and the call stack 
// After compilation  of the code => Creation of global execution context (for top-level code) -> Not inside a
// function => Executoin of top level code (inside global EC) => Execution of 
// functions and waiting for callbacks to be executed
// Whats inside execution context => 1. Variable Environment --> let, var, const declaration : --> Functions --> arguments object
// 2. Scope chain 
// 3. this keyword 
// => Generally during "creation phase", right before execution 


////////////////////////////////////////////////////////////////////////////////////////////
// Lec No : 92 Scope (scoping) and Scope Chain
// Scoping : How our program's variables are organised and accessed  by the JS engine. Scoping asks the question "Where do variables live?" or 
// "Where can we access a certain variables, and where not?". 
// Lexical Scoping : Scoping is controlled by placement of functions and blocks in the code;
// Scope: Space or environemt in ehich a certain variable is declared (variable environment in case of function).
// This is global Scope, function scope, and block scope.

// Time 14:30 PM // 2/2/2022 | Udemy 

// Scope of variable : Region of our code where a cetain variables can be accessed. 
//  3 Types of Scopes : 1. Global 2. Function 3. Block Scope(ES6) 
// Scope is the place in our code, where Variables are declared, same thing for functions as well, because Functions are also the values stored in variables 
// 1. Global Scope : Variables declare outside of any function or block, this variables will be accessed in all our programm (everywhere) and in functions as well
// 2. Function Scope : Variables are accessible only inside function. NOT outside. Also called local scope. 
/*
function calcAge(birthYear) {
    const now = 2037;  // Here now is Function Scope 
    const age = now - birthYear;
    return age;
}
console.log(now); // Reference Error 
*/

// 3. Block Scope(ES6) : What does mean by Block : Everything inside the curely braces. Variables declare inside the block are only accessible inside the block(Block scope). However, this only applies to let and const variables! Functoin ar ealso block scoped (only in Scrict mode).  
// Here Continues ::::::::::::::::::::::::::::::::::::::::;:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::





////////////////////////////////////////////////////////////////////////////////////////////
// Time : 10:42 AM 2/2/2022 
//  Youtube : Namaste JavaScript // map, filter & reduce Functionns : Which are higher order functions 
//  map function : Use to transform an array / Suppose we have an arrray here const arr = [5, 1, 3, 2, 6];
//    const arr = [5, 1, 3, 2, 6];
// now we want to transform it // Means suppose we want to double or tripple the value // or convert it into binary 
// here we use map function

///////////////////////////////////////////
// function double(x) {
//     return x * 2;
// }

// function tripple(x) {
//     return x * 3;
// }

// function binary(x) {
//     return x.toString(2);
// }

// const output = arr.map(binary); // We pass here double, thats why double  should be a function 
// console.log(output);
////////////////////////////////////////////////////////


// Now we want to triple the values // First create the function triple
// function tripple(x) {
//     return x * 3;
//                               }


//  For to convert binary 
// function binary(x){
//     return x.toString(2);
//                              }


// We can also write our code like this 

// const output = arr.map(function binary(x) {
//     return x.toString(2);
// });
// console.log(output);  // this syntax is totallly fine /// This is known as Highe rorder functions 
/////////////////////////////////////////////////////////////////////////////
//  Filter function //
// const arr = [5, 1, 3, 2, 6];
// filter odd values 
//  This code is for finding odd values 
// function isOdd(x) {
//     return x % 2;
// }

// const output = arr.filter(isOdd);
// console.log(output);

//  Output is : (3) [5, 1, 3] 

//  Code for finding even numbers 
//  Now to find even values change the logic in function 

// const arr = [5, 1, 3, 2, 6];

// function isEven(x) {
//     return x % 2 === 0;
// }

// const output = arr.filter(isEven);
// console.log(output);


////////////////////////////////////// Write this by myself //////////////////////////////////////
// const arr = [2, 4, 5, 7, 8, 10, 500, 60, 67]

// function isEven(x) {
//     return x % 2 === 0; 
// }

// const output = arr.filter(isEven)
// console.log(output)

// output is (6) [2, 4, 8, 10, 500, 60]

// Suppose we wanto filter out values great than 2 then 
//  write function like // function greaterThan2 (x){
//     return x > 4;
// }

// const arr = [2, 4, 5, 7, 8, 10, 500, 60, 67]

// function greaterThan2(x) {
//     return x > 2;
// }

// const output = arr.filter(greaterThan2)
// console.log(output)

// Output is : [4, 5, 7, 8, 10, 500, 60, 67]
//  We can also write this function with the help of array function  
//ARROW FUNCTION 
// const arr = [2, 4, 5, 7, 8, 10, 500, 60, 67];
// const output = arr.filter((x) => x > 2);

// console.log(output);


// reduce function 
// Time : 11:45 AM Date: 3/2/2022 // Youtube : Namaste Javascript 

/*

const arr = [5, 1, 3, 2, 6];
sum or max
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { // we can write this whole code with the help of reduce function 
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));
/////////////////////////////////////////////////////////////////////////////
const output = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(output);

<<<<<<< HEAD
*/

// Lec No : 93 // Scoping in Practice 
/*
'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName);
    return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

// Remaining : Watch lec no 83 again 
// Lec No : 96 // The this keyword