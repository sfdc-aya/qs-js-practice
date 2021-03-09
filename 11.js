function checkAge(name, age){
    if (age<21){
        console.log('Go home, '+name);
        console.log('Go home, ${name}');
    }else{
        console.log("You're welcome " +name);
    }
};
checkAge('Aya',21);