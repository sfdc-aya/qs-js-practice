function isOldEnoughToDrinkAndDrive(age){
  if (age < 15){
    return true;
  }else{
    return false;
  }
};
var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false