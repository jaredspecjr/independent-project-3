debugger;
function zeros(number) {
  if (number === 0){
    return "beep";
  }
}
function ones(number) {
  if (number === 1){
    return "boop";
  }
}
function dave(number) {
  var output = "";
  if (number % 3 === 0){
    output = "I'm sorry Dave. I'm afraid I can't do that."
  }
  return output;
}

var beepboop = function(userInput){
  var result = [];
  for (var i = 0; i <= userInput; i++){
    if (i === 0){
      result.push("beep");
    }
  }
  return result;
}




// $(document).ready(function(){
//
// });
