function itsYourBirthday(num1, num2){
    if (num1 === 2 && num2 === 20 || num2 === 2 && num1 ===20){
      return 'How did you know?';
    }else{
      return 'Just another day';
    }
  };
  itsYourBirthday(4,18);