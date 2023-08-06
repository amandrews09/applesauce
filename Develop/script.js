// Assignment code here

// Array of uppercase letters
var uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Array of lowercase letters
var lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h,",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of special characters
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// Array of numbers
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//empty array to add string types from user
var passwordChosenChar = [];



//function to get element from array
function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];

  return randomElement;
}

//function to generate password
function generatePassword() {
  // var choices = passwordChoices();
  let passwordLength = prompt("Pick a password length between 8 and 128");
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }
  if (passwordLength > 128) {
    alert("Password length must be less than 129 characters");
    return;
  }
  //prompts for user to choose what kind of characters the password should have
  var hasSpecialChar = confirm("Click OK to include special characters");
  var hasNumbers = confirm("Click OK to include numbers");
  var hasLowercase = confirm("Click OK to include lowercase letters");
  var hasUppercase = confirm("Click OK to include uppercase letters");

  //storing input
  var result = [];
  //storing possible characters
  var possibleCharacters = [];
  //storing guaranteed characters
  var definiteCharacters = [];

  //adds array of uppercase letters
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    definiteCharacters.push(getRandom(uppercaseCharacters));
  }
  //adds array of lowercase letters
  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    definiteCharacters.push(getRandom(lowercaseCharacters));
  }
  //adds array of special characters
  if (hasSpecialChar) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    definiteCharacters.push(getRandom(specialCharacters));
  }
  //adds array of numbers
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numberCharacters);
    definiteCharacters.push(getRandom(numberCharacters));
  }

  for (var i = 0; i < passwordLength; i++) {
    var possibleCharacters = getRandom(possibleCharacters);

    result.push(possibleCharacters);
  }

  for (var i = 0; i < definiteCharacters.length; i++) {
    result[i] = definiteCharacters[i];
  }
  console.log("possibleCharacters: ", possibleCharacters)
  console.log("definiteCharacters:", definiteCharacters)
  console.log("result: ", result)
  return result.join("");
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
