function joinThreeArrays(arr1, arr2, arr3) {
    arr1.sort();
    arr2.sort();
    arr3.sort();
    return arr1.concat(arr2).concat(arr3);
  };
  var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
  console.log(output); // --> [1, 2, 3, 4, 5, 6]