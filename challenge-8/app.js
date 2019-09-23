import Park from './park.mjs';
import Street from './street.mjs';

const centralpark = new Park('Central Park', 1970, 100, 1);
const duartePark = new Park('Duarte Park', 1992, 1200, 1.5);
const cacasePark = new Park('Cacases Park', 2000, 50, 0.5);

const duarteStreet = new Street('Duarte Street', 1900, 25, 'huge');
const SadhalaStreet = new Street('Sadhala Street', 1950, 15, 'big');
const SolStreet = new Street('Sol Street', 1920, 3, 'small');
const carrerasStreet = new Street('Carreras Street', 2000, 10, 'normal');

const parks = [centralpark, duartePark, cacasePark];
const streets = [duarteStreet, SadhalaStreet, SolStreet, carrerasStreet];

console.log('PARKS');

// Print the parks data
parks.forEach(park => {
    console.log(`${park.name} has a tree density of ${park.getTreeDensity()} trees per square km`);
})

// Print the age average of the parks
const currentYear = new Date().getFullYear();
let totalParksAge = 0;
parks.forEach(park => totalParksAge += park.getAge(currentYear));
const ageAverageParks = totalParksAge / parks.length;
console.log(`Our ${parks.length} have an average of ${ageAverageParks} years`);

// Print the parks with more than 1000 trees
const parksFiltered = parks.filter(park => park.numberOfTrees > 100);
parksFiltered.forEach(park => {
    console.log(`${park.name} has more than ${park.numberOfTrees}`);
});

console.log('\nSTREETS');

// Print the streets data
streets.forEach(street => {
    console.log(`${street.name}, built in ${street.year}, is a ${street.type} street`);
});

// Print the length average of the streets
let totalStreetLength = 0;
streets.forEach(street => totalStreetLength += street.length);
const lengthAverageStreets = totalStreetLength / streets.length;
console.log(`Our ${streets.length} have a total length of ${totalStreetLength} km, with an average of ${lengthAverageStreets} km`);
