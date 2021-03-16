function printLow(arr) {
    var lowest = 0;
    var heighest = 0;
    for (var i =0; i<arr.length; i++){
      if (arr[i]>lowest){
        lowest = arr[i];
      }
    }if (arr[i]> heighest){
      heighest = arr[i];
    }
    return lowest;
  }