class Person {

    /**
     * @constructor
     * @param {string} name - name of the person
     * @param {number} mass - mass of the person in kg
     * @param {number} height - height of the person in ft
     */
    constructor(name, mass, height) {
        this._name = name;
        this._mass = mass;
        this._height = height;
        this._bodyMassIndex = 0;
    }

    /**
     * return {string} name of the person
     */
    get name() {
        return this._name;
    }

    /**
     * Calculate the body mass index of the person
     *
     * @return {number} the body mass index of the person
     */
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
