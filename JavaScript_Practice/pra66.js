// arguments in js
function kunal(){
    // arguments
    console.log(arguments);
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum=sum+arguments[i];
    }
    return sum;
}
kunal(1,2,3,4,5,6,7,8,9,10)