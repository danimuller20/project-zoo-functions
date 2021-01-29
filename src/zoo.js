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

//Iniciando:

//1 IMPLEMENTE A FUNÇÃO animalsByIds
//Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

function animalsByIds(ids) {
  // seu código aqui


//Se não tiver parametro, Retorna Array vazio.   [ok]

  const emptyArray = [];
  if (typeof (ids) === 'undefined') {
    return emptyArray;
  }

//Se receber um único ID, Retorna Array da Espécie

  const specieInfos = animals.find((idValue) => { 
    return ids === idValue.id;

  })

  console.log(specieInfos);

}   //fim da função animalByIds


//*********************************************************
//2 IMPLEMENTE A FUNÇÃO animalsOlderThan [OOOKKK]
//Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada
//-----------------------------------------------------------

function animalsOlderThan(animal, age) {
  const animalBySpecie = animals.find(({ name }) => {
    return name === animal;
 })

 return animalBySpecie.residents.every((preciousValue) => {
   preciousValue.age <= age;
 })
}



//*********************************************************
//3 IMPLEMENTE A FUNÇÃO employeeByName [OOOKKK]
//Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas
//----------------------------------

function employeeByName(employeeName) {
   // seu código aqui

   //Encontrar (? find) pelo nome ou sobrenome
   //Me retornar um elemento, Se o valor passado com parâmetro for igual ao firstName e lastName desse elemento
   //Se n receber parametros retornar objeto vazio.

   const targetEmployee = employees.find((objValue) => {
     if ( employeeName === objValue.employess.firstName || employeeName === objValue.employess.lastName ) {
      return objValue;
     }
     return undefined;
   })

    if ( employeeName === 'undefined') {
      return {};
    }

}  //fim da função 3



//*********************************************************
//4. IMPLEMENTE A FUNÇÃO createEmployee  [OOOOKKK]
//A função, a partir de informações recebidas nos parâmetros, é capaz de criar um objeto equivalente ao de uma pessoa colaboradora, retornando-o
//Como o exercicio deve receber parametros que são iguais elementos (objetos) do meu data.employees 
//Eu passo eles (os Arrays) como parametro e retorno eles mesmos no .spread



function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo ,
    ...associatedWith ,
  };
}
  // seu código aqui


//*********************************************************
//5. IMPLEMENTE A FUNÇÃO isManager
//Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.

function isManager(id) {
  // seu código aqui
}

//*********************************************************
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

//*********************************************************
//7. IMPLEMENTE A FUNÇÃO animalCount: [OOOKKK]
//Esta função é responsável por contabilizar a quantidade de animais.

function animalCount(species) {
  const allAnimals = animals.reduce((previousAnimal, currentAnimal) => {
    previousAnimal[currentAnimal.name] = currentAnimal.residents.length;
    return previousAnimal
  } , {});
  
    return species ? allAnimals[species] : allAnimals;
  }


//*********************************************************
function entryCalculator(entrants) {
  // seu código aqui
}
//*********************************************************
function animalMap(options) {
  // seu código aqui
}
//*********************************************************
function schedule(dayName) {
  // seu código aqui
}
//*********************************************************
function oldestFromFirstSpecies(id) {
  // seu código aqui
}
//*********************************************************
function increasePrices(percentage) {
  // seu código aqui
}
//*********************************************************
function employeeCoverage(idOrName) {
  // seu código aqui
}

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
