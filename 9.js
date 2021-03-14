function isLessThan(num1, num2) {
    if(num2<num1){
      return true;
    }else if(num2>num1){
      return false;
    }
  };
  var output = isLessThan(9, 4);
  console.log(output); // --> true
  var output = isLessThan(1, 5);
  console.log(output); // --> true