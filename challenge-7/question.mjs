export default class Question {

    /**
     * @param {string} question - question to do to the user
     * @param {Object} answers - answers of the question
     */
    constructor(question, answers) {
        this.question = question;
        this.answers = answers;
    }

    /**
     * Print the question in the console
     */
    printQuestion() {
        console.log(this.question);
        this._printAnswers();
    }

    /**
     * print the answers of the question in the console
     */
    _printAnswers() {
        this.answers.forEach((answer, i) => {
            console.log('%d. %s', i+1, answer.answer);
        });
    }

    /**
     * Evaluate if the user's answer is right
     * 
     * @param answerPosition - user's answer
     * @return {boolean} true is the user's answer is right
     */
    isAnswerRight(answerPosition) {
        const answer = this.answers[answerPosition -1];
        return answer.isRight;
    }
}
