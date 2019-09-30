export default class Dice {

    /**
     * @param {Object} element - dom elements
     * @param {string[]} faces - faces of the dices
     */
    constructor(element, faces) {
        this._element = element;
        this._faces = faces;
        this._position = 0;
        this._isVisible = false;
    }

    /**
    * Set the visibility of the dices
    * 
    * @param {boolean} isVisible - visibility of the dices 
    */
    setVisibility(isVisible) {
        this._isVisible = isVisible;
        this._updateElements();
    }

    /**
     * Roll the dice
     * 
     * @param {number} position position to roll the dice
     */
    roll(position) {
        this._position = position;
        this._updateElements();
    }

    /**
     * @return {number} value of the current dice's face
     */
    get value() {
        return this._position + 1;
    }

    /**
     * Update the dom elements's values
     */
    _updateElements() {

        this._element.src = this._faces[this._position];

        if (this._isVisible) {
            this._element.classList.add('visible');
        } else {
            this._element.classList.remove('visible');
        }
    }
}
