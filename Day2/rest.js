/*  Rest arguments denoted by (...q) 3 dots.
Rest Arguments- It allows a function to accept an indefinite number of arguments as an array
rest arguments is called function arguments or N - parameters.
A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.
Example - 
       function (a,b,c,...q){
           console.log(a,b,c,q);
       }

The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort(), map(), forEach() or pop() can be applied on it directly.
*/

function rest(...q){
       console.log(q);
}
rest(1,2,3,4,5,6,7,8,9,10,1,3);

OUTPUT-
(12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 3]
0: 1
1: 2
2: 3
3: 4
4: 5
5: 6
6: 7
7: 8
8: 9
9: 10
10: 1
11: 3
length: 12


// aarguments is an array like object but not an array. they are not instance of array
function rest(){   
    console.log("hey",arguments.length, arguments instanceof Array);
   for(let i=0;i<arguments.length;i++){
       console.log(arguments[i]);
   }
}
rest(1,2,3,4,5,6,7,8,9,10,1,3);

OUTPUT-
hey 12 false
1
2
3
4
5
6
7
8
9
10
1
3


// showing that rest is an instance of array.
function rest(...args){   
    console.log("hey",args.length, args instanceof Array);
   for(let i=0;i<args.length;i++){
       console.log(args[i]);
   }
}
rest(1,2,3,4,5,6,7,8,9,10,1,3);

OUTPUT-
hey 12 true
1
2
3
4
5
6
7
8
9
10
1
3
