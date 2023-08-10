/* 
filter() -The filter() method of Array instances creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test implemented by the provided function.

filter() Method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method. 

Syntax : array.filter(function(value, index, arr), thisValue)

filter() can be used to perform:
> cloning- The filter() method is a copying method, filter doesn't clone anything, but it does create a new array. The new array contains the same objects.
> deletion- bcoz it creates a shallow copy only that elements of the array is shown which follows the certain condition and all other elemerts are not displayed.
> searching- 

*/

let arr = [22,4,12,1,5,23];
let a = arr.filter((value) =>{
    return value<10;
})
console.log(a,arr);
// OUTPUT-
(3) [4, 1, 5] (6) [22, 4, 12, 1, 5, 23]


/*
The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function.
If no elements satisfy the testing function, -1 is returned


*/
const array1 = [5, 12, 8, 9, 44, 130];

const isLargeNumber = (element) => element > 13;// element greater than 13 is at 4 index 

console.log(array1.findIndex(isLargeNumber));
//OUTPUT-
4


/*
sort() - The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted.
         The default sort order is ascending, built upon converting the elements into strings.

To sort the elements in an array without mutating the original array, use toSorted().

*/

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
//OUTPUT-
(4) ['Dec', 'Feb', 'Jan', 'March']


const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
//OUTPUT-
(5) [1, 100000, 21, 30, 4]


//The toSorted() method of Array instances is the copying version of the sort() method. 
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // (4) ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months);// (4) ['Mar', 'Jan', 'Feb', 'Dec']


const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);// ASCENDING ORDER
console.log(sortedValues);// (4) [1, 2, 10, 21]

const sortedValues1 = values.toSorted((a, b) => b - a);// DESCENDING ORDER
console.log(sortedValues1);// (4) [21, 10, 2, 1]

console.log(values); // (4) [1, 10, 21, 2]

