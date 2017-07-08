var targetNumber;
var crystalArray;
var crystalNumber
var score = 0;
var win = 0;
var loss = 0;

crystalNumber = Math.floor(Math.random() * 12) + 1;
console.log("crystalNumber" +  crystalNumber)

targetNumber = Math.floor(Math.random() * 120) + 19
console.log("targetNumber" + targetNumber)

$(document).ready(function() {

//generate unique random numbers in an array for the crystals
crystalArray = [];
while(crystalArray.length < 4) {
  var randomNumber = Math.floor(Math.random() * 12 ) + 1;
  if(crystalArray.indexOf(randomNumber) > -1) continue;
  crystalArray[crystalArray.length] = randomNumber;
}
console.log("crystalArray" + crystalArray)


});
