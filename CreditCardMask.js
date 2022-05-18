// return masked string
function maskify(cc) {
    let ccMasked = cc.split('');

    for(let i = 0; i < ccMasked.length - 4; i++){
        ccMasked[i] = '#';
    }
    //console.log(ccMasked.join(''));
    return ccMasked.join('');
    
}


maskify("4556364607935616");
maskify("64607935616");
maskify('1');
maskify("");