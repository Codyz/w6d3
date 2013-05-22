var bubbleSort = function(arr) {
  var sorted = arr;
  var swapped = true;

  while(swapped) {
    swapped = false;

      for(var i = 0; i < arr.length; i++){

        if(sorted[i] > sorted[i+1]) {
          temp = sorted[i];
          sorted[i] = sorted[i+1];
          sorted[i+1] = temp;
          swapped = true;
        }
      }
  }

  return sorted;
};

var subStrings = function(str) {
  var results = [];

  for (var i = 0; i < str.length; i++) {

    for (var j = i+1; j < str.length+1; j++) {
        results.push(str.slice(i,j));
    }

  }

  return results;
};




// Tests
//console.log(bubbleSort([1,7,4,45,0,8,74,52,8,6]));
//console.log(subStrings("cat"))
console.log(subStrings([1,2,3,4]));

