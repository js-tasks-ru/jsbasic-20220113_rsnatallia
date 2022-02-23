camelize('background-color') == 'backgroundColor';
camelize('list-style-image') == 'listStyleImage';
camelize('-webkit-transition') == 'WebkitTransition';

function camelize(str) {
    let strarr=str.split('');
    let newarr=[];
    for (i=0; i<strarr.length; i++) {
        if (strarr[i]!="-")
        newarr.push (strarr[i])
        else {
            i++
            newarr.push (strarr[i].toUpperCase())
        }
    }
    return newarr.join('');
}
    console.log(camelize('-webkit-transition'));
