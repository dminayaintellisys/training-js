import PublicPlace from "./publicPlace.mjs";

export default class Park extends PublicPlace {

    /**
     * @param {string} name name of this place
     * @param {number} year foundation year of this place
     * @param {number} numberOfTrees number of trees in this park
     * @param {number} area area of this park
     */
    constructor(name, year, numberOfTrees, area) {
        super(name, year);
        this.numberOfTrees = numberOfTrees;
        this.area = area;
    }

    /**
     * Get the age of this place
     * 
     * @param {number} currentYear
     */
    getAge(currentYear) {
        return currentYear - this.year;
    }

    /**
     * Calculate the tree density of this park
     * 
     * @return {number} the tree density
     */
    getTreeDensity() {
        return this.numberOfTrees / this.area;
    }
}
