// kangax es6

[1,2,3,4].indexOf(10) > -1;
false

[1,2,3,4].includes(10);
false

[1,2,3,4].includes(4);
true

// only works for one value
// .includes() ES2016 feature

var elieString = "elie is an instructor";
elieArray = elie.split(" ");
elieArray.includes("elie");

// .includes() on strings - new feature
"elie is an instructor".includes("elie");
// true
// ES2016

"elie is an instructor".indexOf("elie");
// 0

// Regular Expression
!!"elie is an instructor".match(/elie/);
// true
// /the pattern to find/
// !! returns the boolean value of the expression, force into boolean
// same thing as
Boolean("elie is an instructor".match(/elie/));

/elie/.test("elie is an instructor");
// true

"elie is an instructor".replace(/elie/, 'tim');
// replace a pattern with a string

10**3;
Math.pow(10,3);
// ** exponentiation feature also new to ES2016

// ES2017 -- recently implemented into Chrome

// Async Functions -- copied from Python
// a way to write asynchronous code so they look synchronous
// AJAX - Asynchronous Javascript XML
// AJAX doesn't block your code, needs to wait until the request from HTTP is done
// blocking code - synchronous - can't do any type of operation until the previous process is completed
// asynchronous code - process keeps running in the background, following code can run. works via the event loop
// asynchronous function lets us write asychronous code as if it's synchronous
// event loop

async function getData(){
    console.log('getting started');
    var data = await $.getJSON('http://omdbapi.com/?t=titanic');
    // awaiting result of our promise - resolution or rejection
    console.log(data);
    console.log('all done');
}

// reads like synchronous code except it's asynchronous

// promise
// like burger king receipt

// async functions -- still pending, works in Chrome, not available in all browsers
// need to use "async" and "await" keywords in async function

// async in HTML
// <script src="foo.js" async></script>
// if this script doesn't depend on any other script, load this script when you have the chance to.
// browser will load whichever will load faster
// defer - wait for the previous script to load before loading this script
// can mix async and defer

function displayInfo(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(console.log('ended'))
        }, 1000);
    })
}

// promisifying function that has traditional callback function

async function logInfo(){
    console.log('start');
    await displayInfo();
    console.log('done');
}


// ES2015 features: 

// Array functions =>
// very good for when don't want to use function keyword
// more concise way to write functions
// Gotcha: issue with keyword 'this'

var arr = [1,2,3];

arr.map(function(val){
    return val*2;
})

//[2,4,6]

arr.map(v => v*2);

var sayHi = () => {
    return "hello";
}
// if do it all on one line, do not need 'return' keyword, but need it if more than one line

// keywords for declaring variables

// traditionally
var elie = "instructor"
// issue with hoisting
// becomes an issue when do not use var keyword if in a function
// in global scope - not an issue, but best practice to use var keyword
// messes with scoping

var instructor = "Tim"

function sayHi(){
    debugger
    var instructor = "Elie";
    console.log(instructor);
    // console.log is a function
    // function log() --> put on callstack
    // heap: do you have instructor variable in the scope that I am in (local / function scope)
    // once this function finishes running
    // then sayHi function can complete and pop off the call stack
}

sayHi();
// console logs "Elie"
// look at current scope first: looks at local scope then look to global scope

instructor;
// Heap: do you have variable called instructor in the current scope? (global)
// Reference error -- not defined in the global scope. not in the heap
// "Tim"


/// new function

function sayHi(){
    // var instructor;    
    console.log(instructor);
    var instructor = "Elie";
}

sayHi();
// undefined

// hoisting
// way JS reads it diff than it's written
// if see var keyword, hoists that variable up to the top to declare it
// so declares that variable first before other code. undefined variables that are declared are defined as "undefined"
// JS makes multiple passes through your code before turning into 0, 1
// not really an interpretive language, browser goes through multiple passes
// first pass: look for var keywords and declares the variables at the top of its scope
// does that so heap can get as much memory as possible at the front
// more legwork upfront so runs faster later
// hoisting will not happen if do not have var keyword.

function hello(){
    return elie;
    elie = "instructor"
}

hello()
// Reference Error
// elie variable doesn't exist in scope

function hello(){
    elie = "instructor"
}

hello();
// undefined

elie;
// "instructor"

// if do not use var keyword in function to declare variable, it becomes a global variable


// Errors:

// - Syntax

// - Reference error: when JS tries to look for a variable
// variables live in the heap, part in memory of browser where variable lives
// in the scope i'm in, is there a reference to this variable?
// if not, get reference error and say it's not defined
// not the same as undefined. not defined = variable does not exist in scope

// - Type

// - Range error: stack overflow, maximum callstack size exceeded, when no basecase in recursive function

// Call Stack
// how to get function off the call stack?
// function finish running
// return keyword - pop function off the stack

// what error will get here?

sayHi();
// undefined because var will hoist sayHi to top and declare it as an undefinied variable -- jk!
// TypeError

var sayHi = function(){
    return "hello";
}

// turns into:

var sayHi; // undefined

// sayHi();
undefined(); // so get a TypeError

sayHi = function(){
    return "hello";
}

// be careful when using var keyword because of hoisting

sayHi();

function sayHi(){
    return "hello";
}

// "hello"
// function keyword also gets hoisted up, along with its declaration

var foo = "foo"
bar = "bar"

// sloppy but doesn't make a difference in the global scope, but someone might think that bar was previous defined and just a reassignment. will not be able to find the "intial assignment"

function first(){
    // return person --> returns Reference Error because person was not hoisted
    person = "Elie";
}
// person becomes a global scope
// does not get hoisted to the top

function second(){
    // return another --> returns undefined
    var another = "Tim";
}
// another variable will be hoisted

// "awesome --> Syntax error

// garbage + "awesome --> returns a Syntax Error

// JS will look for Syntax Error first on first pass. Will not need to continue running if there is a syntax error. None of code will run if have a syntax error.

// garbage + "awesome" --> Reference Error because garbage does not exist

// undefined() + garbage + "awesome" --> Type Error

// garbage + undefined() + "awesome" --> Reference Error

// JS look for Syntax error first
// Type Error and Reference Error -- depends on structure of code (which comes first)

// ES2015 gives us... for variable declaration

const instructor = "Elie" // makes variable a constant, should never be changed by anyone, will get an error if try to change it (Type Error)

// Gotcha:

const list = [1,2,3];
list.push(10)
// can modify the array
// but cannot reassign
list = [];
// get a type error

const str = "taylor"

str =+ "is awesome"
//get type error

//but if not a primitive type...

const student = ['taylor'];
student[0] += ' is awesome'
student[0] // 'taylor is awesome'

// Primitive data types: string, number, null, undefined, Boolean, Symbol
// assigned by value, passing by value, not a reference in memory

// Reference data type: object (array, function, object)
// assigned by reference, dangerous to work with reference types because easy to overwrite
// why is it made this way? saves memory
// primitive data types do not take that much memory
// reference types take more memory, large objects

var arr = []

var arr2 = arr.slice();

arr2.push(10);
// 1

arr2;
//[10]

arr;
[]

// how to make copy of an object?

// Object.assign() circa ES2015

var o = {name: "Elie"};

var o2 = Object.assign({}, o);
// first parameter is always empty object {} so making a new object before copying values of o object.
// shallow copy -> just the initial values, not all of its methods etc 
// would use inheritance otherwise

o === o2; // false

// LET from ES2015
// new scoping type
// now: global, local
// blocks of code --> code in {}
// block scope: code do not include function or object declaration --> if statement, switch/case, for, do while, while, try/catch, 

if(true){
    let instructor = "Elie";
}

instructor; // Reference Error

// let keyword gives us access to block scope
// what else is Let good for?

for(var i=0; i <= 5; i++){
    console.log(i);
}
//0
//1
//2
//3
//4
//5

for(var i=0; i <= 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}
// prints out 6 five times
// setTimeout is a function in the window scope
// i is in what scope?

for(var i=0; i <= 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000*i);
}
// prints out 6 delayed 1 sec each, 5 times
// Sources tab --> Make a snippet

// i is in the global scope of the console.log function
// by the time i gets to output, it's already in the global scope
// loop finishes running, i=6, then it gets logged

for(let i=0; i <= 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000*i);
}

// prints 1, 2, 3, 4, 5
// inside for loop, create a block scope
// for adding function inside loops
// but how to fix with var instead of using let?

for(var i=0; i <= 5; i++){
    // write a function that returns right away
    // i want to make sure elie scope's i corretly
    // closure
    // the second that this loop runs, want to immediately run a function
    // pass parameter j, its value is what i is at that moment
    // when a function has returned,
    // inner function can use variables that returned by outter function
    (function executeRightAway(i){ // immediated invoked function expression
        setTimeout(function executeLater(){
            console.log(i);
        }, 1000*i);
    }(i))    
}


/// SOURCE TAB ///

// Console: ctl command j

// Source tab

function printNumbers(num){
    for(i = 0; i <= num; i++)
        // i = 0 // initializer
        // i <= num // condition - forced into a Boolean (true, false)(1, 0)
        // gets turned into 1 or 0 --> keep looping as long as this is true
        // i++ // counter - increment, decrement
        // step 1: initialize variable i
        // step 2: check condition -- true?
        // step 3: run code in for loop
        // step 4: increment / decrement the counter
        // step 5: start again starting at step 2
        // after done running loop, i = 1+ what your condition is
    {
        console.log(num);
    }
}


// debugger keyword - good for in console or in text editor

// pause on exceptions button - stop sign, runs your code up until the error. pauses. will only work if load script externally, will not work in if working in snippets

// force quit - command option esc

// default function parameters

// cmd + d - highlight multiple occurances