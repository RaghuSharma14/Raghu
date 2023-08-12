//1. Create an Array of Salaries, Now do the Sum of Salaries who is greater than 10000.
//Hint : reduce function
//Ans-
let salary = [10000,20000,30000,40000,50000,60000,70000];
let initialValue = 0;
let sum_of_salary = salary.reduce((accumulator,currentValue)=>{
    if(currentValue > 10000){
        return accumulator + currentValue;
    }
    else{
        return accumulator;
    }
}, initialValue)
console.log(sum_of_salary); // 270000

// by using ternary operator
let salary = [40000,30000,10000,20000,50000,60000,70000];
let initialValue = 0;
let sum_of_salary = salary.reduce((accumulator,currentValue)=> currentValue > 10000? accumulator + currentValue: accumulator , initialValue)
console.log(sum_of_salary);// 270000




//2. Get the Max Salary from the Array
//Hint : reduce function
//Ans-
let salary = [40000,30000,10000,20000,50000,60000,70000];
let initialValue = 0;
let Max_salary = salary.reduce((accumulator,currentValue)=>{
   return Math.max(accumulator,currentValue);
}, initialValue)
console.log(Max_salary);// 70000


//by using ternary operator
let salary = [40000,30000,10000,20000,50000,60000,70000];
let initialValue = 0;
let Max_salary = salary.reduce((accumulator,currentValue)=> currentValue - accumulator > 0 ? accumulator =  currentValue: currentValue , initialValue)
console.log(Max_salary);// 70000



//3. Count Those Salaries whose > 10000, note : don't use filter.
//Hint : reduce 
//Ans-

let salary = [40000,30000,10000,20000,50000,60000,70000];
let initialValue = 0;
let salary_count = salary.reduce((accumulator,currentValue)=> {
    if(currentValue>10000){
        return accumulator = accumulator + 1;
    }
    else{
        return accumulator;
    }
}, initialValue)
console.log(salary_count);// 6


//by using ternary operator
let salary = [40000,30000,10000,20000,50000,60000,70000];
let initialValue = 0;
let salary_count = salary.reduce((accumulator,currentValue)=> currentValue > 10000? accumulator =  accumulator + 1: accumulator , initialValue)
console.log(salary_count);// 6



//4. Maintain an Array of Employees. (Array of Objects), Now Sort the Employee by Name and Salary.
//Ans -
var emp = [
    {name:"Eren", salary:5000},
    {name:"saitama", salary:1000},
    {name:"Gingka", salary:4000},
    {name:"Ryuga", salary:3000},
    {name:"Ash", salary:9000}
]
var emp1 = emp.sort((x,y) => x.name.localeCompare(y.name));
emp1;
//sort by name in case of strings we use localeCompare to sort the strings

(5) [{…}, {…}, {…}, {…}, {…}]
0: {name: 'Ash', salary: 9000}
1: {name: 'Eren', salary: 5000}
2: {name: 'Gingka', salary: 4000}
3: {name: 'Ryuga', salary: 3000}
4: {name: 'saitama', salary: 1000}
length: 5

//sort by salary in ascending order
var emp2 = emp.sort((x,y) => x.salary - y.salary);
emp2;
(5) [{…}, {…}, {…}, {…}, {…}]
0: {name: 'saitama', salary: 1000}
1: {name: 'Ryuga', salary: 3000}
2: {name: 'Gingka', salary: 4000}
3: {name: 'Eren', salary: 5000}
4: {name: 'Ash', salary: 9000}
length: 5

//sort by salary in descending order

var emp3 = emp.sort((x,y) => y.salary - x.salary);
emp3;
(5) [{…}, {…}, {…}, {…}, {…}]
0: {name: 'Ash', salary: 9000}
1: {name: 'Eren', salary: 5000}
2: {name: 'Gingka', salary: 4000}
3: {name: 'Ryuga', salary: 3000}
4: {name: 'saitama', salary: 1000}
length: 5



//5. In Employee Salaries add 10% Tax in Each Employee Salary and Store in a new Array, So don't modify the Orginal Array.
//Hint : filter, map
//Ans -
var emp = [
    {name:"Eren", salary:5000},
    {name:"saitama", salary:1000},
    {name:"Gingka", salary:4000},
    {name:"Ryuga", salary:3000},
    {name:"Ash", salary:9000}
]
var tax =emp.map((e)=>e=e.salary*0.9);
tax;
(5) [4500, 900, 3600, 2700, 8100]
