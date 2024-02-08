const Player = require('../classes/player.js');
const Item = require('../classes/item.js');

describe('Player tests', ()=> {
    it('should add an item to inventory if it is not already present', () => {
        const player = new Player('John', 'human', 'sword', 'forest');
        const item = new Item('potion', 5);
        player.addItem(item);
        expect(player.inventory).toContain(item);
    })

    it('should not add item if one is already present', ()=> {
        const player = new Player('John', 'human', 'sword', 'forest');
        const item = new Item('potion', 5);
        player.inventory.push(item);
        player.addItem(item);
        expect(player.inventory).toHaveLength(1);
        expect(console.log()).toHaveBeenCalledWith(`${item.name} already in inventory.`)
    });

})

