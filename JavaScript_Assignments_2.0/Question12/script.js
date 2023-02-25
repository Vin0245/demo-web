// Create a human readable time format using the Date time object
// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm


let date= new Date();

let year=date.getFullYear();
console.log(year)
let month=date.getMonth();
console.log(month)
let date1=date.getDate();
console.log(date1)
let hours=date.getHours();
console.log(hours);
let min=date.getMinutes();
console.log(min)

function dateFormat1(){
    let first = `${year}-${month}-${date1} ${hours}:${min}`
    console.log(first)
    let second = `${date1}-${month}-${year} ${hours}:${min}`
    console.log(second)
    let third = `${date1}/${month}/${year} ${hours}:${min}`
    console.log(third)
}
dateFormat1()



