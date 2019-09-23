import PublicPlace from "./publicPlace.mjs";

export default class Park extends PublicPlace {

    constructor(name, year, numberOfTrees, area) {
        super(name, year);
        this.numberOfTrees = numberOfTrees;
        this.area = area;
    }

    getAge(currentYear) {
        return currentYear - this.year;
    }

    getTreeDensity() {
        return this.numberOfTrees / this.area;
    }
}
