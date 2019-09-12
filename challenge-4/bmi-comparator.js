class Person {

    constructor(name, mass, height) {
        this._name = name;
        this._mass = mass;
        this._height = height;
        this._bodyMassIndex = 0;
    }

    get name() {
        return this._name;
    }

    get bodyMassIndex() {
        this._bodyMassIndex = this._mass / (this._height * this._height);
        return this._bodyMassIndex;
    }
}

const mark = new Person('Mark', 78, 1.69);
const john = new Person('John', 92, 1.95);

const isMarkBmiHigher = mark.bodyMassIndex > john.bodyMassIndex;

if (isMarkBmiHigher) {
    console.log(`${mark.name}' bmi:`, mark.bodyMassIndex);
} else {
    console.log(`${john.name}' bmi:`, john.bodyMassIndex);
}
