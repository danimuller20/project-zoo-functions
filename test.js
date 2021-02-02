const { animals } = require("./src/data");

function returnLocations() {
  const arr = [];
  animals.forEach(element => arr.push(element.location));
  const result = arr.filter((info, index) => arr.indexOf(info) === index)
  return result;
}

function animalsPerLocations(locations) {
  const animalsForLocation = {};
  locations.forEach((location) => {
    const filterAnimals = animals
      .filter((animal) => animal.location === location)
      .map((animal) => animal.name);
      animalsForLocation[location] = filterAnimals;
  });
  return animalsForLocation;
}

const animalsPerLocationWithName = (locations) => {
  const animalsForLocation = {};
  locations.forEach((location) => {
    const filterAnimals = animals
      .filter((animal) => animal.location === location)
      .map((animal) => {
        const keyName = animal.name;
        const valueName = animal.residents.map(resident => resident.name);
        return { [keyName]: valueName };
      });
      animalsForLocation[location] = filterAnimals;
  });
  return animalsForLocation;
}
console.log(animalsPerLocationWithName(returnLocations()));

function animalMap(options) {
  const locations = returnLocations();

  const { includesName = false, sex, sorted = false } = options;
  if(includesName) {
    return animalsPerLocationWithName(locations);
  }
  return animalsPerLocations(locations);
}
console.log(animalMap({includesName: true}));
