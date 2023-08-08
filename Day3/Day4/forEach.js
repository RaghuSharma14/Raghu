//The forEach() method executes a provided function once for each array element.

let num = [5,8,9,6,2,1,5,3];
//for loop
for(i =0;i<num.length;i++){
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



//forEach loop
num.forEach(element=>console.log(element+element));
//OUTPUT-
10
16
18
12
4
2
10
6

num.forEach((element)=>{
    console.log(element*element);
})
//OUTPUT-
25
64
81
36
4
1
25
9



