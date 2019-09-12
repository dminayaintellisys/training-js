class Person {

    constructor(mass, height) {
        this._mass = mass;
        this._height = height;
    }

    get bodyMassIndex() {
        return this._mass / (this._height * this._height)
    }
}

const mark = new Person(78, 1.69);
const john = new Person(92, 1.95);

const isMarkBmiHigher = mark.bodyMassIndex > john.bodyMassIndex;

console.log(isMarkBmiHigher ? mark.bodyMassIndex : john.bodyMassIndex);