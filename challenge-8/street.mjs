import PublicPlace from "./publicPlace.mjs";

export default class Street extends PublicPlace{

    /**
     * @param {string} name - name of this place
     * @param {number} year - foundation year this place
     * @param {number} length - length of this street
     * @param {string} type - type of this park
     */
    constructor(name, year, length, type) {
        super(name, year);
        this.length = length;
        this.type = type || 'normal';
    }
}
