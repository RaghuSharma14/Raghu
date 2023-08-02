/*Q2.  Write a JS program to display the current time and date in the following format.
Output: Today is : Wednesday
Current time is : 10 PM : 30 : 38
Ans-  */
function dateAndTime(){
    var date = new Date();
    var day = date.getDay();
    var days = {0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday"};
    console.log("Today is: " + days[day]);

    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if(hour >= 12) {
        console.log(`Current time is ${hour} : ${minute} : ${second} (PM) -  Year is : ${year} ` );
    }
    else {
        console.log(`Current time is ${hour} : ${minute} : ${second} (AM) -  Year is : ${year}`);
    }
}
dateAndTime();

OUTPUT-
Today is: Thursday
Current time is 0 : 43 : 40 (AM) -  Year is : 2023


//Q3.  Write a JS program to get the current date, as: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy.
//Ans- 
function date(){
    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();

    console.log(`${month}-${day}-${year}`);
    console.log(`${month}/${day}/${year}`);
    console.log(`${day}-${month}-${year}`);
    console.log(`${day}/${month}/${year}`);
}
date();

OUTPUT-
7-4-2023
7/4/2023
4-7-2023
4/7/2023
