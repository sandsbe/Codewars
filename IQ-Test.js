function iqTest(numbers){
// Need to create an array of numbers
  var arr = numbers.split(' ');
// Even or odd
  var even = 0;
  var odd = 0;
  for (var i = 0; i < 3; i++) {
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
// Find number with different evenness
var j = 0;
if (even>odd) {
  while(arr[j] % 2 === 0) {
    j++;
  }
} else {
  while(arr[j] % 2 !== 0) {
    j++;
  }
}
return j+1;
}
