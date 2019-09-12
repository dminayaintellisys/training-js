const {BasketTeam} = require('./basket-team');

const johnTeam = new BasketTeam("John's team");
const mikeTeam = new BasketTeam("Mike's team");
const maryTeam = new BasketTeam("Mary's team");

johnTeam.addScore(89, 120, 103);
mikeTeam.addScore(116, 94, 123);
maryTeam.addScore(97, 134, 105);

let winner = {};

if (johnTeam.average > mikeTeam.average && johnTeam.average > maryTeam.average) {
    winner = johnTeam;
} else if (mikeTeam.average > johnTeam.average && mikeTeam.average > maryTeam.average) {
    winner = mikeTeam;
} else {
    winner = maryTeam;
}

console.log(`${winner.nameTeam} is the winner: ${winner.average}`);