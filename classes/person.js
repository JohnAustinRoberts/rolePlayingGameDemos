class Person {
    constructor(name, type, location) {
        this.name = name;
        this.type = type;
        this.location = location;
    }
introduce() {
    return `Hello, my name is ${this.name} and I'm a ${this.type}`
}

updateLocation(place) {
    this.location = place;
}

updateType(newType) {
    this.type = newType;
}
}



module.exports = Person;