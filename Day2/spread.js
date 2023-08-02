/* Spread - spread syntax(...) 3 dots. It is used with reference types like Array and Objects.
The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements 
(for array literals) are expected.

Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements,
while rest syntax collects multiple elements and "condenses" them into a single element. Rest is used with arguments, In functions.

Spread operator in ES6 will be used to clone an array. This operator will bring out shallow copy of the existing array.The Shallow copy only copies the reference 
address after storing a copy of the original object or array.

multiple spread operators can be used at the same time.
spread operator need not to be the last element like rest.

spread coverts array into flatten Array.

purpose of spread is to make flatten and we don't want to go nested.

*/
// spread use in array
var arr =[10,20,30];
var arr2 = [40,50,60];
var arr4=[...arr,...arr2];//cloning of arr and arr2 is done here and the array here is not multidimensional it is single dimension,indirectly we call it flatten array.
arr4;// It will not give refernce it clone the elements.

OUTPUT-
(6) [10, 20, 30, 40, 50, 60]

// spread use in object
var emp ={id:1001,name:"Eren"};
var dept ={dname:"Light",id:1002};
//var merge = {emp:emp,dept:dept};// first emp is key and other becomes value ({id:1001,name:"Eren"});
var merge = {emp,dept};// modern js version says we don't need to make key and value it will automatically create key and value.

merge.emp;// Output-  {id: 1001, name: 'Eren'}
merge.emp.name; // Output-  'Eren'
merge.dept.id;//  Output-  1002

//If i don't want to access all this by dot then i make this flatten by using spread.
var merge2 ={...emp,...dept};
merge2;//OUTPUT-  {id: 1002, name: 'Eren', dname: 'Light'}
// because key is always unique and here we have two keys name id so 2nd one(dept id) will overwrite the 1st (emp id);


//Showing how cloning is done in spread
// When we create an array then refernce of array is created
var x=[10,20,30];
var y = x;// now x and y has the same refernce so any one is change other one is changed too. so it is mutable.
y[0] = 112;// 112
y;
(3) [112, 20, 30]
x;
(3) [112, 20, 30]


// if i dont want it to be mutable then i use spread
var x=[10,20,30];
var z = [...x];// here cloning of x is done so any change on z does not affect x. It is immutable.
x;
(3) [10, 20, 30]
z;
(3) [10, 20, 30]
// till here cloning is done

x[0]=111;// change the first element of x
111
x;
(3) [111, 20, 30]
z;
(3) [10, 20, 30] // does not affect the change of x in z

z[1] = 324;
324
x;
(3) [111, 20, 30]
z;
(3) [10, 324, 30]
