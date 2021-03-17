function printAndReturn(arr){
    console.log(arr[arr.length-2]);
    for (var i=0;i<arr.length;i++){
      if(arr[i] % 5 === 0){
        return arr[i];
      }
    }
  }
  