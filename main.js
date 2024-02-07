const Person = require("./classes/person.js");
const Player = require("./classes/player.js");
const NPC = require('./classes/npc.js');

function main() {
    console.log("This is the main function!");

    const person1 = new Person('Austin', 'Cleric');
    const person2 = new Person('Jerry', 'Barbarian')
    person1.updateX(2);
    person1.updateY(-4);

    console.log(person1.name);
    console.log(person1.type);
    console.log(person1.location);

    const player1 = new Player("Terry", "Fighter", "Sword", [10, 2]);
    console.log(player1.weapon)
    const player2 = new Player("Mary", "Mage", "Wand");

    const npc1 = new NPC("Drew", 'Mage');
    const npc2 = new NPC('Jeremy', 'Shopkeeper')
    console.log(NPC.npcTotal);
    console.log(NPC.compareType(npc1, player2))

    console.log(player1.getHealth());
    player1.takeDamage(145);
    player1.takeDamage(25);
    console.log(player1.getHealth());
    player1.drinkPotion(150);
    console.log(player1.getHealth());
}

main();