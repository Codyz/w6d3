var byTwo = function(arr) {

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }

  return arr;
};

var myMap = function(arrg, funk) {
  var result = [];

  for (var i = 0; i < arrg.length; i++) {
    result.push(funk(arrg[i]));
  }

  return result;
};

var oneByTwo = function(num){
  return num*2;
};

myEach = function(arr, func){

  for(var i = 0; i < arr.length; i++){
    func(arr[i]);
  }

  return arr;
};

var myInject = function(arr, operator){
  var result = arr[0];

  for(var i = 1; i < arr.length; i++){
    result = operator(result, arr[i]);
  }

  return result;
};

var add = function(x, y) { return x+y; }




// Tests

//console.log(byTwo([1,2,3]))
//console.log(myMap([1,2,3], function(num) {
//  return num*2;
//}));

//console.log(myMap([1,2,3], oneByTwo));
console.log(myInject([1,2,3,4,5], add));

