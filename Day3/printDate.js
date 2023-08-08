// WAP to print date using 4 types of functions

// 1.Tradition Function
function time(){
let d=new Date();
let y=d.getFullYear();
let m=String(d.getMonth() + 1).padStart(2, '0');
let day = String(d.getDate()).padStart(2, '0');
let formattedDate = `${y}-${m}-${day}`;
 console.log(formattedDate);
  
}

  
// 2. Arrow Functions
const time = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);
};



