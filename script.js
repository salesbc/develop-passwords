// Assignment code here
var passwordLength
var arraylength
var arrayElement
var numberIncluded
var lowerLetter
var upperLetter
var specialInclude
var specialIncluded = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var allPoss = []
var passwordText
var numberinArray
var password = []
var passwordNumber
var number


function userprompt() {
  passwordLength = prompt("How many characters do you want in the password")
  numberIncluded = confirm("Do you want the password to contain numbers")
  lowerLetter = confirm("Do you want lower case letters in your password")
  upperLetter = confirm("Do you want upper case letters in your password")
  specialInclude = confirm("Do you want special characters in your password")

}
function generatePassword() {
  userprompt()
  if (numberIncluded) {

    allPoss = allPoss.concat(numbers)
  } if (specialInclude) {
    allPoss = allPoss.concat(specialIncluded)
  }
  if (lowerLetter) { allPoss = allPoss.concat(lowerLetters) }
  if (upperLetter) { allPoss = allPoss.concat(upperLetters) }
  numberinArray = allPoss.length
  console.log(allPoss.length);
  console.log(allPoss)


  //calculate password based on user input


  for (let number = 0; number <= passwordLength - 1; number = number + 1) {
    arrayElement = Math.floor(Math.random() * allPoss.length)
    password = password + allPoss[arrayElement];
    console.log(arrayElement);
  }

  console.log(password);
  return password
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
