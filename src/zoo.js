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
  let zooArray = [];
  if (ids) {
    zooArray = ids
    .map(codigo => animals.find(animal => animal.id === codigo));
  } else {
    return [];
  }
  return zooArray;
}

function animalsOlderThan(animal, age) {
  let returnSearch = false;
  animals.find((especie) => {
    if (especie.name === animal) {
      returnSearch = especie.residents.some(resident => resident.age < age);
    }
    return returnSearch;
  });
  return !returnSearch;
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const objFuncionari = data.employees.find(functionari =>
    (functionari.firstName === employeeName || functionari.lastName === employeeName));
  return objFuncionari;
}

function createEmployee(personalInfo, associatedWith) {
  const newObj = { ...personalInfo, ...associatedWith };
  return newObj;
}

function isManager(id) {
  let boo = false;
  // aqui se o id for igual ao manager de employ return o objeto
  const objEmploy = employees.find(employ => employ.managers.includes(id));
  if (!objEmploy) {
    boo = false;
  } else {
    boo = true;
  }
  return boo;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newObj = {};
  newObj.id = id;
  newObj.firstName = firstName;
  newObj.lastName = lastName;
  newObj.managers = managers;
  if (!newObj.managers) {
    newObj.managers = [];
  }
  newObj.responsibleFor = responsibleFor;
  if (!newObj.responsibleFor) {
    newObj.responsibleFor = [];
  }
  employees.push(newObj);
  return employees;
}

function animalCount(species) {
  const animalObj = {};
  // let countSpecies = 0;
  animals.forEach((animal) => {
    animalObj[animal.name] = animal.residents.length;
  });

  if (species) {
    return animalObj[species];
  }
  // if (!species) {
  //   animals.forEach((animal) => {
  //     animalObj[animal.name] = animal.residents.length;
  //   });
  //   return animalObj;
  // }
  // animals.find((animal) => (animal.name === species ?
  //   countSpecies = animal.residents.length :
  //   undefined)
  // {
  // );
  return animalObj;
}

function calculatorPrices(param1, param2, sumControl, price) {
  param1.forEach((valueEntrants) => {
    param2.forEach((valuePrice) => {
      if (valuePrice[0] === valueEntrants[0]) {
        sumControl = valuePrice[1] * valueEntrants[1];
        price += sumControl;
      }
    });
  });
  return price;
}

function entryCalculator(entrants) {
  let valuesEntrants = '';
  let valuesPrices = '';
  const priceControl = 0;
  let priceEntrants = 0;
  if (!entrants) {
    return priceEntrants;
  }
  if (Object.entries(entrants).length === 0) {
    return priceEntrants;
  }
  valuesEntrants = Object.entries(entrants);
  valuesPrices = Object.entries(data.prices);
  priceEntrants = calculatorPrices(valuesEntrants, valuesPrices, priceControl, priceEntrants);

  return priceEntrants;
}

function locationAnimals() {
  return ['NE', 'NW', 'SE', 'SW'];
}

function animaisPorSexo(animais, sexo) {
  const animalPorSex = animais.filter(value => value.sex === sexo)
  .map(animal => animal.name);
  return animalPorSex;
}

function animalPorLocalidadeComNome(locais, sortear, sexo) {
  const obj = { };
  locais.forEach((local) => {
    const animaisFiltrados = animals
      .filter(animal => animal.location === local)
      .map((animal) => {
        const nomeAnimais = animal.name;
        let tiposDeAnimais = animal.residents;

        if (sexo !== undefined) {
          tiposDeAnimais = animaisPorSexo(tiposDeAnimais, sexo);
        } else {
          tiposDeAnimais = tiposDeAnimais.map(resident => resident.name);
        }

        if (sortear) {
          tiposDeAnimais.sort();
        }

        return { [nomeAnimais]: tiposDeAnimais };
      });

    obj[local] = animaisFiltrados;
  });

  return obj;
}

function animalPorLocalidades(locais) {
  const obj = { };
  locais.forEach((local) => {
    const animaisFiltrados = animals
      .filter(animal => animal.location === local)
      .map(animal => animal.name);
    obj[local] = animaisFiltrados;
  });

  return obj;
}

function animalMap(options) {
  const locations = locationAnimals();

  if (!options) {
    return animalPorLocalidades(locations);
  }
  const { includeNames = false, sorted, sex } = options;

  if (includeNames) {
    return animalPorLocalidadeComNome(locations, sorted, sex);
  }
  return animalPorLocalidades(locations, sorted, sex);
}

function schedule(dayName) {
  const newObj = {};
  const hours = data.hours;
  const everyDays = Object.keys(hours);

  everyDays.forEach((day) => {
    const { open, close } = hours[day];

    if (day === 'Monday') {
      newObj[day] = 'CLOSED';
    } else {
      newObj[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });

  if (!dayName) {
    return newObj;
  }

  return { [dayName]: newObj[dayName] };
}

function oldestFromFirstSpecies(id) {
  const trabalhor = employees.find(employ => employ.id === id).responsibleFor[0];
  const animalDoTrabalhor = animals.find(animal => animal.id === trabalhor);
  const animaisMaisVelhoComDados = animalDoTrabalhor.residents
    .reduce((previusAnimal, currentAnimal) => (previusAnimal.age > currentAnimal.age ?
      previusAnimal : currentAnimal));

  return Object.values(animaisMaisVelhoComDados);
}

function increasePrices(percentage) {
  const percent = percentage / 100;
  // const { Adult, Senior, Child } = data.prices;
  // const NewPriceAdult = Adult + (Adult * percent);
  // const NewPriceSenior = Senior + (Senior * percent);
  // const NewPriceChild = Child + (Child * percent);
  // data.prices.Adult = Math.round(NewPriceAdult * 100) / 100;
  // data.prices.Senior = Math.round(NewPriceSenior * 100) / 100;
  // data.prices.Child = Math.round(NewPriceChild * 100) / 100;

  Object.keys(prices).forEach((key) => {
    const somaComPorcentage = prices[key] + (prices[key] * percent);
    prices[key] = Math.round(somaComPorcentage * 100) / 100;
  });
  return prices;
}

function trabalhadores() {
  const trabalhadoresComAnimais = {};
  const listaTrabalhodores = employees
  .map(employe => `${employe.firstName} ${employe.lastName}`);

  employees.map(employe => employe.responsibleFor)
    .forEach((idList, index) => {
      const mapeando = idList.map((idFuncionarioAnimal) => {
        const primeiroAnimal = animals.find(animal => animal.id === idFuncionarioAnimal);
        return primeiroAnimal.name;
      });
      trabalhadoresComAnimais[listaTrabalhodores[index]] = mapeando;
    });
  return trabalhadoresComAnimais;
}

function employeeCoverage(idOrName) {
  const obj = { };
  if (!idOrName) {
    return trabalhadores();
  }
  const funcionario = employees.find((employe) => {
    if (employe.id === idOrName ||
      employe.firstName === idOrName ||
      employe.lastName === idOrName) {
      return employe;
    }
    return undefined;
  });

  const idsDosAnimais = funcionario.responsibleFor;

  const value = idsDosAnimais.map(function (idDoAnimal) {
    const primeiroAnimalId = animals.find(animal1 => animal1.id === idDoAnimal);
    return primeiroAnimalId.name;
  });
  const fullName = `${funcionario.firstName} ${funcionario.lastName}`;
  obj[fullName] = value;

  return obj;
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
