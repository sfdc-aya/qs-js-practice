function prevLen(arr){
    for (var i=arr.length;i>0;i--){
        arr[i] = arr[i-1].length;
    }if (arr[0] === 'av'){
      arr[0] = arr [4];
      arr.pop()
    }
    return arr;
  }

  prevLen(['av','s','asdb','adfgb'])