function isGreaterThan(num1, num2) {
    if(num2>num1){
      return true;
    }else{
      return false;
    }
  };
  var output = isGreaterThan(11, 10);
  console.log(output); // --> false
  var output = isGreaterThan(10, 50);
  console.log(output); // --> false