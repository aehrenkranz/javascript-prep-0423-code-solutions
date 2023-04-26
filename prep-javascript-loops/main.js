function whileLoop1() {
  const newArray = [];
  while (newArray.length < 10) {
    newArray.push(newArray.length);
  }
  return newArray;
}
console.log(whileLoop1());
function whileLoop2() {
  const newArray2 = [];
  do {
    newArray2.push(newArray2.length * 2);
  } while (newArray2.length < 10);
  return newArray2;
}
console.log(whileLoop2());
function forLoop1() {
  const newArray3 = [];
  for (let i = 0; i < 10; i++) {
    newArray3.push(newArray3.length);
  }
  return newArray3;
}
console.log(forLoop1());
function forloop2() {
  const timer = '';
  for (let i = 0; i < 100; i++) {
    console.log('Time til explosion: ' + (100 - i) + '!');
  }
  return timer;
}
console.log(forloop2());
function forInLoop1(object) {
  const newArray4 = [];
  for (const x in object) {
    newArray4.push(x);
  }
  return newArray4;
}
const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
console.log(forInLoop1(object));
function forInLoop2(object) {
  const newArray5 = [];
  for (const x in object) {
    newArray5.push(object[x]);
  }
  return newArray5;
}
console.log(forInLoop2(object));
