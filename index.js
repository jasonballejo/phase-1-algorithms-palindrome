function isPalindrome(word) {
  let reversed = word.split('').reverse().join('')
  console.log(reversed)
    if(reversed === word) return true

    return false
  }
/*
  from writing a function called isPalindrome, return true if the word given is a palindrom. If not, then it needs to return false.
*/

/* 
  Add your pseudocode here
  write a function if the word is a palindrom then return true else return false
*/

/*
  Add written explanation of your solution here
  We start by creating a variable to first grab the word give and we split the word and revese it
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
