function flexibleCountdown(param1,param2,param3,param4){
    for (var i = param2; i<param3; i++) {
        if (i!==param4 && i% param1 === 0){
        console.log(i)
     }
    }
};
    flexibleCountdown(3,5,17,9);