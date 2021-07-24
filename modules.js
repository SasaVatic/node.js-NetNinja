// const xyz = require('./people');
const { people, ages } = require('./people'); // destructuring object

// console.log(xyz.people, xyz.ages);
console.log(people, ages);

const os = require('os'); // modul za informacije o operativnom sistemu

console.log(os.platform(), os.homedir());