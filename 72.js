function joinArraysOfArrays(arr) {
	var result = [].concat.apply([],arr);
	return result;
}
