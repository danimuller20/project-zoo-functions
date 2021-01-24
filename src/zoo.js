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

const { animals } = data;
const { employees } = data;
const { prices } = data;
const { hours } = data;

const animalsByIds = (...ids) => animals.filter(animal => ids.includes(animal.id));

const getAnimalByName = animalName => animals.find(animal => animal.name === animalName);

const animalsOlderThan = (animal, age) => {
  const { residents } = getAnimalByName(animal);
  return residents.every(resident => resident.age >= age);
};

const employeeById = id => employees.find(employee => employee.id === id);

const employeeByName = (employeeName) => {
  const foundEmployee = employees.find(
    employee => employee.firstName === employeeName || employee.lastName === employeeName);
  return { ...foundEmployee };
};

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

// const getEmployeeById = id => employees.find(employee => employee.id === id);

const isManager = (id) => {
  const managersIds = employees.reduce((acc, current) => [...acc, ...current.managers], []);
  return managersIds.includes(id);
};

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
};

const animalCount = (species) => {
  let countReport = animals.reduce((accObject, current) => {
    accObject[current.name] = current.residents.length;
    return accObject;
  }, {});
  if (Object.keys(countReport).includes(species)) countReport = countReport[species];
  return countReport;
};

const entryCalculator = (entrants = {}) => Object.entries(entrants).reduce(
  (priceAccumulator, currentGroup) => {
    const price = prices[currentGroup[0]];
    const quantity = currentGroup[1];
    return priceAccumulator + (price * quantity);
  }, 0);

const filterResidentsBySex = (sex, residents) => {
  if (sex) {
    residents = residents.filter(resident => resident.sex === sex);
  }
  return residents;
};

const getResidentsNames = residents => residents.reduce((array, currentResident) => {
  array.push(currentResident.name);
  return array;
}, []);

const sortIfEnabled = (sorted, residents) => (sorted ? residents.sort() : residents);

const mapAnimal = ({ location, name, residents }) => ({
  name,
  location,
  byOptions({ includeNames = false, sex = false, sorted = false } = {}) {
    if (includeNames) {
      residents = filterResidentsBySex(sex, residents);
      residents = getResidentsNames(residents);
      residents = sortIfEnabled(sorted, residents);
      this.map = { [this.name]: residents };
    }
  },
  accumulateWith(accumulator) {
    this.accumulator = accumulator;
    const { [location]: locationAnimals = [] } = accumulator;
    this.locationAnimals = locationAnimals;
    this.map = name;
  },
});

const animalMap = options => animals.reduce((accumulatorObj, currentSpecies) => {
  const speciesMap = mapAnimal(currentSpecies);
  speciesMap.accumulateWith(accumulatorObj);
  speciesMap.byOptions(options);
  accumulatorObj[speciesMap.location] = [...speciesMap.locationAnimals, speciesMap.map];
  return accumulatorObj;
}, {});

const getReadbleHour = hour => (hour > 12 ? `${hour - 12}pm` : `${hour}am`);

const getInfoFromDay = (day, infoObject) => (day ? { [day]: infoObject[day] } : infoObject);

const schedule = (dayName) => {
  const outputObject = Object.entries(hours).reduce(
    (daysAccumulator, [currentDayName, { open, close }]) => {
      const info = open === 0 ? 'CLOSED' : `Open from ${getReadbleHour(open)} until ${getReadbleHour(close)}`;
      daysAccumulator[currentDayName] = info;
      return daysAccumulator;
    }, {});
  return getInfoFromDay(dayName, outputObject);
}

const oldestFromFirstSpecies = (id) => {
  const employee = employeeById(id);
  const [firstSpeciesId] = employee.responsibleFor;
  const { residents } = animalsByIds(firstSpeciesId)[0];
  return residents.reduce(
    (oldest, current) => {
      const oldestAge = oldest[2];
      const { age: currentAge } = current;
      return currentAge > oldestAge ? Object.values(current) : oldest;
    }, ['', '', 0]);
};

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
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
