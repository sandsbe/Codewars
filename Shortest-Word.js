function findShort(s){
  // create array of words from string
  var arr = s.split(' ');
  
  // Write compare function to use in sort method
  function compare (a, b) {
    if (a.length <= b.length) {
      return -1;
    } else {
      return 1;
    }
  }
  arr.sort(compare)
  
  // Return length of shortest word, should be at beginning of array
  return arr[0].length;
  
}
