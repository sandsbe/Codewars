function tripledouble(num1, num2) {
  var counter1 = 0;
  var num2Checker = [];
  var newNum1 = num1.toString().split('');
  var newNum2 = num2.toString().split('');
  var answer = 0;
  for (var i = 0; i < newNum1.length; i++) {
    if (newNum1[i] === newNum1[i+1] && newNum1[i] === newNum1[i+2]) {
      counter1++;
      num2Checker.push(newNum1[i]);
    }
  }
  for (i = 0; i < newNum2.length; i++) {
    for (var j = 0; j < num2Checker.length; j++) {
      if (newNum2[i] === num2Checker[j] && newNum2[i+1] === num2Checker[j] && counter1 > 0) {
        answer = 1;
      }
    }
  }
  return answer;
}
