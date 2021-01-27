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
const { animals } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // verifica se o array está vazio
  if (!ids) {
    return [];
  }
  return animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // find: busca por animal / every: analisa a idade e compara se for maior dar falso.
  return animals
    .find(buscAnimal => buscAnimal.name === animal)
    .residents.every(idade => idade.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees
  .find(names => names.firstName === employeeName
  || names.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // return employees
  // .filter(associatedWith => associatedWith.managers && associatedWith.
  // responsibleFor).employees.find(personalInfor => personalInfo.id && personal
  // Info.firstName && personalInfo.lastName);
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}
// exercicio abaixo feito através do plantão do Oliva
function schedule(dayName) {
  const hours = data.hours;
  const allDays = Object.keys(hours);
  const schedules = {};
  allDays.forEach((day) => {
    function change24HoursFormatTo12Format(hour) {
      const formattedHour = hour - 12;
      return formattedHour < 0 ? hour : formattedHour;
    }
    const { open, close } = hours[day];

    if (open === 0 && close === 0) {
      schedules[day] = 'CLOSED';
    } else {
      schedules[day] = `Open from ${open}am until ${change24HoursFormatTo12Format(close)}pm`;
    }
  });
  if (dayName === undefined) {
    return schedules;
  }
  return { [dayName]: schedules[dayName] };
}
schedule('Tuesday');

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}
// Questões resolvidas no plantão com Murilo e Bernardo
function getAnimalListFromEmplyee(employee) {
  return employee.responsibleFor.map(
    animalId => animals.find(animal => animalId === animal.id).name);
  // ['id1', 'id2'] => ['lion', 'tinger']
}
function getEmployeeFullName(employee) {
  return `${employee.firstName} ${employee.lastName}`;
}

function getAllEmployeesAndAnimals() {
  return employees.reduce((accumulator, employee) => {
    const animalList = getAnimalListFromEmplyee(employee);
    accumulator[getEmployeeFullName(employee)] = animalList;
    return accumulator;
  }, {});
}
function getEmployeedByNameOrId(idOrName) {
  return employees.find(
    employee =>
      employee.id === idOrName ||
      employee.firstName === idOrName ||
      employee.lastName === idOrName);
}

function employeeCoverage(idOrName) {
  // Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais são responsáveis
  if (!idOrName) {
    // firstName, lastName de employees, responsibleFor
    return getAllEmployeesAndAnimals();
  }
  const targetEmployee = getEmployeedByNameOrId(idOrName);
  const animalList = getAnimalListFromEmplyee(targetEmployee);
  const key = getEmployeeFullName(targetEmployee);
  return { [key]: animalList };
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
