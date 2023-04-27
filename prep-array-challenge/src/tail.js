/* exported tail */
function tail(array) {
  const arr = [];
  let y = 0;
  for (let x = 1; x < array.length; x++) {
    arr[y] = array[x];
    y++;
  }
  return arr;
}
