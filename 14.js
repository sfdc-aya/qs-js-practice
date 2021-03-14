function isOldEnoughToDrive(age){
  if (age >=16 ){
    return true
  }else if (age < 16){
    return false;
  }
};
var output = isOldEnoughToDrive(21);
console.log(output); // --> true
var output = isOldEnoughToDrive(16);
console.log(output); // --> true
var output = isOldEnoughToDrive(15);
console.log(output); // --> true