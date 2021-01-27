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

function animalsByIds(...ids) {
  const resposta = [];

  if (ids.length === 0) {
    return ids;
  }
  for (let index = 0; index < ids.length; index += 1) {
    data.animals.forEach((animal) => {
      if (animal.id === ids[index]) {
        resposta.push(animal);
      }
    });
  }
  return resposta;
}

function animalsOlderThan(animal, age) {
  const objAnimal = data.animals.find(bixo => animal === bixo.name);
  return objAnimal.residents.every(objResident => objResident.age >= age);
}

function employeeByName(employeeName) {
  const objEmpty = {};
  if (employeeName === undefined) {
    return objEmpty;
  }
  return data.employees.find(person =>
    (person.firstName === employeeName || person.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  return {
    id,
    firstName,
    lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  const objPerson = data.employees.find(person =>
  (person.managers.find(arrayManagers => arrayManagers === id)));
  if (typeof (objPerson) === 'object') {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const obj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(obj);
}

function animalCount(species) {
  const obj = {};
  if (species === undefined) {
    data.animals.forEach(animal =>
    (obj[animal.name] = animal.residents.length));
    return obj;
  }
  let totalAnimal = 0;
  data.animals.forEach((animal) => {
    if (animal.name === species) {
      totalAnimal = animal.residents.length;
    }
  });
  return totalAnimal;
}


function entryCalculator(entrants = 0) {
  if (entrants === 0) {
    return entrants;
  }
  if (entrants.Adult === undefined) {
    entrants.Adult = 0;
  }
  if (entrants.Child === undefined) {
    entrants.Child = 0;
  }
  if (entrants.Senior === undefined) {
    entrants.Senior = 0;
  }
  const { Adult, Child, Senior } = data.prices;
  const conta = (Adult * entrants.Adult) + (Child * entrants.Child) + (Senior * entrants.Senior);
  return conta;
}

function animalMap(options) {
  // Seu código aqui
}

function schedule(dayName) {
  const objHours = data.hours;
  const daysOfWeek = Object.keys(objHours);
  const objResult = {};

  daysOfWeek.forEach((day) => {
    const { open, close } = objHours[day];

    if (open === 0 && close === 0) {
      objResult[day] = 'CLOSED';
    } else {
      objResult[day] = `Open from ${open}am until ${close % 12}pm`;
    }
  });

  if (!dayName) {
    return objResult;
  }

  return { [dayName]: objResult[dayName] };
}

  // A função recebe um id de um funcionario como paramentro
  // A função buscar o primeiro animal gerenciado pelo funcionario
  // A função deve retornar um array.
  // Esse array deve conter informações como o nome, sexo e idade do animal
  // O animal encontrado deve ser o mais velho de sua especie mais velho dessa especie

function oldestFromFirstSpecies(id) {
  // PSEUDO CÓDIGO
  // 1. Buscar o funciorio do respectivo id -- OK
  // 2. Recuperar o id do primeiro animal gerenciado por ele -- OK
  // 3. Buscar o animal do respectivo id -- OK
  // 4. Recuperar o animal mais velho da especie -- OK
  // 5. Empurrar as informações como nome, sexo e idade do animal -- OK
  // 6. Retornar esse array -- OK

  // CÓDIGO .JS
  const employer = data.employees.find(especificEmployer =>
    (especificEmployer.id === id));
  const idFirstAnimalResposible = employer.responsibleFor[0];
  const objFirstAnimal = data.animals.find(animal =>
    (animal.id === idFirstAnimalResposible));
  const animalOldest = objFirstAnimal.residents.reduce((previusValue, currentValue) => {
    if (previusValue.age > currentValue.age) {
      return previusValue;
    }
    return currentValue;
  }, 0);
  return Object.values(animalOldest);
}
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
