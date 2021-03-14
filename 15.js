function isOldEnoughToVote(age){
  if (age>17 ){
    return true;
  }else if (age <= 17){
    return false;
  }
};
var output = isOldEnoughToVote(22);
console.log(output); // --> true