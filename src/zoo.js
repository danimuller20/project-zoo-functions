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

const data = require('./data');
const { animals } = require('./data');
const { employees } = require('./data');

function animalsByIds(...ids) {
  // Retorna um array de species cuja o ID dela exista no array de ids passado como parametro.
  const selectedAnimals = animals.filter(species => ids.some(id => id === species.id));

  return selectedAnimals;
}

function animalsOlderThan(animal, age) {
  const animalObjetc = animals.find(animalFromDB => animalFromDB.name === animal);
  const isAllAboveMinimalAge = animalObjetc.residents.every(resident => resident.age >= age);
  return isAllAboveMinimalAge;
}

function employeeByName(employeeName) {
  if (!employeeName) { return {}; }
  return employees.find(name => name.firstName === employeeName || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  function isManegerHere(employe, compareID) {
    return employe.managers.some(manegerId => manegerId === compareID);
  }
  return employees.some(employe => isManegerHere(employe, id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor };
  data.employees.push(newEmployee);
}

function getResidentNumber(animalName) {
  let numbersOfResidents = 0;
  const animalData = data.animals.find(animalDatas => animalName === animalDatas.name);
  numbersOfResidents = animalData.residents.length;
  return numbersOfResidents;
}

function getNumbersOfEachAnimal() {
  const residentNumbersOfEachAnimal = {};
  data.animals.forEach((animalData) => {
    const numberOfResidents = animalData.residents.length;
    residentNumbersOfEachAnimal[animalData.name] = numberOfResidents;
  });
  return residentNumbersOfEachAnimal;
}

function animalCount(species) {
  return species ? getResidentNumber(species) : getNumbersOfEachAnimal();
}

function entryCalculator(entrants = 0) {
  // seu código aqui
  const pricesData = data.prices;
  const pricesCategories = Object.keys(pricesData);
  const totalPrice = pricesCategories.reduce((accumulator, priceCategory) => {
    const priceToAdd =
    entrants[priceCategory] ? entrants[priceCategory] * pricesData[priceCategory] : 0;

    const priceToPay = accumulator + priceToAdd;
    return priceToPay;
  }, 0);
  return totalPrice;
}

//  Desafio animalMap
function createObjectKeysAsDirections() {
  const animalLocationData = {};
  data.animals.forEach((animal) => {
    if (!(animalLocationData[animal.location])) {
      animalLocationData[animal.location] = [];
    }
  });
  return animalLocationData;
}

function insertAnimalsNamesInLocation(animalLocationData) {
  data.animals.forEach((animal) => {
    const animalLocation = animal.location;
    const animalName = animal.name;
    animalLocationData[animalLocation].push(animalName);
  });
}

function getSpecieDataByName(specieName) {
  return data.animals.find(animal => animal.name === specieName);
}

function putAnimalNames(animalLocationData) {
  const locations = Object.keys(animalLocationData);
  locations.forEach((location) => {
    animalLocationData[location].forEach((specieName, index) => {
      const specieData = getSpecieDataByName(specieName);
      const specieResidentsNames = specieData.residents.map(resident => resident.name);
      const newObjectSpecieNames = {};
      newObjectSpecieNames[specieName] = specieResidentsNames;
      animalLocationData[location][index] = newObjectSpecieNames;
    });
  });
}


function filterResidentBySex(animalLocationData, sex) {
  const locations = Object.keys(animalLocationData);
  locations.forEach((location) => {
    const specieResidents = animalLocationData[location];

    specieResidents.forEach((specie, index) => {
      const specieName = (Object.keys(specie))[0];
      const specieData = getSpecieDataByName(specieName);

      const residentBySex = specieData.residents.filter(resident => resident.sex === sex);

      const namesOfResidentBySex = residentBySex.map(resident => resident.name);
      animalLocationData[location][index][specieName] = namesOfResidentBySex;
    });
  });
}

function sortAnimalsNames(animalLocationData) {
  const locations = Object.keys(animalLocationData);
  locations.forEach((location) => {
    animalLocationData[location].forEach((specie, index) => {
      const specieName = (Object.keys(specie))[0];
      const residentsNames = specie[specieName];
      residentsNames.sort();
      animalLocationData[location][index][specieName] = residentsNames;
    });
  });
}

function animalMap(options = {}) {
  //  Codigo aqui
  //  1 - Sem parametros, retorna animais categorizados por localização
  //  2 - Com a opção sorted, retorna anomes de animais ordenados
  //  3 - Com a pḉão sex:'female' ou 'male' especificada, retorna somente nomes de animais filtrado
  //  4 - Retorna informações ordenadas e com sexo de includeNames for true

  //  1º passo - Cria as chaves do objeto com as direções, {Objeto com chaves sem valores}
  //  2º passo - Insere os animais em array e string em cada chave(direção)

  //  3º passo - Se a opção includesNames não for true, retorna este objeto
  //  3º passo - Se a opção includesNames for true, vai fazer os seguintes passos

  //  3.1º passo - Com a opção includesNames, substitui a string do nome do animal, por um objeto
  //  do animal, onde a unica chave dele é o nome da especie, e o valor é um array com os nomes
  //  dos animais desta especie.
  //  3.2º passo - Com a opção female: Filtra o objeto do animal pelo sexo
  const { includeNames, sex, sorted } = options;
  const animalLocationData = createObjectKeysAsDirections();
  insertAnimalsNamesInLocation(animalLocationData);
  if (includeNames) {
    putAnimalNames(animalLocationData);
    if (sex) {
      filterResidentBySex(animalLocationData, sex);
      console.log(sex);
    }
    if (sorted) {
      sortAnimalsNames(animalLocationData);
    }
  }
  return animalLocationData;
}

//  Desafio schedule

function createDayKeyAndHourValue(sourceObject, newObject) {
  sourceObject.forEach((dayData) => {
    const dayName = dayData[0];
    const openHour = `${dayData[1].open}am`;
    const closedHour = `${dayData[1].close - 12}pm`;
    newObject[dayName] = dayName === 'Monday' ? 'CLOSED' : `Open from ${openHour} until ${closedHour}`;
  });
}

function schedule(dayName) {
  const openingHoursDataSource = Object.entries(data.hours);
  const allOpeningHours = {};
  createDayKeyAndHourValue(openingHoursDataSource, allOpeningHours);
  const getSpecificDay = (day) => {
    const dayInfo = {};
    dayInfo[day] = allOpeningHours[day];
    return dayInfo;
  };
  return dayName ? getSpecificDay(dayName) : allOpeningHours;
}

function oldestFromFirstSpecies(id) {
  // 1 - Pega a primeira especie de animal gerenciado pelo funcionario
  // 2 - Retorna array com nome, sexo e idade do animal mais velho
  const employeeData = data.employees.find(employee => employee.id === id);
  const firstAnimalID = employeeData.responsibleFor[0];
  const animalResidents = data.animals.find(animal => animal.id === firstAnimalID).residents;
  const oldestAnimalAge = animalResidents.reduce((accumulator, resident) =>
    ((resident.age > accumulator) ? resident.age : accumulator), 0);
  const oldestAnimalResident = animalResidents.find(animal => animal.age === oldestAnimalAge);
  const { name, sex, age } = oldestAnimalResident;
  const returnData = [name, sex, age];
  return returnData;
}

function increasePrices(percentage) {
  const pricesOptions = Object.keys(data.prices);
  const priceRateToChange = 1 + (percentage / 100);
  pricesOptions.forEach(priceOption =>
  (data.prices[priceOption] =
    (Math.round((data.prices[priceOption] * priceRateToChange) * 100)) / 100));
}

function getEmployeesNames() {
  const employeesData = data.employees;
  const employeesNames = employeesData.map(employeeData => `${employeeData.firstName} ${employeeData.lastName}`);
  return employeesNames;
}

function getAnimalNameByAnimalId(animalID) {
  const animalData = data.animals.find(animal => animal.id === animalID);
  return animalData.name;
}

function getAnimalsResponsibles(employeeName) {
  const employeeData = data.employees.find(employee => `${employee.firstName} ${employee.lastName}` === employeeName);
  const animalsResponsible = employeeData.responsibleFor.map(animalID =>
    getAnimalNameByAnimalId(animalID));
  return animalsResponsible;
}

function getEmployeeNameById(id) {
  const employeeData = data.employees.find(employee => employee.id === id);
  return `${employeeData.firstName} ${employeeData.lastName}`;
}

function employeeCoverage(idOrName) {
  // Sem parametro, retorna lista de funcionario e os animais responsaveis
  const employeesNames = getEmployeesNames();
  const employeesVsAnimalsResposables = employeesNames.reduce((accumulator, employeeName) => {
    accumulator[employeeName] = getAnimalsResponsibles(employeeName);
    return accumulator;
  }, {});
  function getSpeficicEmployee() {
    const employee = {};
    const employeeFullName = employeesNames.find(employeName =>
      employeName.includes(idOrName)) || getEmployeeNameById(idOrName);
    employee[employeeFullName] = employeesVsAnimalsResposables[employeeFullName];
    return employee;
  }
  return idOrName ? getSpeficicEmployee() : employeesVsAnimalsResposables;
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
