function getLengthOfLongestElement(arr) {
    if (arr.length === 0){
      return 0;
    }    
    var LongestString = [];
    
    for (var i= 0; i < arr.length;i++){
      if(arr[i].length > LongestString.length){
        LongestString = (arr[i]);
      }
    }
    return LongestString.length;
  }