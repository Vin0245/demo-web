// Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function primeOrNot(){
    var num=100;
    var isPrime;
    for(var i=2; i<=num; i++){
        isPrime=1;
        for(var j=2; j<=i/2; j++){
            if(i%j==0){
                isPrime=0;
                break;
            }
        }
    
    if(isPrime==1){
        console.log(i,"is prime number")
    }else{
        console.log(i,"is not a prime number")
    }
}
}
primeOrNot()