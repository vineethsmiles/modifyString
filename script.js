// function to clear the input keycount textarea and output 
function clearTextarea() {
  document.getElementById("keyValPairs").value = '';
  document.getElementById("prescreen-output").innerHTML = '';
}

function keyValueTotals() {
  //convert user-input to lowercase for case insensitivity and remove all spaces
  var userInput = document.getElementById("keyValPairs").value.toLowerCase();
  userInput = userInput.replace(/ /g, '');

  // splitting input into an array of strings on each newline character
  var input = userInput.split("\n");

  var obj = {};

  for (var i = 0; i < input.length; i++) {
    // split each string at ':'
    var keyValues = input[i].split(':');

    // if the current key already exists in the object, add new value to it's current value 
    if (obj.hasOwnProperty(keyValues[0])) {
      // get current key's value
      var value = obj[keyValues[0]];

      // add new value to the sum of this key
      value += parseInt(keyValues[1]);

      // set this key's value to the new calculated sum
      obj[keyValues[0]] = value;
    } else {
      // add the new key and it's value to the object
      obj[keyValues[0]] = parseInt(keyValues[1]);
    }
  }

  var output = "";

  // loop through the object keys/values
  $.each(obj, function(key, value) {
    console.log(key);
    key = key.toLowerCase().replace(/[^a-z]+/g,'');

    // Checking if the key is a palindrome
    if(key === key.split('').reverse().join('')){
      // HTML string for output
      output += '<p>The total for <span>' + key + '</span>(prescreen-palindrome) is <span>' + value + '</span>.</p>';
    }
    else{
      output += '<p>The total for <span>' + key + '</span> is <span>' + value + '</span>.</p>';
    }
  });

  // output message
  $('#prescreen-output').html(output);
}