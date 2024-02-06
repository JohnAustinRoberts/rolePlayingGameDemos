class Person {
    constructor(name, type, location) {
        this.name = name;
        this.type = type;
        this.location = location || [0,0];
    }
    
    introduce() {
        return `Hello, my name is ${this.name} and I'm a ${this.type}`
    }

    updateX(val) {
        this.location[0] += val;
    }

    updateY(val) {
        this.location[1] += val;
    }
}

module.exports = Person;