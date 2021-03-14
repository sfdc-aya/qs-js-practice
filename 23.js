function getOddNumbers(){
    for (var i=-300; i<300; i++; sum=0) {
        if (i%2 !== 0){
            sum = sum+i;
        }
    }
    return sum;
}
var output = getOddNumbers();
console.log(output);

/*
var sum = 0;
var i =0;
function getOddNumbers(){
  for (var i = -300000; i<= 300000; i++){
    return sum = sum+i;
  }
};
getOddNumbers();
*/