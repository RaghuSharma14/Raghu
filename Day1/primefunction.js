function isPrime(n){
    var flag = false;
    if(n<=1){
        return false;
    }
    if(n<=3){
        return true;
    } 
    for(let i=2;i<n;i++){
        if(n%i == 0){
            flag == true;
            break;
        }
    }
    if(flag==true){
        console.log("the given number is not prime(composite)");
    }
    else{
         console.log("the given number is prime");
    }
}

OUTPUT:
isPrime(2);
true
isPrime(3);

true
isPrime(4);
the given number is prime

isPrime(8);
the given number is prime

isPrime(23);
the given number is prime

isPrime(29);
the given number is prime

isPrime(21);
the given number is prime
