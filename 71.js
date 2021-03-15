function removeElement(array, discarder) {
    for (var i = 0; i<= array.length; i++){
      if (array[i] === discarder){
        array.splice(i,1);
        i--;
      }
    }
    return array;
  }