function filterEvenLengthWords(words) {
    var EvenLengthWords = [];
      
    for (var i=0; i<words.length;i++){
     if (words[i].length %2 !== 1){
        EvenLengthWords.push(words[i])
    }
    }
    return EvenLengthWords;
    }
    var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
    console.log(output); // --> ['word', 'word']