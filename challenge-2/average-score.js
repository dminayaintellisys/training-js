const {BasketTeam} = require('./basket-team');

const johnTeam = new BasketTeam("John's team");
const mikeTeam = new BasketTeam("Mike's team");
const maryTeam = new BasketTeam("Mary's team");

johnTeam.addScore(89, 120, 103);
mikeTeam.addScore(116, 94, 123);
maryTeam.addScore(97, 134, 105);

// Is john's team winner
if (johnTeam.average > mikeTeam.average && johnTeam.average > maryTeam.average) {
    
    console.log(`${johnTeam.nameTeam} is the winner: ${johnTeam.average}`);
    
// Is mike's team winner
} else if (mikeTeam.average > johnTeam.average && mikeTeam.average > maryTeam.average) {
    
    console.log(`${mikeTeam.nameTeam} is the winner: ${mikeTeam.average}`);
    
// Is mary's team winner
} else if (maryTeam.average > johnTeam.average && maryTeam.average > mikeTeam.average) {
    
    console.log(`${maryTeam.nameTeam} is the winner: ${maryTeam.average}`);
    
// is a draw
} else {
    
    console.log(`All teams are draws`);
}
