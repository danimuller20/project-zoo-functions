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

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter(value => ids.some(id => id === value.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.some(species => species.name === animal &&
    species.residents.every(residents => residents.age > age));
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find(person => person.firstName === employeeName ||
    person.lastName === employeeName);
}


function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;

  const { managers, responsibleFor } = associatedWith;

  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
  return employees.some(person => person.managers.some(value => value === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const person = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return data.employees.push(person);
}

function animalCount(species) {
  // seu código aqui
  const population = {};

  if (!species) {
    animals.forEach(({ name, residents }) => {
      population[name] = residents.length;
    });
    return population;
  }

  return animals.find(value => value.name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) return 0;

  let result = 0;
  Object.keys(prices).forEach((pay) => {
    if (entrants[pay]) {
      result += entrants[pay] * prices[pay];
    }
  });
  return result;
}


// Sem parâmetros, retorna animais categorizados por localização
function animalsByLocation() {
  return animals.reduce(
    (list, { location }) => {
      list[location] = animals.filter(animal => location === animal.location)
        .map(species => species.name);
      return list;
    }, {});
}
// Com a opção includeNames: true especificada, retorna nomes de animais


// Com a opção sorted: true especificada, retorna nomes de animais ordenados
function orderedAnimals() {

  return animals.reduce(
    (list, { location }) => {
      list[location] = animals.filter(animal => location === animal.location)
        .reduce((array, { name, residents }) => {
          array.push({ [name]: residents.map(value => value.name).sort() });
          return array
        }, []);
      return list;
    }, {});
}

// Com a opção sex: 'female' ou sex: 'male' especificada, retorna somente nomes de 
//animais macho/fêmea

// Com a opção sex: 'female' ou sex: 'male' especificada e a opção sort: 
// true especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais 
// ordenados
function searchForAnimalBySex(sex, sorted) {

  if (sorted) {
    return animals.reduce(
      (list, { location }) => {
        list[location] = animals.filter(animal => location === animal.location)
          .reduce((array, { name, residents }) => {
            array.push({
              [name]: residents.filter(valor => valor.sex === sex)
                .map(value => value.name).sort()
            });
            return array
          }, []);
        return list;
      }, {});
  }

  if (!sorted) {
    return animals.reduce(
      (list, { location }) => {
        list[location] = animals.filter(animal => location === animal.location)
          .reduce((array, { name, residents }) => {
            array.push({
              [name]: residents.filter(valor => valor.sex === sex)
                .map(value => value.name)
            });
            return array
          }, []);
        return list;
      }, {});
  }
}

function animalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) {
    return animalsByLocation();
  }

  if (options.includeNames && options.sex) {
    return searchForAnimalBySex(options.sex, options.sorted);
  }

  if (options.sorted && options.includeNames && !options.sex) {
    return orderedAnimals();
  }

  return animals.reduce(
    (list, { location }) => {
      list[location] = animals.filter(animal => location === animal.location)
        .reduce((array, { name, residents }) => {
          array.push({ [name]: residents.map(value => value.name) });
          return array
        }, []);
      return list;
    }, {});
}

const showDay = (day) => {
  const { open, close } = hours[day];
  if (open === 0) {
    return 'CLOSED';
  }
  return `Open from ${open}am until ${close - 12}pm`;
};

function schedule(dayName) {
  // seu código aqui
  if (!dayName) {
    return Object.keys(hours).reduce((operation, day) => {
      operation[day] = showDay(day);
      return operation;
    }, {});
  }
  return { [dayName]: showDay(dayName) };
}

function find(resident) {
  return resident.reduce((older, newest) => {
    let animal = '';
    if (older.age > newest.age) {
      animal = older;
    } else {
      animal = newest;
    }
    return animal;
  });
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const collaborator = employees.find(colaborador => id === colaborador.id);
  const species = animals.find(animal => animal.id === collaborator.responsibleFor[0]);
  const animalOlder = find(species.residents);

  return Object.values(animalOlder);
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Senior, Child } = data.prices;

  const increase = {
    Adult: Math.round((Adult * (1 + (percentage / 100))) * 100) / 100,
    Senior: Math.round((Senior * (1 + (percentage / 100))) * 100) / 100,
    Child: Math.round((Child * (1 + (percentage / 100))) * 100) / 100,
  };

  data.prices = increase;

  return increase;
}

const listOfLiabilityByEmployee = employees.reduce(
  (list, { firstName, lastName, responsibleFor }) => {
    list[`${firstName} ${lastName}`] = responsibleFor.map(
      idAnimal => animals.find(animal => idAnimal === animal.id).name,
    );
    return list;
  }, {});

function employeeCoverage(idEmployee) {
  // seu código aqui

  if (!idEmployee) {
    return listOfLiabilityByEmployee;
  }

  const { firstName, lastName, responsibleFor } = employees.find(
    ({ id, firstName: first, lastName: last }) =>
      first === idEmployee || last === idEmployee || id === idEmployee,
  );

  return {
    [`${firstName} ${lastName}`]: responsibleFor.map(
      idAnimal => animals.find(value => idAnimal === value.id).name,
    ),
  };
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
