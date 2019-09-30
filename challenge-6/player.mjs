export default class Player {

    /**
     * @param {string} name - player's name
     * @param {Object[]} element dom elements
     */
    constructor(name, element) {
        this.name = name;
        this.element = element;
        this._score = 0;
        this.totalScore = 0;
        this._isLoseTotalScore = false;
        this._isWinner = false;
        this._isActivedStated = false;
    }

    /**
     * Evaluate if this player is the winner
     * 
     * @param {number} winnerScore - score to now if this player is the winner
     * @returns true if this player is the winner
     */
    isWinner(winnerScore) {
        return this.totalScore >= winnerScore;
    }

    /**
     * Set the current score of this player
     * 
     * @param {Object} score1 - score of the dice 1
     * @param {Object} score2 - score fo the dice 2
     */
    setScore(score1, score2) {
        this._resetOrSetScore(score1, score2);
        this._resetTotalScore(score1, score2);
        this._updateElements();
    }

    /**
     * Reset the current score of this player if the score of one dice
     * is 1. Else, set the score.
     * 
     * @param {Object} score1 - score of the dice 1
     * @param {Object} score2 - score fo the dice 2
     */
    _resetOrSetScore(score1, score2) {

        if (score1.score == 1 || score2.score == 1) {
            this._score = 0;
        } else {
            this._score += score1.score + score2.score;
        }
    }

    /**
     * Reset the total score of this player if the score of one dice
     * is 6 twice in a row.
     * 
     * @param {Object} score1 - score of the dice 1
     * @param {Object} score2 - score fo the dice 2
     */
    _resetTotalScore(score1, score2) {
        
        this._isLoseTotalScore = this._isLoseScore(score1) || this._isLoseScore(score2);
        
        if (this._isLoseTotalScore) {
            this._score = 0;
            this.totalScore = 0;
        }
    }

    /**
     * Evaluate if the player lose the total score
     * 
     * @param {Object} score - score of a dice
     * @return {boolean} return true if the score of one dice is 6 twice 
     * in a row.
     */
    _isLoseScore(score) {
        return score.lastScore == 6 && score.score == 6;
    }

    /**
     * Set the total score of this player
     */
    setTotalScore() {

        if (!this._isLoseTotalScore) {
            this.totalScore += this._score;
        } else {
            this.totalScore = 0;
        }

        this._score = 0;
        this._updateElements();
    }

    /**
     * Set the state of this player
     * 
     * @param {boolean} isActived 
     */
    setState(isActived) {
       this._isActivedStated = isActived;
       this._updateElements();
    }

    /**
     * Set a player as winner
     */
    setWinner() {
        this._isWinner = true;
        this._updateElements();
    }
    
    /**
     * @return {number} return the current score of this player
     */
    get score() {
        return this._score;
    }

    /**
     * Reset this player to his initial state
     * 
     * @param {boolean} isDefaultPlayer - set the player as the first player
     */
    resetPlayerState(isDefaultPlayer) {
        this._score = 0;
        this.totalScore = 0;
        this._isActivedStated = isDefaultPlayer;
        this._isWinner = false;
        this._updateElements();
    }

    /**
     * Update the dom elements's values
     */
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
