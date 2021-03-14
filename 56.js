function getLastElement(array) {
    var getElement = array.slice(-1)[0];
    return getElement;
 };
 var output = getLastElement([1, 2, 3, 4]);
 console.log(output); // --> 4