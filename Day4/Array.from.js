//Array.from - The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// it is used to create an array from any other object.

let name = "EREN";
typeof name;
'string'

let arr = Array.from(name);// change the string into Array.

arr;
(4) ['E', 'R', 'E', 'N']
0: "E"
1: "R"
2: "E"
3: "N"
length: 4
[[Prototype]]: Array(0)


// for...of loop - can be used to get the values from an array.
let num = [5,8,9,6,2,1,5,3];
for(let i of num){
   console.log(i);
}

//OUTPUT-
5
8
9
6
2
1
5
3


// for...in loop - can be used to get the keys from an array.
let num = [5,8,9,6,2,1,5,3];
for (let i in num){
    console.log(i);
}
//OUTPUT - it gives the keys (index)
0
1
2
3
4
5
6
7
// in order to print values in for...in loop
let num = [5,8,9,6,2,1,5,3];
for (let i in num){
    console.log(num[i]);
}
//OUTPUT-
5
8
9
6
2
1
5
3

