/* Arrow Function - Arrow functions were introduced in ES6.
It is short hand function
Arrow function is single line function
1.) In single line function return is not compulsory, but in multiple line arrow function return is compulsary

2.)Arrow function are pure functions. bcoz it does not take anything from outside
Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.

Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
cannot create object of arrow functions.

Arrow functions cannot use yield within their body and cannot be created as generator functions.

3.)arrow function doesn't have there own this,they inherit the this value from the surrounding lexical context (i.e., the context where the arrow function is defined).
This means that the value of this inside an arrow function is the same as the value of this outside the arrow function.

Arrow functions are especially useful when working with functions within functions or callbacks, where the value of this might change in regular functions but remains the same in arrow functions.


*/

// A simple single line arrow function.
const addition = (x,y) => x+y// in single line {} and return is not compulsory.

typeof addition;
'function'

addition(10,20);
30

// arrow function in multi-line
const addition = (x,y) =>{ 
    console.log(x,y);
    return (x+y);
}
addition(10,20);
10 20
30

typeof addition;
'function'


// EXAMPLE - arrow function are constructors

const e1 = ()=>console.log("Arrow Function");
e1();
Arrow Function

const ff = new e1(); // it will through an error that e1 is not a constructor.
//Uncaught TypeError: e1 is not a constructor at <anonymous>:1:12


// EXAMPLE - lexical this

const e1 = ()=>console.log("Arrow Function", this);// it doesnot have it's own this because it doesnot create objects

e1();// this showed here is window called lexical this.
//Arrow Function Window {window: Window, self: Window, document: document, name: '', location: Location, …}



// WAP to print area and perimeter of a rectangle by taking inputs from the user using prompt by arrow functions

const calculateArea = (length, width) => length * width;

const calculatePerimeter = (length, width) => 2 * (length + width);

const calculateRectangle = () => {
    const length = parseFloat(prompt("Enter the length of the rectangle:"));
    const width = parseFloat(prompt("Enter the width of the rectangle:"));

    if (isNaN(length) || isNaN(width)) {
        alert("Please enter valid numeric values for length and width.");
    } else {
        const area = calculateArea(length, width);
        const perimeter = calculatePerimeter(length, width);

        // alert(`Rectangle Area: ${area}\nRectangle Perimeter: ${perimeter}`);// this will print in the window where input is taken
        console.log("Area of rectange is: ",area);
        console.log("Perimeter of rectange is: ",perimeter);
    }
}
calculateRectangle();
//Enter the length of the rectangle: 3
//Enter the length of the rectangle: 4
Area of rectange is:  12
Perimeter of rectange is:  14
