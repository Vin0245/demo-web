// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries=['INDIA','Russia','USA','Australia','England'];

if(countries.includes('ETHIOPIA')){
    console.log('ETHIOPIA');
    console.log(countries);
}
else{
    countries.push('ETHIOPIA')
    console.log(countries)
}