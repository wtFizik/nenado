function stepen(base, exponent) {
   
    
    let result = 1;
    let i = 0;
    
    do {
        result *= base;
        i++;
    } while (i < exponent);
    
    return result;
}

let base = +prompt("Введите основание:");
let exponent = +prompt("Введите показатель степени:");

let result = stepen(base, exponent);

if (exponent == 0 || base === 0) {
    alert('durak')
    
}else if( isNaN(exponent) && (base) || isNaN(base) && (exponent) ) {
    alert('shutnik')
}else if((base > 1) || (exponent >1)) {
    alert(`${base} в степени ${exponent} равно ${result}`)
}else if( isNaN(exponent) || isNaN(base)) {
    alert('ne shuti')
}else if( isNaN(exponent) || (base >1)) {
    alert('shutnik')}
;