function evenOdds(arr){
    for(var i=0;i<arr.length;i++){
      if(arr[i] % 2 !==0){
        if(arr[i+1] % 2 !==0){
          if(arr[i+2] % 2 !==0){
            console.log("That's odd!");
          }
        }
      }
      if(arr[i] % 2 == 0){
        if(arr[i+1] % 2 == 0){
          if(arr[i+2] % 2 == 0){
            console.log("Even more so!");
          }
        }
      }
    }
  }