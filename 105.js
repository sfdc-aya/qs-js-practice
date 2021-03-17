function incr(array) {
    for (var i=0;i<array.length;i++){
      if(array[i] % 2 === 1){
        array[i] = array[i]+1; 
      }
      console.log(array[i]);
    }
    return array;
  }
  