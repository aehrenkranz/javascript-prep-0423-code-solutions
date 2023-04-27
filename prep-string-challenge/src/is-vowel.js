/* exported isVowel */
function isVowel(char) {
  const y = char.toLowerCase();
  const x = y === 'a' || y === 'e' || y === 'i' || y === 'o' || y === 'u';
  return x;
}
