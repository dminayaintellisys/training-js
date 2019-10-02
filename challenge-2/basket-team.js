class BasketTeam {

    /**
     * @constructor
     * @param {nameTeam} name - name of the team of basketball
     */
    constructor(nameTeam) {
        this._nameTeam = nameTeam;
        this._scores = [];
    }

    /**
     * @return {string} the basket's team name
     */
    get nameTeam() {
        return this._nameTeam;
    }

    /**
     * Add one or several scores to the team
     *
     * @param {number[]} score - the score(s) of the team 
     */
    addScore(...score) {
        this._scores.push(...score);
    }

    /**
     * Calculate the team's average score
     *
     * @return {number} team's average score
     */
    get average() {
        const sumOfAllScores = this._scores.reduce((summedScores, score) => summedScores + score);
        const average = sumOfAllScores / this._scores.length;
        return average;
    }
}

module.exports = {
    BasketTeam: BasketTeam
}
