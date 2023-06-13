/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}
function isPalindrome(str) {
  let s1 = ''
  let s2 = ''
  for(let i=0;i<str.length;i++)
  {
    if (isAlphanumeric(str[i]))
      s1+=str[i].toLowerCase()
    if(isAlphanumeric(str[str.length-i-1]))
      s2+=str[str.length-i-1].toLowerCase()
  }
  console.log(s1, s2)
  if (s1 == s2)
  {return true}
  else
  return false
}
console.log(isPalindrome('Able, was I ere I saw Elba!'))
module.exports = isPalindrome;
