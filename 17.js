function isLessThan30(num) {
    if (num<=30 && typeof num !== 'string'){
        return true;
    }else{
        return false;
    }
  };
  var output = isLessThan30(20);
  console.log(output); // --> true