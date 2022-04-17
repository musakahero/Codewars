function filter_list(l) {
    let newList = l.filter(x => typeof x !== 'string');
    
    //console.log(newList);
    return newList;
    // Return a new array with the strings filtered out
  }

filter_list([1,2,'a','b']);
filter_list([1,'a','b',0,15]);
filter_list([1,2,'aasf','1','123',123]);