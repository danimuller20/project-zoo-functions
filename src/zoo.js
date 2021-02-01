/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const { animals, employees, prices } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  return animals.filter((animalId, param) => animalId.id === ids[param]);
}

function animalsOlderThan(animal, age) {
  const findAnimal = animals.find(specie => specie.name === animal);
  return findAnimal.residents.every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const findNames = employees.find(employee =>
  employeeName === employee.firstName || employeeName === employee.lastName);
  return findNames;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  return employees.some(employee => (employee.managers).find(managerId => managerId === id));
}

// parameter default
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEmployee);
}

function animalCount(species) {
  let animalObj = {};
  animals.forEach(({ name, residents }) => (animalObj[name] = residents.length));
  if (species) {
    animalObj = animalObj[species];
  }
  return animalObj;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  let acc = 0;
  Object.keys(entrants).forEach(key => (acc += (entrants[key] * prices[key])));
  return acc;
}
//-------------------------------------------------------------------------------------------------
function animalMap() {

}

//-------------------------------------------------------------------------------------------------

  // Se um único dia for passado, retorna somente este dia em um formato legível para humanos

function schedule(dayName) {
  // PSEUDO CÓDIGO
  // 1. pegar o local onde esta meus dias [X]
  // 2. passar por cada entrada do obj para pegar as infos do dia [x]
  // 3. pegar as infos do zoo [x]
  // 4. montar o cronograma [x]
  // 5. retornar o cronograma [x]

  const hours = data.hours;
  const days = Object.keys(hours);
  const newSchedule = {};

  days.forEach((day) => {
    const { open, close } = hours[day];

    if (open === 0 && close === 0) {
      newSchedule[day] = 'CLOSED';
    } else {
      newSchedule[day] = `Open from ${open}am until ${change24HourFormatTo12Format(close)}pm`;
    }
  });

  if (!dayName) {
    return newSchedule;
  }

  return { [dayName]: newSchedule[dayName] };
}

function change24HourFormatTo12Format(hour) {
  const formattedHour = hour - 12;
  return formattedHour < 0 ? hour : formattedHour;
}

// -------------------------------------------------------------------------

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

// ------------------------------------------------------------------------
// Início do exercício employeeCoverage

function getAnimalListFromEmployee(employee) {
  return employee.responsibleFor
    .map(animalId => animals.find(animal => animalId === animal.id).name);
}

function getFullName(employee) {
  return `${employee.firstName} ${employee.lastName}`;
}

function getAllEmployeesAndAnimals() {
    // firstName, lastName de employees, responsibleFor
  return employees.reduce((acc, employee) => {
    // ['id1', 'id2'] => ['lions', 'tiger'] a cada iteração do .reduce
    const animalList = getAnimalListFromEmployee(employee);
      // constroi chave do objeto
    acc[getFullName(employee)] = animalList;
    return acc;
  }, {});
}

function getEmployeeBynameOrId(idOrName) {
  return employees
  .find(employee => employee.id === idOrName
  || employee.firstName === idOrName || employee.lastName === idOrName);
}

function employeeCoverage(idOrName) {
// Sem parametros, retorna uma lista de funcionários e os animais pelos quais eles são responsaveis
  if (!idOrName) {
    return getAllEmployeesAndAnimals();
  }

// Se passarmos o ID, retorna uma lista com os animais pelos
// quais o funcionário é responsavel
  const findEmployee = getEmployeeBynameOrId(idOrName);
  const animalList = getAnimalListFromEmployee(findEmployee);
  const key = getFullName(findEmployee);
  return { [key]: animalList };
// Se passarmos o nome ou o último nome, retorna uma lista com os animais pelos quais
// o funcionário é responsável
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
