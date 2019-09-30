export default class Score {

    /**
     * @param {number} score - current score
     */
    constructor(score) {
        this.score = 0;
        this.lastScore = 0;
    }

    /**
     * Update the current value of this score
     * 
     * @param {number} score - current value of this score
     */
    updateScore(score) {
        this.lastScore = this.score;
        this.score = score;
    }
}
