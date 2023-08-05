/*NAMED FUNCTION - Named functions are simply a way of referring to a function that employs the function keyword followed by a name that can be used as a callback to that function.
Normal functions with a name or identifier are known as named functions.


*/


//EXAMPLE -
function show(){
   console.log("named function");
}
show();
//OUTPUT--
//named function


//EXAMPLE - function hosting
show();// hosting of function is done whenever we declare any function, so the declaration is placed at the top and it is accessible before the declaration.
function show(){
   console.log("named function");
}
//OUTPUT--
//named function


