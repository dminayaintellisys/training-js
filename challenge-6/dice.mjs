export default class Dice {

    constructor(element, faces) {
        this._element = element;
        this._faces = faces;
        this._position = 0;
        this._isVisible = false;
    }

    setVisibility(isVisible) {
        this._isVisible = isVisible;
        this._updateElements();
    }

    roll(position) {
        this._position = position;
        this._updateElements();
    }

    get value() {
        return this._position + 1;
    }

    _updateElements() {

        this._element.src = this._faces[this._position];

        if (this._isVisible) {
            this._element.classList.add('visible');
        } else {
            this._element.classList.remove('visible');
        }
    }
}
