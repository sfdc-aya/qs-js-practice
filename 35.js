function isOdd(num) {
    if (num %2 !== 0){
      return true;
    }else if(num %2 === 0) {
      return false;
    }
  };
  var output = isOdd(4);
  console.log(output); // --> true