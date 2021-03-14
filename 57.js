function addToFront(arr, string) {
    arr.push(string);
    arr.unshift(string);
    //console.log(arr);
    arr.pop(string);
    //console.log(arr);
  
  }
  var output = addToFront([1, 2], 3);
  console.log(output); // -> [3, 1, 2]
  //var output = addToFront(["apple","banana"],"orange")
  //["orange","apple","banana"]
  //console.log(output);