// Assignment code here

function myFunction() {
  let passwordLength = prompt("choose a password length of at least 8 characters and no more than 128 characters");
  if (passwordLength < 8) {
    alert('Password length must be at least 8 characters');
    return;  
  }
  if (passwordLength > 128) {
  alert('Password length must be less than 128 characters');
  return;
  }
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
