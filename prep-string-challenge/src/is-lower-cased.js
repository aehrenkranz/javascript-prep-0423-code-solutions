/* exported isLowerCased */
function isLowerCased(word) {
  const low = word.toLowerCase();
  if (low === word) {
    return true;
  } else {
    return false;
  }
}
