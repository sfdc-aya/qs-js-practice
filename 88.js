function firstPlus(arr){
    if (typeof arr[0] !== 'string'){
    return arr[0] + arr.length;
  }else if(typeof arr[0] === 'string'){
    return 'wrong data'
  }else{
    return 'like what'
  }
};
firstPlus([2,4,7,8,9]);