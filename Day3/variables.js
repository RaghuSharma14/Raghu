/* There are 3 ways to initialise a variable in javascript
1. var
2. let
3. nothing(accidental globals)
*/

/* Var --The var keyword was used in all JavaScript code from 1995. The let and const keywords were added to JavaScript in 2015.
If var is outside the function like in example (var rr = 1000;) then hosting is done and it is placed at the top means attached to the window (tab) it is in global scope.
Whenever we declare the var it starts doing hosting(place at the top)
var doees not have block level scope.
*/

Example-
var rr= 1000;// (hosting)place at top (window) 
function show(){
    // var z;   behind the scene var z has done hosting and now its accessible in all the function
    console.log(z);//undefined    z is declared and initialized due to hosting
    if(32>4){
        var z = 100; // assignment is done here bcoz var z is placed at the top all other z are just assignments and var here is eliminated.
    } 
    console.log(z);//100
    var z = 200;//  assignment is done  z = 200 and var is eliminated bcoz var is at the top (hosting)
    var z = 300;// assignment is done   z = 300 and var is eliminated bcoz var is at the top (hosting)
    console.log(z);//300
}
show();

OUTPUT- 
undefined// first console.log(z) it proves that z is placed at the top bcoz it is accesible and declaration,
// initialization of z is done at the function first line due to hosting.
100
300

// if we try to access var rr, then bcoz it is attached to window it has global level scope so it can be accessed.
rr;
1000

window.rr;
1000

// if we try to access z and bcoz it is declared inside function, it has function level scope so it can't be accessed and it will through refernce error.
z;
Uncaught ReferenceError: z is not defined at <anonymous>:1:1




/* let - With the introduction of ES6 in 2015 two more keywords, let and const came into the picture.
var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.

redeclaration of the same variable in same function ot block generates syntax error.

if we try to access a let variable before initialization then it generates an error because that variable is in TDZ(temporal dead zone) declaration is done,
but not initialization means there is hosting but without initialization.

let can be declared multiple times but in different scopes

different let is in different scope but var use the same one all the others are just assignments.


*/
//Example1--- let declaration
function vaiable_let(){
    for(let i =1; i<=5;i++){
        console.log(i);// here i have block level scope only accesible in loop
    }
    let i = 1000;
    console.log(i);
}
vaiable_let();

OUTPUT-
1
2
3
4
5
1000

//Example2-- multiple declarations
function vaiable_let(){
    let i =2000;
    for(let i =1; i<=5;i++){
        console.log(i);
    }
    let i = 1000;// let variable can be declared multiple times but in different scope if two let variables have same scope it will through an error.
    console.log(i);
}
//output-  It will give an error
Uncaught SyntaxError: Identifier 'i' has already been declared

//Example 3---

function output(){
    console.log(i);// this is called TDZ(temporal dead zone)  means hosting is done here but only declaration, initialization is not done here so it will through
//and error i is not initialized 
    let i =1000;
    console.log(i);
}
output();

// OUTPUT- It will through an error
Uncaught ReferenceError: Cannot access 'i' before initialization at output (<anonymous>:2:17)at <anonymous>:1:1 output @ VM977:2 (anonymous) @ VM1002:1


// Example ---
let p =10000;// p can pe accesed after its declaration if we try to access before then it is in TDZ 
window.p;// TDZ initialization is not done but in this case var place at the top (hosting)



/* 3. NOTHING( Accidental globals ) ECMAscript 5
This is a wrong practise to use this
to stop using this accidental global we use 'use script' in the first line then start writing code and if we create a accidental global it will through
an error
*/

function nothing(){
    g= 1000;// g is become global and now it is accessible everywhere
}
nothing();

OUTPUT -
g;
1000
