function squareDigits(num){
  // num to string to array, map array with equation, join, and Number
  return Number(num.toString().split('').map(n => n*n).join(''));  
}
