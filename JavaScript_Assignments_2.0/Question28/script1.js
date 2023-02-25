let val=3;
let str=""
for(let i=1; i<=val; i++){
    for(let j=1; j<=i; j++){
        str=str+"*"
    }
    str+="\n"
}
console.log(str)