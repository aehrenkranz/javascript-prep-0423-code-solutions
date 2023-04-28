/* exported getValues */
function getValues(object) {
  const arr = [];
  for (const x in object) {
    arr.push(object[x]);
  }
  return arr;
}
