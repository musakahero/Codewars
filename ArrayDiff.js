function arrayDiff(a, b) {
    for (let i = 0; i < a.length; i++) {
        let num = a[i];
        if (b.includes(num)) {
            while(a.includes(num)){
                a.splice(a.indexOf(num),1);
            }
            i=-1;
        }
    }
    // console.log(a);
    return a;
}

arrayDiff([1,2,3],[1,2]);
// arrayDiff([1,2,2,2,3],[2])