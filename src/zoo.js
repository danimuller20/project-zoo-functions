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

const { animals, employees, hours, prices } = data;

/*
 * animalsByIds
 Esta função é responsável pela busca das espécies de animais por id. Ela
 retorna um array contendo as espécies referentes aos ids passados como
 parâmetro, podendo receber um ou mais ids.
 */
function animalsByIds(...ids) {
  return ids.map(idValue => animals.find(animalValue => animalValue.id === idValue));
}

/*
 * animalsOlderThan
 Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se
 todos os animais daquela espécie possuem a idade mínima especificada
 */
function animalsOlderThan(animal, age) {
  return animals.find(({ name }) => name === animal).residents.every(element => element.age >= age);
}

/*
 * employeeByName
 Esta função é responsável pela busca das pessoas colaboradoras através do
 primeiro ou do último nome delas
 */
function employeeByName(employeeName) {
  if (employeeName === undefined) return {};

  return employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}

/*
 * createEmployee
 A função, a partir de informações recebidas nos parâmetros, é capaz de criar
 um objeto equivalente ao de uma pessoa colaboradora, retornando-o
 */
function createEmployee(personalInfo, associatedWith) {
  return (Object.assign(personalInfo, associatedWith));
}

/*
 * isManager
 Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de
 gerência.
 */
function isManager(id) {
  return employees.some(employee => employee.managers.some(manager => manager === id));
}

/*
 * addEmployee
 A função irá adicionar uma nova pessoa colaboradora ao array `employees`,
 presente no arquivo `data.js`.
 */
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

/*
 * animalCount
 Esta função é responsável por contabilizar a quantidade de animais.
 */
function animalCount(species) {
  if (species === undefined) {
    const animalsObject = {};

    animals.forEach(({ name, residents }) => {
      animalsObject[name] = residents.length;
    });

    return animalsObject;
  }

  return animals.find(value => value.name === species).residents.length;
}

/*
 * entryCalculator
 A partir da quantidade de visitantes e a faixa etária de cada um, esta função
 é responsável por retornar o preço total a ser cobrado
 */
function entryCalculator(entrants) {
  if (typeof entrants === 'undefined' || entrants === null) return 0;

  const keysEntrants = Object.keys(entrants);
  const valuesEntrants = Object.values(entrants);
  const entriesEntrants = Object.entries(prices);

  return keysEntrants
    .reduce((total, entrant, index) => total + (valuesEntrants[index] * entriesEntrants
      .find(price => entrant === price[0])[1]), 0);
}

/*
 * animalMap
 A função é responsável pelo mapeamento geográfico das espécies e seus animais,
 podendo ainda filtrá-los por ordem alfabética e gênero, por exemplo
 */
function locationsZoo() {
  const arrayLocations = [];

  animals.forEach((animal) => {
    if (arrayLocations.length === 0 || arrayLocations
      .every(location => animal.location !== location)) {
      arrayLocations.push(animal.location);
    }
  });

  return arrayLocations;
}

function animalsSpeciesLocationsZoo(arrayLocations) {
  const locationsAnimals = {};

  arrayLocations.forEach((location) => {
    const animalsList = animals
      .filter(animal => animal.location === location)
      .map(animal => animal.name);

    locationsAnimals[location] = animalsList;
  });

  return locationsAnimals;
}

function animalsNamesLocationsZoo(arrayLocations, includesName = false, sorted = false, sex) {
  const locationsAnimals = {};
  console.log(sex);

  if (includesName) {
    arrayLocations.forEach((location) => {
      const animalsList = animals.filter(animal => animal.location === location).map((animal) => {
        const animalName = animal.name;
        let residentsName = '';

        if (sex) {
          residentsName = animal.residents
            .filter(resident => resident.sex === sex).map(animalSex => animalSex.name);
        } else {
          residentsName = animal.residents.map(resident => resident.name);
        }

        const animalsObject = { [animalName]: residentsName };

        if (sorted) residentsName.sort();

        return animalsObject;
      });

      locationsAnimals[location] = animalsList;
    });
  }

  return locationsAnimals;
}

function animalMap(options) {
  if (!options) {
    options = { includeNames: false, sex: '', sorted: false };
  }

  const { includeNames = false, sex, sorted = false } = options;
  const locations = locationsZoo();

  if (includeNames) {
    return animalsNamesLocationsZoo(locations, includeNames, sorted, sex);
  }

  return animalsSpeciesLocationsZoo(locations);
}

/*
 * schedule
 A função é responsável por disponibilizar as informações de horário para uma
 consulta, que pode querer ter acesso a todo o cronograma da semana ou apenas o
 cronograma de um dia específico
 */
function createSchedule(openClose) {
  const open = openClose.open;
  const close = (openClose.close) - 12;

  if (open === 0 && close === -12) return 'CLOSED';

  return `Open from ${open}am until ${close}pm`;
}

function schedule(dayName) {
  const keys = Object.keys(hours);
  const values = Object.values(hours);
  const result = {};

  if (dayName === undefined) {
    keys.forEach((day, index) => {
      result[day] = createSchedule(values[index]);
    });
  } else {
    result[dayName] = createSchedule(values[keys.indexOf(dayName)]);
  }

  return result;
}

/*
 * oldestFromFirstSpecies
 A função busca por informações do animal mais velho da primeira espécie
 gerenciada pela pessoa colaboradora do parâmetro
 */
function oldestFromFirstSpecies(id) {
  const arrayMaxNumber = employees.find(employee => employee.id === id).responsibleFor
    .map((animalID) => {
      const resident = animals.find(animal => animal.id === animalID).residents;
      const maxAge = Math.max(...resident.map(animal => animal.age));

      return resident.filter(animal => animal.age === maxAge);
    });

  const maxIndex = Math.max(...arrayMaxNumber.map(animal => animal[0].age));

  return Object.values((arrayMaxNumber[0].filter(ageNumber => ageNumber.age === maxIndex))[0]);
}

/*
 * increasePrices
 A função é responsável por aumentar o preço das visitas, com base no valor de
 aumento recebido no parâmetro, em porcentagem
 */
function increasePrices(percentage) {
  Object.keys(prices).forEach((index) => {
    prices[index] = Math.round((prices[index]) * ((percentage / 100) + 1) * 100) / 100;
  });

  return prices;
}

/*
 * employeeCoverage
 A função é responsável por consultar as espécies pela qual a pessoa
 colaborada, recebida no parâmetro através de seu `id`, `firstName` ou
 `lastName`, é responsável
 */
function employeeCoverage(idOrName) {
  const arrayEmployee = [];
  const objEmployee = {};

  if (idOrName === undefined) {
    employees.forEach((value) => {
      arrayEmployee.push(value.id);
    });
  } else {
    arrayEmployee.push(idOrName);
  }

  arrayEmployee.forEach((value) => {
    const arrayNameAnimals = [];

    const { firstName, lastName, responsibleFor } = employees
      .find(e => e.id === value || e.firstName === value || e.lastName === value);

    responsibleFor.forEach((id) => {
      arrayNameAnimals.push(animals.find(animal => animal.id === id).name);
    });

    objEmployee[`${firstName} ${lastName}`] = arrayNameAnimals;

    return objEmployee;
  });

  return objEmployee;
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
