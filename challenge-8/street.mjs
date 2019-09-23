import PublicPlace from "./publicPlace.mjs";

export default class Street extends PublicPlace{

    constructor(name, year, length, type) {
        super(name, year);
        this.length = length;
        this.type = type || 'normal';
    }

}
