/* reduce function - The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator.

accumulator - The value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].

currentValue - The value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].

//Example---
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitial);
// Expected output: 10

*/
 
let arr=[1,2,3,4,5,6,7];
let newarr = arr.reduce((h1,h2)=>{
    return h1+h2;
},0)
console.log(newarr);

28
