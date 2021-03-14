function isGreaterThanTen(num) {
  if (num>10 && typeof num !== 'string'){
        return true;
    }else{
      return false;
    }
  };
  var output = isGreaterThanTen(11);
    console.log(output); // --> true