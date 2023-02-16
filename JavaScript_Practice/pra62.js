function url(url,domain){
    let con = "https://";
    let result = con + url +domain;
    return result;
}
let anuragsite = url('anuragtiwari','.me');
console.log(anuragsite);