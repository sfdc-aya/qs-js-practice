function keep(array, keeper) {
    for (var i = 0; i<array.length; i++){
      if (array[i] !== keeper){
        array.splice(i, 1);
        i--;
      }
    }
    return array;
  }