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
// Alteração para primeiro commit

const { animals, employees } = require('./data');
const data = require('./data');
// const { employees, animals } = data;

function animalsByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  const foundAnimals = ids.map((id) => {
    const foundAnimal = data.animals.find(animal => id === animal.id);
    return foundAnimal;
  });
  return foundAnimals;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  // Recebe nome de uma espécie em string e uma idade em number
  // Testa se todos animais desta espécie possuem a idade mínima especificada
  // Retorna um valor booleano

  const speciesOlder = data.animals.find(species => species.name === animal);

  return speciesOlder.residents.every(animalAge => animalAge.age > age);
}
// console.log(animalsOlderThan('otters', 7));

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
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

// Funções auxiliares da animalMap
// **************************************
// **************************************
function retrieveAvailableLocations() {
  // MOCK
  return ['NE', 'NW', 'SE', 'SW'];
}
// 57:26
function retrieveAnimalsPerLocation(locations) {
  const animalsPerLocation = {};
  locations.forEach((location) => {
    const filteredAnimals = data.animals
      .filter(animal => animal.location === location)
      .map(animal => animal.name);

    animalsPerLocation[location] = filteredAnimals;
  });
  return animalsPerLocation;
}

function retrieveAnimalsPerLocationWithName(locations, sorted, sex) {
  const animalsPerLocation = {};
  locations.forEach((location) => {
    const filteredAnimals = data.animals
      .filter(animal => animal.location === location)
      .map((animal) => {
        const nameKey = animal.name;
        const nameValue = animal.residents
          .map(resident => resident.name);
          // .filter((resident) => { resident.sex });

        // if (sorted) {
        //   nameValue.sort();
        // }

        return { [nameKey]: nameValue };
      });

    animalsPerLocation[location] = filteredAnimals;
  });
  return animalsPerLocation;
}
// **************************************
// **************************************
function animalMap(options) {
  // seu código aqui
  // A função recebe um objeto como parâmetro
  // A função retorna um objeto
  // Esse objeto possui a seguinte entrada
  // Chave: string, essa string é a localização
  // Valor sem parâmetros: array de string com as especies
  // Valor com o parametro includeNames: um array de objetos com as especies e o nome delas
  // Valor com o parametro sorted: um array de objetos com as especies e o nome delas ORDENADA
  // Valor com a parametro sex: um array de objetos com as especies e nome delas FILTRADA POR SEXO
  // Valor com o parametro sorted e sex: um array de objetos com as especies e o nome delas
  // ORDENADA e FILTRADA POR SEXO
  // Valor sem includeNames: array de string com as especies

  // PSEUDO CODIGO
  // 1. Recuperar as regiões que eu quero categorizar CHECK
  // 2. Uma vez que eu tenho as regiões, eu filtro os animais dessa região CHECK
  // 3. Se não tiver parametros de opções, retorna um array com as especies CHECK
  // 4. Se a opção includeNames estiver habilitada, retorna um array de
  // objetos com as especies e o nome delas
  // 5. Se a opção sorted estiver habilitada, retorna um array de
  // objetos com as especies e o nome delas ORDENADA
  // 6. Se a opção sex estiver habilitada, retorna um array de
  // objetos com as especies e nome delas FILTRADA POR SEXO
  // 7. Se a opção sex e sorted estiver habilitada retorna um array de
  // objetos com as especies e o nome delas ORDENADA e FILTRADA POR SEXO
  // 8. Se não tiver a opção includeNames: retorna array de string com as especies

  // CODIGO
  const locations = retrieveAvailableLocations();

  const { includeNames = false, sex, sorted = false } = options;

  if (includeNames) {
    return retrieveAnimalsPerLocationWithName(locations);
  }

  return retrieveAnimalsPerLocation(locations);
}

// Funções auxiliares da schedule
// **************************************
// **************************************
function change24HourFormatTo12Format(hour) {
  // Se o resultado da hora - 12 for negativo
  // retorna a propria hora
  // Senão: retorna o resultado da subtração

  const formattedHour = hour - 12;
  // if (formattedHour < 0) {
  //   return hour;
  // } else {
  //   return formattedHour;
  // }

  return formattedHour < 0 ? hour : formattedHour;
}
// **************************************
// **************************************
function schedule(dayName) {
  // seu código aqui
  // Ao chamar a função sem parametros -> retorna um
  // objeto com o cronograma inteiro
  // Ao chamar a função com 1 parametros (o dia da semana) -> retorna um
  // objeto com o cronograma apenas do dia
  // A função schedule retorna um objeto
  // Formato do objeto de retorno
  // chave === dia da semana
  // valor === cronograma legível para humanos
  // cronograma legível para humanos === 'Open fron X until Y'
  // cronograma legível para humanos quando o zoo não abre === 'CLOSE'

  // PSEUDO CODIGO
  // 1. pegar o objeto onde estão as informações de funcionamento do zoo CHECK
  // 2. passar por cada entrada do objeto para pegar as informações do dia
  // 3. pegar as informações do zoo
  // 4. montar o cronograma
  // 5. retorna o cronograma

  // CODIGO
  const hours = data.hours;
  const allDays = Object.keys(hours);
  const schedule = {};

  allDays.forEach((day) => {
    // chave === day
    // valor === hours[day]
    const { open, close } = hours[day]

    if (day === 'Monday') {
      schedule[day] = 'CLOSED';
    } else {
      schedule[day] = `Open from ${open}am until ${change24HourFormatTo12Format(close)}pm`;
    }
  });

  if (dayName === undefined) {
    return schedule;
  }

  return { [dayName]: schedule[dayName] };
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

// Funções auxiliares da employeeCoverage
// **************************************
// **************************************
function getAnimalListFromEmployee(employee) {
  return employee.responsibleFor.map((animalId) => animals.find((animal) => animalId === animal.id).name);
// //   // ['id1', 'id2'] => ['lion', 'tiger']
}

function getEmployeeFullName(employee) {
  return `${employee.firstName} ${employee.lastName}`;
}

function getAllEmployeesAndAnimals() {
  return employees.reduce((accumulator, employee) => {
    const animalList = getAnimalListFromEmployee(employee);
    accumulator[getEmployeeFullName(employee)] = animalList;
    return accumulator;
  }, {});
}

function getEmployeeByNameOrId(idOrName) {
  return employees.find((employee) => employee.id === idOrName || employee.firstName === idOrName || employee.lastName === idOrName);
}
// **************************************
// **************************************
function employeeCoverage(idOrName) {
  // seu código aqui


  if (!idOrName) {
    return getAllEmployeesAndAnimals();
  }
  const targetEmployee = getEmployeeByNameOrId(idOrName);
  const animalList = getAnimalListFromEmployee(targetEmployee);
  const key = getEmployeeFullName(targetEmployee);
  return { [key]: animalList };


  // if (!idOrName) {
  //   return employees.reduce((accumulator, employee) => {
  //     const animalList = employee.responsibleFor.map((animalId) => {
  //       return animals.find((animal) => animalId === animal.id).name;
  //     });
  //     const key = `${employee.firstName} ${employee.lastName}`;
  //     accumulator[key] = animalList;
  //     return accumulator;
  //   }, {});
  // }

  // const targetEmployee = employees.find((employee) => employee.id === idOrName || employee.firstName === idOrName || employee.lastName === idOrName);
  // const animalList = targetEmployee.responsibleFor.map((animalId) => animals.find((animal) => animalId === animal.id).name);
  // const key = `${targetEmployee.firstName} ${targetEmployee.lastName}`;
  // return { [key]: animalList };
}
// console.log(employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

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
