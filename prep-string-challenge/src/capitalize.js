/* exported capitalize */
function capitalize(word) {
  const remainingString = word.slice(1);
  const newWord = word.charAt(0).toUpperCase() + remainingString.toLowerCase();
  return newWord;
}
