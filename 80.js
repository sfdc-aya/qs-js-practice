function filterOddLengthWords(words) {
    var oddLengthWords = [];
    
    for (var i = 0; i < words.length; i++){
    if (words[i].length % 2 === 1) {
    oddLengthWords.push(words[i]);
    }
    }
    return oddLengthWords;
    }
    var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
    console.log(output); // --> ['there', "now']