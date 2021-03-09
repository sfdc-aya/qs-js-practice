function isGreaterThanTen(num) {
  if (num>10 && typeof num !== 'string'){
        return 'this is greater than number 10'
    }else{
      return 'this is less than 10'
    }
  };
  var output = isGreaterThanTen(9);
    console.log(output); // --> true