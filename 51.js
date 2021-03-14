function computePerimeterOfACircle(radius) {
    return Number((2*radius*(Math.PI).toFixed(2)).toFixed(2));
  };
  
  var output = computePerimeterOfACircle(4);
  console.log(output); // --> 25.12