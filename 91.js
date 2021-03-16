function len(num1, num2){
    if (num1 === num2){
      return 'same'
    }
    var newArr = [];
    var len = 0;
    
    while(len < num1){
      newArr.push(num2)
      len++
    }
    return newArr;
  }