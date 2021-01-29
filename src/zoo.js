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
//const { animals } = data;        //Desestruturando o data para pegar o Objeto 'animals' diretamente sem precisar usar: data.animals   para acessa-lo.  

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
//-------- pq com chaves nao function nao rola??? sem simplificar ArrowFct
//npm test test/animalsOlderThan.test.js

function animalsOlderThan(animal, age) {

  const animalBySpecie = data.animals.find(({ name }) => name === animal);
 

 return animalBySpecie.residents.every((value) => value.age >= age);
}

//console.log(animalsOlderThan('otters', 7));     --> okkkk

//*********************************************************
//*********************************************************
//3 IMPLEMENTE A FUNÇÃO employeeByName [OOOKKK]
//Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas
//*********************************************************
//*********************************************************

function employeeByName(employeeName) {
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
//*********************************************************
//4. IMPLEMENTE A FUNÇÃO createEmployee  [OOOOKKK]
//A função, a partir de informações recebidas nos parâmetros, é capaz de criar um objeto equivalente ao de uma pessoa colaboradora, retornando-o
//*********************************************************
//*********************************************************
//Como o exercicio deve receber parametros que são iguais elementos (objetos) do meu data.employees 
//Eu passo eles (os Arrays) como parametro e retorno eles mesmos no .spread

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo ,
    ...associatedWith ,
  };
}


//*********************************************************
//*********************************************************
//5. IMPLEMENTE A FUNÇÃO isManager  [falta terminarr olhar plantao]
//Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.
//*********************************************************
//*********************************************************
// Ver se inputID é = ID do gerente. 

function isManager(id) {
  
  const validation = data.employees.some(objValue => objValue.managers.find(value => value === id));

  return validation;

};
  
//console.log(data.employees);
console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

//*********************************************************
//*********************************************************
//6. IMPLEMENTE A FUNÇÃO addEmployee
//A função irá adicionar uma nova pessoa colaboradora ao array `employees`, presente no arquivo `data.js`.
//*********************************************************
//*********************************************************
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

//*********************************************************
//*********************************************************
//7. IMPLEMENTE A FUNÇÃO animalCount: [OOOKKK]
//Esta função é responsável por contabilizar a quantidade de animais.
//*********************************************************
//*********************************************************
function animalCount(species) {
  const allAnimals = animals.reduce((previousAnimal, currentAnimal) => {
    previousAnimal[currentAnimal.name] = currentAnimal.residents.length;
    return previousAnimal
  } , {});
  
    return species ? allAnimals[species] : allAnimals;
  }

//*********************************************************
//*********************************************************
//8. IMPLEMENTE A FUNÇÃO entryCalculator
//A partir da quantidade de visitantes e a faixa etária de cada um, esta função é responsável por retornar o preço total a ser cobrado
//*********************************************************
//*********************************************************
function entryCalculator(entrants) {
  // seu código aqui
}

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
