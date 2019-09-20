export default class Score {

    constructor(score) {
        this.score = 0;
        this.lastScore = 0;
    }

    updateScore(score) {
        this.lastScore = this.score;
        this.score = score;
    }
}
