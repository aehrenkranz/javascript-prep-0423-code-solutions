/* exported compact */
function compact(array) {
  let x = 0;
  const arr = [];
  for (let y = array.length - 1; y >= 0; y--) {
    if (array[x]) {
      arr.push(array[x]);
      x++;
    } else {
      x++;
    }
  }
  return arr;
}
