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
  if (managers === undefined) {
    managers = [];
  }
  if (responsibleFor === undefined) {
    responsibleFor = [];
  }
  const employee = {}
  employee['id'] = id;
  employee['firstName'] = firstName;
  employee['lastName'] = lastName;
  employee['managers'] = managers;
  employee['responsibleFor'] = responsibleFor;
  data.employees.push(employee);
  return employee;
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
    if (entrant[0] === 'Adult') {
      total += data.prices.Adult * entrant[1];
    } else if (entrant[0] === 'Child') {
      total += data.prices.Child * entrant[1];
    } else if (entrant[0] === 'Senior') {
      total += data.prices.Senior * entrant[1];
    }
  });
  return total;
}

function animalMap(options) {
  //
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
  employe[name] = employee.responsibleFor.map(animalId => (
    animals.find((animal) => {
      if (animal.id === animalId) {
        return animal.name;
      }
      return undefined;
    }).name
  ));
  return employe;
}

function getAllEmployees(employe) {
  employees.forEach((employee) => {
    const complete = `${employee.firstName} ${employee.lastName}`;
    employe = getAllResponsabilities(employe, employee, complete);
  });
  return employe;
}

function employeeCoverage(idOrName) {
  let employe = {};
  if (idOrName === undefined) {
    getAllEmployees(employe);
  } else {
    const dataOfEmployee = findEmployee(idOrName);
    const name = `${dataOfEmployee.firstName} ${dataOfEmployee.lastName}`;
    employe = getAllResponsabilities(employe, dataOfEmployee, name);
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
