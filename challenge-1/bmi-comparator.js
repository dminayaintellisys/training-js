class Person {

    /**
     * @constructor
     * @param {string} name - name of the person
     * @param {number} mass - mass of the person in kg
     * @param {number} height - height of the person in ft
     */
    constructor(name, mass, height) {
        this.name = name;
        this._mass = mass;
        this._height = height;
    }

    /**
     * Calculate the body mass index of the person
     *
     * @return {number} the body mass index of the person
     */
    get bodyMassIndex() {
        return this._mass / (this._height * this._height)
    }
}

const mark = new Person('Mark', 78, 1.69);
const john = new Person('John', 92, 1.95);

const isMarkBmiHigher = mark.bodyMassIndex > john.bodyMassIndex;

if (isMarkBmiHigher) {
    console.log(`${mark.name} is the winner with a bmi of: ${mark.bodyMassIndex}`);
} else {
    console.log(`${john.name} is the winner with a bmi of: ${john.bodyMassIndex}`);
}
