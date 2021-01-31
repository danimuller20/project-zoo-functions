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
  // seu código aqui
  // mudanças comit
  return animals.filter(animal => ids.find(animalsIds => animal.id === animalsIds));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalName = animals.find(value => value.name === animal);
  return animalName.residents.every(animalAge => animalAge.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const employeerNames = employees.filter(value =>
    value.firstName === employeeName || value.lastName === employeeName);
  return employeerNames[0];
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const infEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return infEmployee;
}

function isManager(id) {
  // seu código aqui
  const compare = employees.some(employe => employe.managers.some(maneger => maneger === id));
  return compare;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const infEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(infEmployee);
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return animals.reduce((acumulator, currentValue) => {
      acumulator[currentValue.name] = currentValue.residents.length;
      return acumulator;
    }, {});
  }
  return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const qtdChild = !entrants.Child ? 0 : entrants.Child;
  const qtdSenior = !entrants.Senior ? 0 : entrants.Senior;
  const qtdAdult = !entrants.Adult ? 0 : entrants.Adult;
  return (prices.Child * qtdChild) + (prices.Senior * qtdSenior) + (prices.Adult * qtdAdult);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  // let horarios = {};
  // if(!dayName) {
  //   hours.map(day =>{
  //     horarios[day.key] = 'Open from 8am until 6pm',
  //   return horarios
  // }
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const animalEmployee = employees.find(value => value.id === id);
  const findId = animalEmployee.responsibleFor[0];
  const findSpecie = animals.find(value => value.id === findId);
  const old = findSpecie.residents.sort((a, b) => b.age - a.age);
  return [old[0].name, old[0].sex, old[0].age];
}

function increasePrices(percentage) {
  // seu código aqui

  function getSomaComPercentage(value) {
    return (Math.round(value + (((percentage / 100) * value) * 100))) / 100;
  }
  prices.Adult = getSomaComPercentage(prices.Adult);
  prices.Child = getSomaComPercentage(prices.Child);
  prices.Senior = getSomaComPercentage(prices.Senior);
}

function getFuncionarioESpecie(employee) {
  const name = `${employee.firstName} ${employee.lastName}`;
  const specie = employee.responsibleFor.map(idAnimal =>
    (animals.find(animal => animal.id === idAnimal).name));
  return { name, specie };
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const funcionarios = {};
  if (!idOrName) {
    employees.forEach((employee) => {
      const { name, specie } = getFuncionarioESpecie(employee);
      funcionarios[name] = specie;
    });
  }
  const achaFuncionarioId = employees.find(funcionario => funcionario.id === idOrName);
  if (achaFuncionarioId) {
    const { name, specie } = getFuncionarioESpecie(achaFuncionarioId);
    funcionarios[name] = specie;
  }
  const achaFuncionarioName = employees.find(funcionario => funcionario.firstName === idOrName);
  if (achaFuncionarioName) {
    const { name, specie } = getFuncionarioESpecie(achaFuncionarioName);
    funcionarios[name] = specie;
  }
  const achaFuncionarioLast = employees.find(funcionario => funcionario.lastName === idOrName);
  if (achaFuncionarioLast) {
    const { name, specie } = getFuncionarioESpecie(achaFuncionarioLast);
    funcionarios[name] = specie;
  }

  return funcionarios;
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
