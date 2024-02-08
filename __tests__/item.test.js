const Item = require('../classes/item.js');

describe('Item tests', () => {
    test('should create an instance of an Item', () => {
        const item = new Item('test item', 10);
        expect(item).toBeInstanceOf(Item);
    })

    it('should set the name and weight properties correctly', () => {
        const name = 'test item';
        const weight = 10;
        const item = new Item(name, weight);
        expect(item.name).toBe(name);
        expect(item.weight).toBe(weight);
    });
});