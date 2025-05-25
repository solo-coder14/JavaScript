function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Example usage:
  console.log(isPalindrome("madam")); // true
  console.log(isPalindrome("hello")); // false