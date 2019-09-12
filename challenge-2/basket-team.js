class BasketTeam {

    constructor(nameTeam) {
        this._nameTeam = nameTeam;
        this._scores = [];
    }

    get nameTeam() {
        return this._nameTeam;
    }

    addScore(...score) {
        this._scores.push(...score);
    }

    get average() {
        const sumOfAllScores = this._scores.reduce((summedScores, score) => summedScores + score);
        const average = sumOfAllScores / this._scores.length;
        return average;
    }
}

module.exports = {
    BasketTeam: BasketTeam
}
