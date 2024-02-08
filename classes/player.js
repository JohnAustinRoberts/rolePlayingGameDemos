const Person = require('./person.js');

class Player extends Person {
    constructor(name, type, weapon, location) {
        super(name, type, location);
        this.weapon = weapon;
        this.inventory = [];
    }

    addItem(item) {
        if(!this.inventory.includes(item)) {
            this.inventory.push(item);
            return;
        } else {
        console.log(`${item.name} already in inventory.`)
        }
    }
}

module.exports = Player;
