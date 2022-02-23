let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    let newarr=[]
    for (el of arr) {
        if (el<=b && el>=a)
        newarr.push(el)
    }
    return newarr
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)
