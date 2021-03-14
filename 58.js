function addToBack(arr, element) {
    arr.push(element);
    return arr;
  };
  var output = addToBack([1, 2], 3);
  console.log(output); // -> [1, 2, 3]
  var output = addToBack(["apple","banana"],"orange")
    //["orange","apple","banana"]
   console.log(output);