// Assignment code here

// Array of special characters
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numbers
var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase letters
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h,', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase letters
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function myFunction() {
  let passwordLength = prompt("Pick a password length between 8 and 128");
  if (passwordLength < 8) {
    alert('Password length must be at least 8 characters');
    return;  
  }
  if (passwordLength > 128) {
    alert('Password length must be less than 129 characters');
    return;
  }
  var hasSpecialChar = confirm('Click OK to include special characters');
  var hasNumbers = confirm('Click OK to include numbers');
  var hasLowercase = confirm('Click OK to include lowercase letters');
  var hasUppercase = confirm('Click OK to include uppercase letters');

  var passwordChoices = {
    passwordLength: passwordLength,
    hasSpecialChar: hasSpecialChar,
    hasNumbers: hasNumbers,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
  };
  return passwordChoices

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
