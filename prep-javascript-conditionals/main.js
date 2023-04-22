const age = 27;
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
const ageCheck = isAdult(age);
console.log(`This person is an adult: ${ageCheck}`);
const student1Score = 97;
function didStudentPass(score) {
  let studentPassing = true;
  if (score < 70) {
    studentPassing = false;
  }
  return studentPassing;
}
console.log('This student passed:', didStudentPass(student1Score));
const student2Score = 102;
function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else return 'A++';
}
console.log(
  `This student got ${gradeCalculator(student2Score)} as their final grade`
);
const season = 'winter';
function seasonMessenger(season) {
  if (season === 'summer') {
    return "it's hot today";
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return "it's cold today";
  } else return 'please enter a valid season';
}
console.log(seasonMessenger(season));
const dayOfTheWeek = 'friday';
function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend!';
  } else return "It's a weekday!";
}
console.log(dayDetector(dayOfTheWeek));
