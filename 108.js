function allNegative(arr){
    var newArr = [];
    for (var i=0;i<arr.length;i++){
      newArr.push(-Math.abs(arr[i]));
      }
    return newArr;
  }