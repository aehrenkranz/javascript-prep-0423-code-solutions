function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const addTwoNumbersResult = addTwoNumbers(7, 7);
console.log(addTwoNumbersResult);
function convertHoursToMinutes(hours) {
  return hours * 60;
}
const convertedHours = convertHoursToMinutes(4);
console.log('converted hours equals ' + convertedHours + ' minutes');
function getGreeting(name) {
  return "What's up " + name + '?';
}
const getGreeted = getGreeting('dude');
console.log(getGreeted);
function addAndMultiplyBy5(num1, num2) {
  return num1 + num2 * 5;
}
const calculationResult1 = addAndMultiplyBy5(2, 2);
console.log(calculationResult1);
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const calculationResult2 = multiplyAndDivideBy5(8, 1);
console.log(calculationResult2);
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const calculationResult3 = subtractTwoNumbers(77, 7);
console.log(calculationResult3);
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
const calculationResult4 = getCircleCircumference(7);
console.log(calculationResult4);
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
const giveName = getFullName('Steve', 'Rogers');
console.log(giveName);
function cube(number) {
  return number ** 3;
}
const calculationResult5 = cube(10);
console.log(calculationResult5);
