function fitFirst(arr){
    for (var i=0; i<arr.length; i++){
    if (arr[0] > arr.length){
      return 'Too big!';
    }else if(arr[0]< arr.length){
      return 'Too small!';
    }else{
      return 'Just right!'
    }
  }
  }