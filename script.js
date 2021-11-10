// Assignment code here
var passwordLength
var arraylength
var arrayElement
var numberIncluded
var lowerLetter
var upperLetter
var specialInclude
var specialIncluded = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")","_","-" ]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var allPoss = []
var passwordC 
var passwordText
var numberinArray
var password
var passwordNumber
var x
var number


function userprompt() {
  passwordLength = prompt("How many characters do you want in the password", x)
  passwordNumber = parseInt(x);
  numberIncluded = confirm("Do you want the password to contain numbers")
  lowerLetter = confirm("Do you want lower case letters in your password")
  upperLetter = confirm("Do you want upper case letters in your password")
  specialInclude = confirm("Do you want special characters in your password")
  console.log(x)
}
function generatePassword(){ 
  userprompt()
  if (numberIncluded) {
    allPoss.concat(numbers) 
  } if (specialInclude) {
    allPoss.concat(specialIncluded)
  }
  if (lowerLetter){ allPoss.concat(lowerLetters) }
  if (upperLetter) { allPoss.concat(upperLetters)  }
  numberinArray= allPoss.length
  console.log(allPoss.length);
  console.log(passwordNumber);
  

//calculate password based on user input
passwordC=0;
for (let number=0; number <= passwordNumber-1 ; number = number+1 ) {
  Math.round(Math.random*numberinArray) = arrayElement
  passwordC = (allPoss(arrayElement) + passwordC) ; 
}
password = passwordC ; console.log(password); 

console.log(passwordC);
console.log(password);
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
