/*NAMED FUNCTION - Named functions are simply a way of referring to a function that employs the function keyword followed by a name that can be used as a callback to that function.
Normal functions with a name or identifier are known as named functions.


*/


//EXAMPLE -
function show(){
   console.log("named function");
}
show();
//OUTPUT--
named Function


//EXAMPLE - function hosting
show();// hosting of function is done whenever we declare any function, so the declaration is placed at the top and it is accessible before the declaration.
function show(){
   console.log("named Function");
}
//OUTPUT--
named Function

// hosting show is attached to the window(tab)
window.show;
ƒ show(){
   console.log("named Function");
}

show();
named Function

window.show();
named Function



//  WAP to print area and perimeter of a rectangle by taking inputs from the user using prompt by Normal function:

function Area_and_Perimeter() {
    let a=parseInt(prompt("Enter the length"));
    // length=window.prompt();
    let b=parseInt(prompt("Enter the width"));
    // width=window.prompt();
    let area=a*b;
    let perimeter=2*(a+b);
    console.log("Area is:",area)
        console.log("Perimeter is: ",perimeter);
}
Area_and_Perimeter();

//OUTPUT-
//Enter the length : 3
//Enter the breadth : 4
Area is: 12
Perimeter is:  14

