/* NFE(Named Function Eexpression)-
 In this, named function is assigned into a variable so it is called named function expression / named expression function.

*/

//EXAMPLE-
var a = function tada(){
    console.log("I am tada");
}
a;//  it shows the name of the function but the name is only exposed to a variable which stored the tada() function
//OUTPUT--
ƒ tada(){
    console.log("I am tada");
}

tada();// bcoz the name of the function only exposed to a so function tada() is just an interval here and cannot be called. if try to call it will through an error.
//ERROR- Uncaught ReferenceError: tada is not defined at <anonymous>:1:1

a(); // it can access the function methods and all.
I am tada


// EXAMPLE- 
function Calc(){
    var add = function(x,y){
        return x+y;
    }
    var sub = function(x,y){
        return x-y;
    }
    return [add,sub];
}
var f = Calc();
f;// we are not able to see which is inside it.bcoz it is stored in an array and we cannot know which function is where, this is also the limitation of anonymous.
(2) [ƒ, ƒ]
  0: ƒ (x,y)
  1: ƒ (x,y)
    length: 2
  [[Prototype]]: Array(0)

//trying to access the inner functions without knowing (blind call)
f[0](10,20);
30

f[1](10,20);
-10

//EXAMPLE-
function Calc(){
    var add = function add(x,y){
        return x+y;
    }
    var sub = function sub(x,y){
        return x-y;
    }
    return [add,sub];
}
var t = Calc();

t;// now we will be able to see the name of the functions inside because we name the function which is inside the variable and it is NFE
(2) [ƒ, ƒ]
  0: ƒ add(x,y)
  1: ƒ sub(x,y)
    length: 2
  [[Prototype]]: Array(0)

// THis time we know which function we are calling.
t[0](10,20);
30
t[1](10,20);
-10


