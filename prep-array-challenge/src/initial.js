/* exported initial */
function initial(array) {
  const arr = [];
  for (let x = 0; x < array.length - 1; x++) {
    arr[x] = array[x];
  }
  return arr;
}
