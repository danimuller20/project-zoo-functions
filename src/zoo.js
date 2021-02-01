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

const data = require('./data');  //recuperando o arquivo data para usar aqui nesse arquivo!
//const { animals } = data;        //Posso desestruturar o data para pegar o Objeto 'animals' diretamente sem precisar usar: data.animals   para acessa-lo.  

function animalsByIds(...ids) {
  if (!ids) return [];
  return data.animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const animalBySpecie = data.animals.find(({ name }) => name === animal);
  return animalBySpecie.residents.every((value) => value.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find( value => value.firstName === employeeName || value.lastName === employeeName);
};
  

//
/* data.employees.find(({ firstName, lastName }) => firstName === employeeName
      || lastName === employeeName); */
      
function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo ,
    ...associatedWith ,
  };
};
function isManager(id) {
  const validation = data.employees.some(objValue => objValue.managers.find(value => value === id));
  return validation;
};
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployye = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  const admittedEmployee = data.employees.push(newEmployye);
  return admittedEmployee;
};
function animalCount(species) {
  const allAnimals = data.animals.reduce((previousAnimal, currentAnimal) => {
    previousAnimal[currentAnimal.name] = currentAnimal.residents.length;
    return previousAnimal
  } , {});
    return species ? allAnimals[species] : allAnimals;
  };
function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce((ac, cur) => ac + (entrants[cur] * data.prices[cur]), 0);
};

//*********************************************************
//*********************************************************
//9. IMPLEMENTE A FUNÇÃO animalMap
//A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e gênero, por exemplo
//*********************************************************
//*********************************************************
function animalMap(options) {
  // seu código aqui
}

//*********************************************************
//*********************************************************
//10. IMPLEMENTE A FUNÇÃO schedule
//A função é responsável por disponibilizar as informações de horário para uma consulta, que pode querer ter acesso a todo o cronograma da semana ou apenas o cronograma de um dia específico
//*********************************************************
//*********************************************************
function schedule(dayName) {
  // seu código aqui
}

//*********************************************************
//*********************************************************
//11. IMPLEMENTE A FUNÇÃO oldestFromFirstSpecies
//A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro
//*********************************************************
//*********************************************************
function oldestFromFirstSpecies(id) {
  // seu código aqui
}

//*********************************************************
//*********************************************************
//12. IMPLEMENTE A FUNÇÃO increasePrices
//A função é responsável por aumentar o preço das visitas, com base no valor de aumento recebido no parâmetro, em porcentagem
//*********************************************************
//*********************************************************
function increasePrices(percentage) {

  
  // seu código aqui
}

//*********************************************************
//*********************************************************
//13. IMPLEMENTE A FUNÇÃO employeeCoverage
//A função é responsável por consultar as espécies pela qual a pessoa colaborada, recebida no parâmetro através de seu `id`, `firstName` ou `lastName`, é responsável
//*********************************************************
//*********************************************************
function employeeCoverage(idOrName) {
  // seu código aqui
}

//*********************************************************
//*********************************************************
//*********************************************************

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
