/* It is possible in javascript that a variable can store a function.
Example-
var fn = function(){
}
*/

/*ANONYMOUS FUNCTION / FUNCTION EXPRESSION
“Anonymous”, which means “whose name is not known”, thus, anonymous functions do not have a name. 

hosting is done in anonymous function but of var variable in which function is stored.

 */

//EXAMPLE -
var fn = function(){
    console.log("Anonymous Function/ Function Expression");
}
fn();

//OUTPUT-
Anonymous Function/ Function Expression

//fn type
typeof fn;
'function'

//EXAMPLE -
//var fn2; // undefined // hosting is done in anonymous function but of the var not function itself. in this case fn2 is placed at top (hosting)
fn2();// hosting is done here but fn2 is undefined and when we add () to fn2 it will give type error bcoz undefineed is not a function
var fn2 = function(){
    console.log("Anonymous Function/ Function Expression");
}

//OUTPUT- error --   Uncaught TypeError: fn2 is not a function at <anonymous>:1:1
