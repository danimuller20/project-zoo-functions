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

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  const newArray = [];
  if (ids.length === 0) {
    return [];
  } else if (ids.length === 1) {
    newArray.push(animals.find(animal => animal.id === ids[0]));
    return newArray;
  }
  ids.forEach(id => animals.forEach((animal) => {
    if (animal.id === id) {
      newArray.push(animal);
    }
  }));
  return newArray;
}

function animalsOlderThan(animal, age) {
  let result = false;
  result = data.animals.find(animmal => animmal.name === animal)
  .residents.every(resident => resident.age >= age);
  return result;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const fullName = employeeName.split(' ');
  const person = employees.find((employee) => {
    if (employee.firstName === fullName[0] || employee.lastName === fullName[fullName.length - 1]) {
      return employee;
    }
    return undefined;
  });
  return person;
}

function createEmployee(personalInfo, associatedWith) {
  const newObj = {};
  newObj.id = personalInfo.id;
  newObj.firstName = personalInfo.firstName;
  newObj.lastName = personalInfo.lastName;
  newObj.managers = associatedWith.managers;
  newObj.responsibleFor = associatedWith.responsibleFor;
  return newObj;
}

function isManager(id) {
  let result = false;
  employees.find((employee) => {
    const verify = (manager) => {
      if (manager === id) {
        result = true;
        return true;
      }
      return undefined;
    };
    employee.managers.forEach(verify);
    return undefined;
  });
  return result;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // let employee = {
  //   id: id,
  //   firstName: firstName,
  //   lastName: lastName,
  //   managers: managers,
  //   responsibleFor: responsibleFor,
  // };
  // employees.push(employee);
}

function animalCount(species) {
  if (species === undefined) {
    const animalsObj = {};
    animals.forEach((animal) => {
      animalsObj[animal.name] = animal.residents.length;
      return undefined;
    });
    return animalsObj;
  }
  const specie = animals.find(animal => animal.name === species);
  return specie.residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  let total = 0;
  const entrantsArray = Object.entries(entrants);
  entrantsArray.forEach((entrant) => {
    switch (entrant[0]) {
      case 'Adult':
        total += data.prices.Adult * entrant[1];
        break;
      case 'Child':
        total += data.prices.Child * entrant[1];
        break;
      case 'Senior':
        total += data.prices.Senior * entrant[1];
        break;
      default:
        break;
    }
  });
  return total;
}

function createList(newObj, animal) {
  if (newObj[animal.location] === undefined) {
    newObj[animal.location] = [];
  }
  return newObj;
}

function mapAnimal(newObject, animal, ordered) {
  const index = Object.values(newObject[animal.location]).length - 1;
  let obj = newObject[animal.location][index][animal.name];
  obj = animal.residents.map(resident => resident.name);
  newObject[animal.location][index][animal.name] = obj;
  if (ordered) {
    newObject[animal.location][index][animal.name].sort();
  }
  return newObject;
}

function stepOne() {
  let newObject = {};
  animals.forEach((animal) => {
    newObject = createList(newObject, animal);
    newObject[animal.location].push(animal.name);
  });
  return newObject;
}

function mapAnimalBySex(newObject, animal, sex) {
  const index = Object.values(newObject[animal.location]).length - 1;
  newObject[animal.location][index][animal.name] = animal.residents.map((resident) => {
    if (resident.sex === sex) {
      return resident.name;
    }
    return undefined;
  });
  let count = 0;
  Object.values(newObject[animal.location][index][animal.name]).forEach((name, indexOf) => {
    if (name === undefined) {
      indexOf -= count;
      const arr = newObject[animal.location][index][animal.name];
      arr.splice(indexOf, 1);
      newObject[animal.location][index][animal.name] = arr;
      count += 1;
    }
  });
  return newObject;
}

function reapeater(sorted, sex) {
  let newObject = {};
  animals.forEach((animal) => {
    newObject = createList(newObject, animal);
    newObject[animal.location].push({});
    newObject = mapAnimal(newObject, animal, sorted);
    if (sex !== undefined) {
      newObject = mapAnimalBySex(newObject, animal, sex);
    }
  });
  return newObject;
}

function stepFive(sex) {
  let newObject = {};
  animals.forEach((animal) => {
    newObject = createList(newObject, animal);
    newObject[animal.location].push({});
    const index = Object.values(newObject[animal.location]).length - 1;
    newObject = mapAnimalBySex(newObject, animal, sex);
    const ordered = Object.values(newObject[animal.location][index][animal.name]).sort();
    newObject[animal.location][index][animal.name] = ordered;
  });
  return newObject;
}

function animalMapCont(options, result) {
  if (options.includeNames && options.sorted && options.sex !== undefined) {
    result = stepFive(options.sex);
  } else if (!options.includeNames && (options.sex !== undefined || options.sorted)) {
    result = stepOne();
  }
  return result;
}

function animalMapContinue(options, result) {
  if (options.includeNames && !options.sorted && options.sex !== undefined) {
    result = reapeater(false, options.sex);
  } else {
    result = animalMapCont(options, result);
  }
  return result;
}

function animalMap(options) {
  let result = null;
  if (options === undefined) {
    result = stepOne();
  } else if (options.includeNames && !options.sorted && options.sex === undefined) {
    result = reapeater(false);
  } else if (options.includeNames && options.sorted && options.sex === undefined) {
    result = reapeater(true);
  } else {
    result = animalMapContinue(options, result);
  }
  return result;
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  const employee = employees.find(employe => employe.id === id);
  const animalList = animals.find(animal => animal.id === employee.responsibleFor[0]);
  let oldestAnimal = {};
  animalList.residents.forEach((resident, index) => {
    if (index === 0) {
      oldestAnimal = resident;
    } else if (resident.age > oldestAnimal.age) {
      oldestAnimal = resident;
    }
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

function increasePrices(percentage) {
  const percent = 1 + (percentage / 100);
  data.prices.Adult = Math.round((data.prices.Adult *= percent) * 100) / 100;
  data.prices.Child = Math.round((data.prices.Child *= percent) * 100) / 100;
  data.prices.Senior = Math.round((data.prices.Senior *= percent) * 100) / 100;
}

function findEmployee(idOrName) {
  let result = null;
  result = employees.find(employee => employee.id === idOrName);
  if (result === undefined) {
    result = employees.find(employee => employee.firstName === idOrName);
  }
  if (result === undefined) {
    result = employees.find(employee => employee.lastName === idOrName);
  }
  return result;
}

function getAllResponsabilities(employe, employee, name) {
  employe[name] = employee.responsibleFor.map((animalId)=>{
    return animals.find((animal) => {
      if (animal.id === animalId) {
        return animal.name;
      }
    }).name;
  });
  return employe;
}

function getAllEmployees(employe) {
  employees.forEach((employee) => {
    const complete = `${employee.firstName} ${employee.lastName}`;
    employe = getAllResponsabilities(employe, employee, complete);
  });
  return employe
}

employeeCoverage('Stephanie');
function employeeCoverage(idOrName) {
  let employe = {}
  if (idOrName === undefined) {
    getAllEmployees(employe);
  }else {
    let data = findEmployee(idOrName);
    let name = `${data.firstName} ${data.lastName}`;
    employe = getAllResponsabilities(employe, data, name);
  }
  return employe;
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
