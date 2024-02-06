const Person = require('./player.js')

class NPC extends Person {
    static npcTotal = 0;

    constructor(name, type, location) {
        super(name, type, location)

        NPC.npcTotal++;
    }

    static compareType(npc, player) {
        if(npc.type === player.type) {
            return `Huzzah! We're both ${player.type}`
        } else {
            return `We're not the same type.`
        }
    }
}

module.exports = NPC;