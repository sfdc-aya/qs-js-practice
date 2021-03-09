function isOldEnoughToDrink(age){
  if (age>=21)text= 'You are eligable';
  else if (age<21)text= 'You are not eligable';
  return text;
};
isOldEnoughToDrink(23)

//#4 Second option: 
return age>=21 ? console.log('Your are eligable') : console.log('You are. not eligable');
isOldEnoughToDrink(23)