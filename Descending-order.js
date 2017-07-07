function descendingOrder(n){
// 1. Turn number into string, put string into arry
  var arr = n.toString().split('');
// 2. Compare function for sort method
  function compare (a, b) {
    return b - a;
  }
  arr.sort(compare);
  return Number(arr.join(''));
}
