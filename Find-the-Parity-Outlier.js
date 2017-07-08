function findOutlier(integers){
  // 1. Even or odd
  var even = 0;
  var odd = 0;
  
  for (var i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  var findEven = integers.filter(function(num){
  return num % 2 === 0;
  });
  var findOdd = integers.filter(function(num){
  return num % 2 !== 0;
  });
  
  if (even<odd) {
    return findEven[0];
  } else {
    return findOdd[0];
  }
  
}
