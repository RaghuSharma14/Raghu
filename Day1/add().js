function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i];
    const num = parseFloat(arg);
    sum += isNaN(num) ? 0 : num;
  }
  return sum;
}

OUTPUT-
add();
0
add(10);
10
add(10,20);
30
add(10,"20");
30
add(10,NaN);
10
add(10,20,30,40,50);
150
