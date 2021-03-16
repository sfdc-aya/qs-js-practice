function greaterThanSecond(arr){
    var count = 0;
    for (var i = 0; i <arr.length; i++){
      if (arr[i] > arr[1]){
      count ++;
      //console.log(arr[i])
    }
    }  
    return count  ;
  };
  greaterThanSecond([1,3,5,7,2,13])