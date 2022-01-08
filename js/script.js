var generateBtn = document.querySelector("#generate");
var lowerSet = "abcdefghijklmnopqrstuvwxyz";
var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numSet = "0123456789";
var specialSet = "!()?[]`~;:!@#$%^&*+=";


// Write password to the #password input
function generatePassword() {
  var password = [];
  var passwordLength = prompt("Please enter a number between 8 and 128");
    if (!passwordLength) {
      return ("");
    }
    //password length need to be in the range of 8 and 128 caracters!

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a password length between 8 and 128 characters.")
      var tryAgain = confirm("Would you like to try again?");
      if (tryAgain) {
        generatePassword();
      } else {
        return ("");
      }
    }
    // If user chose lower case, include lower case
  var lowCase = confirm("Would you like your password to include lowercase letters?");
    // If user choose upper case, include upper case
  var upCase = confirm("Would you like your password to include uppercase letters?");
    // If user select numbers, include number
  var numbers = confirm("Would you like your password to include numbers?");
    //if user select special caracters, add specialchars
  var specialChars = confirm("Would you like your password to include special characters?");
  var passwordSet = "";

    if (lowCase) { 
      passwordSet = lowerSet;
    }
    if (upCase) {
      passwordSet = passwordSet + upperSet;
    }
    if (numbers) {
      passwordSet = passwordSet + numSet;
    }
    if (specialChars) {
      passwordSet = passwordSet + specialSet;
    }
    for ( var i = 0; i < passwordLength; i++ ) {
      password += passwordSet[Math.floor(Math.random() * passwordSet.length)];
  }
  return password;
};

function writePassword() {
  var password = generatePassword()
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);