function computeAverageLengthOfWords(word1, word2) {
    var average = Number((word1.length + word2.length))/2;
    return average;
};
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6