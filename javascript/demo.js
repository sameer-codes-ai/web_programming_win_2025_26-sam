const prompt = require('prompt-sync')();

const name = prompt('What is your name? ');
console.log('Hey there ' + name);

const age = prompt('How old are you? ');
console.log('You are ' + age + ' years old.');

const regNo = prompt('Enter Register Number: ');
const cgpa = prompt('Enter CGPA: ');

console.log('\n--- Student Details ---');
console.log('Register No : ' + regNo);
console.log('Name        : ' + name);
console.log('CGPA        : ' + Number(cgpa).toFixed(2));