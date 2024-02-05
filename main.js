const Person = require("./Classes/person.js");
const Player = require("./classes/player.js");

function main() {
    console.log("This is the main function!");

    const person1 = new Person('Austin', 'Fire', 'Jersey');
    person1.updateLocation('Texas');
    person1.updateType('Water');
    console.log(person1);

    const player1 = new Player('Terry');
    console.log(player1);
    //console.log(person1.introduce())

}

main();