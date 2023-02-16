let fruit=['Apple','Bada Apple','Chota Apple','Double Apple'];
let upperfruit=[];

for(const badaletter in fruit){
    upperfruit.push(badaletter.toUpperCase())
}
console.log(upperfruit)