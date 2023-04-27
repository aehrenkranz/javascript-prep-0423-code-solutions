/* exported isUpperCased */
function isUpperCased(word) {
  const capi = word.toUpperCase();
  if (capi === word) {
    return true;
  } else {
    return false;
  }
}
