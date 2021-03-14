function addToFront(arr, element) {
  arr.splice(0,0, element);
  return arr;
}
var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]
var output = addToFront(["apple","banana"],"orange")
//["orange","apple","banana"]
console.log(output);