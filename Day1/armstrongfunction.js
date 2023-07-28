function isArmstrongNumber(n) {
  const numberStr = n.toString();
  const numDigits = numberStr.length;

let sum =0;
for(let i=0;i<numDigits;i++){
    const digit = parseInt(numberStr[i]);
    let digitPower =1;
    for (let j = 0; j < numDigits; j++) {
      digitPower *= digit;
    }

    sum += digitPower;
  }
   return sum === n;
}

OUTPUT:
isArmstrongNumber(46);
false
isArmstrongNumber(153);
true
isArmstrongNumber(9474);
true
isArmstrongNumber(8964);
false
