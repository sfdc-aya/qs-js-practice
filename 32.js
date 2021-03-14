function modulo(num1, num2){
  var x = Math.floor(num1/num2);
  var mod = num1 - x * num2;
  // console.log(mod);
  return mod
};
var output = modulo(25, 4);
console.log(output); // --> 1
var output = modulo(3, 4);
console.log(output); // --> 3