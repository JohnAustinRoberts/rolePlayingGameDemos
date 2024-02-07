class Person {
    #health = 100;

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

    getHealth(){
        return `${this.#health} hp`;
    }

    drinkPotion(val) {
        let total = val + this.#health;
        //55 health now; I drink a potion for 25hp;
        if(total > 100) {
            this.#health = 100;
        } else {
            this.#health += val;
        }
    }

    takeDamage(val) {
        let total = this.#health - val;
        if(total <= 0) {
            this.#health = 0;
        } else {
            this.#health -= val;
        }
    }
}

module.exports = Person;