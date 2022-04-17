function openOrSenior(data){
    let result = [];

    for (const pair of data) {
        if(Number(pair[0]) >= 55 && Number(pair[1]) > 7){
            result.push('Senior');
        } else {
            result.push('Open');
        }
    }

    //console.log(result);
    return result;
  }

  openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]);
  openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]);
  openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]);
  openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]);