const data = require('./data');
const { animals, employees, hours, prices } = data;


const animal =  animals.filter((animal) => animal.name === 'tigers')[0].popularity;
console.log(animal)