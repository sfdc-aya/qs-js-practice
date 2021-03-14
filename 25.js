function flexibleCountDown(lowNum, highNum,mult){
    for(let i=highNum; i>=lowNum; i-=mult){
        console.log('Output', i);
    } 
};
flexibleCountDown(2,9,3);