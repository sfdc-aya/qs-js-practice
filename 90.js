function greaterThanSecond(arr){
    var arr2 = [];
    for (var i=0; i<arr.length; i++){
      if (arr[i]>arr[1]){
        arr2.push(arr[i]);
      }else if (arr.length <2){
        return 'not enough numbers'
      }
    }
    return arr2;
  };
  //greaterThanSecond([1])