const Person = require('./person.js');

class Player extends Person {
    constructor(name, type, weapon, location) {
        super(name, type, location);
        this.weapon = weapon;
    }
}

module.exports = Player;
