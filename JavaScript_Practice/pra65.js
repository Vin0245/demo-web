function kunal(){
    // arguments
    // console.log(arguments);
    let sum=0;
    for(let i=0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}
console.log(kunal(1,2,3,4,5));