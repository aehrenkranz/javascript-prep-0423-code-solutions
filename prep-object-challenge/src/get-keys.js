/* exported getKeys */
function getKeys(object) {
  const arr = [];
  for (const x in object) {
    arr.push(x);
  }
  return arr;
}
