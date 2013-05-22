var myUniq = function(arrg) {
  var sorted = [];
  for (var i = 0; i < arrg.length; i++) {
    var flag_found = false;

    for (var j = 0; j < sorted.length; j++) {
      if (arrg[i] === sorted[j]) {
        flag_found = true;
      }
    }

    if (flag_found === false) {
      sorted.push(arrg[i]);
    }

  }
  return sorted;
};

var twoSum = function(arr) {
  var result = []

  for(var i=0; i < arr.length; i++ ){
    for(var j=i+1; j< arr.length; j++){
      if ( arr[i] === (-1)*arr[j] ){
        result.push([i,j]);
      }
    }
  }
  return result;
};

var myTranspose = function(arr){
  var result = [];

  for(var i = 0; i < arr.length; i++){
    var temp_row = [];

    for(var j = 0; j < arr.length; j++){
      temp_row.push(arr[j][i]);
    }

    result.push(temp_row);
  }
  return result;
};


var stockPicker = function(arr){
  var max_profit = 0;
  var days = []

  for(var i = 0; i < arr.length; i++){

    for(var j = i + 1; j < arr.length; j++){
      var profit = arr[j] - arr[i];

      if(profit > max_profit) {
        max_profit = profit;
        days = [i,j];
      }
    }
  }
  return days;
};


// Tests

// console.log(myUniq([1,2,1,3,3]));
//console.log(twoSum([1,1,-1,0,4,0,-4,5]));
//var temp = myTranspose([[0,1,2],[3,4,5],[6,7,8]]);
//console.log(temp);
//console.log(myTranspose(temp));
//var prices = [13,5,7,9,11,2,16,20];
//console.log(stockPicker(prices));
