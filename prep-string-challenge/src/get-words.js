/* exported getWords */
function getWords(string) {
  const x = string.split(' ');
  const y = [];
  if (x[0] === '') {
    return y;
  } else {
    return x;
  }
}
