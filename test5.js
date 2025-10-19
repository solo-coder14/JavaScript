function isAnagram(s, t) {
  if (s.length !== t.length) return false

  let charMap = new Map();

  for (let char of s) {
    charMap.set(char, (charMap.get(char) || 0) + 1)
  }

  for (let char of t) {
    if(!charMap.has(char)) return false
    charMap.set(char, charMap.get(char) - 1)
    if (charMap.get(char) === 0) charMap.delete(char)
  }

  return charMap.size == 0;
}

let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s, t)); // Output: true
