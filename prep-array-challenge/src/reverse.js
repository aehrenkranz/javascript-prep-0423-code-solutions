/* exported reverse */
function reverse(array) {
  const arr = [];
  let y = 0;
  for (let x = array.length - 1; x >= 0; x--) {
    arr[y] = array[x];
    y++;
  }
  return arr;
}
