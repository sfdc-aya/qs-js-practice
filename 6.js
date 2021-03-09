function isOldEnoughToVote(age){
  if (age=>18 ){
    console.log('isOlEnoughToDrive');
  }else if (age < 18){
    console.log('is not old enough to drive');
  }
};
isOldEnoughToVote(23);