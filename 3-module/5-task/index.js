let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
function getMinMax(str) {
    let newarr = str.split(' ');
    let min=parseFloat(newarr[0]);
    let max=parseFloat(newarr[0]);
    let result = {
    min: min,
    max: max
}
 for (el of newarr){
    if ( parseFloat(el)<min) min=el;
    if ( parseFloat(el)>max) max=el;
 }
 result.min=min
 result.max=max
 return result
}
console.log(getMinMax(inputData));
