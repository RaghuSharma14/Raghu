/* It is possible in javascript that a variable can store a function.
Example-
var fn = function(){
}
*/

/*ANONYMOUS FUNCTION / FUNCTION EXPRESSION
“Anonymous”, which means “whose name is not known”, thus, anonymous functions do not have a name. 

hosting is done in anonymous function but of var variable in which function is stored.

We can make a function Anonymous when we make buttons, after clicking button the function which is executed is anonymous.bcoz button doesnot need the name of function.
 
anonymous function can be used in events
and if we dont want my functions to be gloabal then we can make our inner functions also global.
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




//Example---
//whenever we want that our function should not be exposed we put it in a named function  and we wrap all the function in it.
// use case of anonymous function
function Customer(){
    var show = function(){
        console.log("Customer Show");
    }
    var add = function(){
        console.log("Customer Add");
    }
    return {show,add};// objects are made
}

window.Customer;// hosting of Customer is done so it it attached to the window.
//OUTPUT--
ƒ Customer(){
    var show = function(){
        console.log("Customer Show");
    }
    var add = function(){
        console.log("Customer Add");
    }
    return {show,add};// if we want to access add, show we need to create an object of customer.
}
// when we try to access inner anonymous function it cannot be called because it has function level scope
add;// it will through an error---- Uncaught ReferenceError: add is not defined at <anonymous>:1:1
 

var obj = Customer// try to access add show through object of customer obj

typeof obj;
'object'

obj;
{show: ƒ, add: ƒ}
add: ƒ ()
show: ƒ ()
[[Prototype]]: Object


// accessing inner anonymous function through object
obj.add();
Customer Add

obj.show();
Customer Show

// We can also declare anonymous function in the return

function Customer(){
    // var show = function(){
    //     console.log("Customer Show");
    // }
    // var add = function(){
    //     console.log("Customer Add");
    // }
    return {show: function(){
                console.log("Customer Show");
            }, add : function(){
                   console.log("Customer Add");
               }
    };
}
var obj = Customer();
obj.show;// OUTPUT-  Customer Show

obj.add;// OUTPUT-  Customer Add




// WAP to print area and perimeter of a rectangle by taking inputs from the user using prompt by ANONYMOUS FUNCTION

function area_and_perimeter() {
   
    var area=function(x,y) {
        return x*y;
    }
    var perimeter=function(x,y) {
        return 2*(x+y);
    }
    var cal=function(x,y) {
        
        return [area,perimeter];
    }
    return {cal};
}

area_and_perimeter().cal()[0](2,3);
6

area_and_perimeter().cal()[1](2,3);
10
