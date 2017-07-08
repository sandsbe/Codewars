function list(names){
  var answer = "";
  if (names.length === 0) {
    return answer;
  } else if (names.length === 1) {
    return names[0]['name'];
  } else if (names.length === 2){
    return names[0]['name'] + " & " + names[1]['name'];
  } else if (names.length === 3){
    answer = names[0]['name'] + ", " + names[names.length-2]['name'] + " & " + names[names.length-1]['name']
    return answer;
  } else {
    answer += names[0]['name'] + ", ";
    for (var i = 1; i < names.length-2; i++) {
      answer += names[i]['name'] + ", ";
    }
    answer += names[names.length-2]['name'] + " & " + names[names.length-1]['name'];
  }
  return answer;
}
