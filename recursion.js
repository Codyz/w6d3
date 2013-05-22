var range = function(start , end) {
  var inter = [];

  if((end-start)<=1){
    return [start];
  }

  inter = range(start + 1, end);
  return [start].concat(inter);

};



var sumRec = function(arr) {

  if (arr.length === 1) {
    return arr[0];
  }

  var temp = arr.pop();
  var inter = sumRec(arr);
  return temp+inter;
}

var sumIter = function(arr) {
  var sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
};

var expRec1 = function(b, e){

  if ( e === 0){
    return 1;
  }

  return b*(expRec1(b, e-1));
};

var expRec2 = function(b,e){

  if ( e === 0 ){
    return 1;
  }

  if(e%2===0){
    return Math.pow( expRec2(b, e/2), 2);
  } else {
    return b*Math.pow( expRec2(b, (e-1)/2), 2);
  }

};

var fibRec = function(n) {
  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0,1];
  }

  inter = fibRec(n-1);
  return inter.concat([inter[inter.length - 1] + inter[inter.length - 2]]);
}

var fibIter = function(n) {
  fibs = [0,1]

  if (n === 1) {
    return [0];
  }

  for (var i = 0; i < n-2; i++) {
    fibs = fibs.concat([fibs[i] + fibs[i+1]]);
  }

  return fibs;
};


var bSearch = function(arr, target) {
  midpoint = Math.floor((arr.length / 2));
  console.log("m_point: " + midpoint)

  if (arr[midpoint] === target) {
    return midpoint;
  }

  if(arr.length <= 1) {
    return "NO!"
  }

  if (arr[midpoint] > target) {
    arr = arr.slice(0, midpoint);
    return bSearch(arr, target);
  } else {
    arr = arr.slice(midpoint, arr.length);
    return midpoint + bSearch(arr, target);
  }

};

var makeChange = function(coins, amount) {

  coin_counts = new Array(coins.length);

  for(var i = 0; i < coins.length; i++){
    coin_counts[i] = Math.floor(amount / coins[i]);
    amount -= coin_counts[i] * coins[i];
  }

  return coin_counts;
};

var mergeSort = function(arr) {

  if (arr.length <= 1) {
    return arr;
  }

  var midpoint = Math.floor(arr.length/2);
  var r_list = arr.slice(0, midpoint);
  var l_list = arr.slice(midpoint, arr.length);

  l_list = mergeSort(l_list);
  r_list = mergeSort(r_list);

  return merge(l_list,r_list);
};

var merge = function(left, right){
  var merged = [];

  while( left.length > 0 || right.length > 0) {
    if (left.length > 0 && right.length > 0) {

      if (left[0] <= right[0]) {
        merged.push(left.shift());
      } else {
        merged.push(right.shift());
      }
    } else if (left.length > 0) {
      merged.push(left.shift());
    } else if (right.length > 0) {
      merged.push(right.shift());
    }

  }
  return merged;
};

var subsetsRecIter = function(arr) {

  if(arr.length <= 1) {
    return arr
  }

  inter = subsetsRec(arr.slice(1))
  var subs = [];

  for(var i = 1; i <= arr.length; i++){
    subs.push(arr.slice(0,i));
  }

  return inter.concat(subs);
};


//Tests
// console.log(bSearch(["a","b","c","d","e","f","g","h","i","j"], "i"));
// console.log(bSearch(["a","b","c","d","e","f","g","h","i","j"], "z"));
// console.log(bSearch(["a","b","c","d","e","f","g","h","i","j"], "d"));

//console.log(range(1,6));
//console.log(sumIter([1,2,3,4]))
//console.log(sumRec([1,2,3,4]));
// console.log(expRec2(2,4));
// console.log(expRec2(3,2));
// console.log(expRec2(3,3));
//console.log(fibRec(6));

// console.log(fibIter(1));
// console.log(fibIter(2));
// console.log(fibIter(6));
// console.log(makeChange([25,14,4,1], 76));
// console.log(makeChange([13,6,4,1], 897));


//console.log(mergeSort([1,7,4,45,0,8,74,52,8,6]));
console.log(subsetsRecIter([1,2,3,4]));