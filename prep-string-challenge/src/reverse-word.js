/* exported reverseWord */
function reverseWord(word) {
  let newWord = '';
  for (let x = word.length - 1; x >= 0; x--) {
    newWord = newWord + word[x];
  }
  return newWord;
}
