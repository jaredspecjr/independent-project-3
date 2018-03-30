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
  debugger;
  var one = [1];
  var zero = [0];
  var result = [];
  var newInput = userInput.toString();
  for (var i = 0; i <= newInput; i+=1){
    if (i % 3 === 0 && i !== 0){
      result.push("I'm sorry, Dave. I'm afraid I can't do that. ")
    } else if (zero.includes(i)){
      result.push("beep ");
    } else if (one.includes(i)){
      result.push("boop ");
    } else {
      result.push(i);
    }
  }
  return result;
}

$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#number").val());
    var result = beepboop(userInput);
    $("#userInput").append(result);
  });
});
