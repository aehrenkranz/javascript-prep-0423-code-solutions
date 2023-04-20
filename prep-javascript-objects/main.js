const person = {
  firstName: 'Jack',
  lastName: 'Cooper',
  hobby: 'Piloting',
};
const fullName = `${person['firstName']} ${person['lastName']}`;
console.log(fullName);
person.job = 'Titan Pilot';
console.log(person.job);
person['previousJob'] = 'Soldier';
console.log(person['previousJob']);
console.log(person);
