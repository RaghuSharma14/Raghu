// map() - creates a new array by performing some operation on each array element.

//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

  const a = [1,2,3];
  a.map((value,index,array)=>{
      return (value*value);
  });
  //(3) [1, 4, 9]
  0: 1
  1: 4
  2: 9
  length: 3
  [[Prototype]]: Array(0)


// map() method
let arr = [12,22,75];
let b= arr.map((element,index,array)=>{
   console.log(element,index,array);
    return element+1;
});
console.log(b);
//value(v), index (i), array (a)
12 0 (3) [12, 22, 75]
22 1 (3) [12, 22, 75]
75 2 (3) [12, 22, 75]
(3) [13, 23, 76]
