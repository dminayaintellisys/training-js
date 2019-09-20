export default class Player {

    constructor(name, element) {
        this.name = name;
        this.element = element;
        this._score = 0;
        this.totalScore = 0;
        this._isLoseTotalScore = false;
        this._isWinner = false;
        this._isActivedStated = false;
    }

    isWinner(winnerScore) {
        return this.totalScore >= winnerScore;
    }

    setScore(score1, score2) {
        this._setScore(score1, score2);
        this._loseTotalScore(score1, score2);
        this._updateElements();
    }

    _setScore(score1, score2) {

        if (score1.score == 1 || score2.score == 1) {
            this._score = 0;
        } else {
            this._score += score1.score + score2.score;
        }
    }

    _loseTotalScore(score1, score2) {
        
        this._isLoseTotalScore = this._isLoseScore(score1) || this._isLoseScore(score2);
        
        if (this._isLoseTotalScore) {
            this._score = 0;
            this.totalScore = 0;
        }
    }

    _isLoseScore(score) {
        return score.lastScore == 6 && score.score == 6;
    }

    setTotalScore() {

        if (!this._isLoseTotalScore) {
            this.totalScore += this._score;
        } else {
            this.totalScore = 0;
        }

        this._score = 0;
        this._updateElements();
    }

    setState(isActived) {
       this._isActivedStated = isActived;
       this._updateElements();
    }

    setWinner() {
        this._isWinner = true;
        this._updateElements();
    }
    
    get score() {
        return this._score;
    }

    resetPlayerState(isDefaultPlayer) {
        this._score = 0;
        this.totalScore = 0;
        this._isActivedStated = isDefaultPlayer;
        this._isWinner = false;
        this._updateElements();
    }

    _updateElements() {
        
        this.element.score.textContent = this._score;
        this.element.totalScore.textContent = this.totalScore;
        this.element.name.textContent = !this._isWinner ? this.name : 'Winner!';
        
        if (!this._isWinner) {
            this.element.name.classList.remove('winner');
            this.element.state.classList.remove('winner');
        } else {
            this.element.name.classList.add('winner');
            this.element.state.classList.add('winner');
        }

        if (this._isActivedStated) {
            this.element.state.classList.add('active')
        } else {
            this.element.state.classList.remove('active')
        }
    }
}
