// Write a program to check that the number given by the user is a prime number or not.
let num=29;
for(var i=2; i<num; i++){
    if(num%i==0){
        console.log(`not a prime number.`);
        break;
    }
}
if(num==i){
    console.log(`prime number`)
}