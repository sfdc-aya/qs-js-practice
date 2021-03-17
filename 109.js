function hungry(arr) {
    var sum = 0;
    for (var i=0;i<arr.length;i++){
      if (arr[i] == "food"){
        return "yummy yummy";
      }
      else{
        sum++;
      }
    }
    if(sum == arr.length){
      return "i'm hungry";
    }
  }