function sum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
    
}

let sumarray = [1,2,3,4,5]
let arraylist = sum(sumarray);
console.log(arraylist)