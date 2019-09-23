export default class Question {

    constructor(question, answers) {
        this.question = question;
        this.answers = answers;
    }

    printQuestion() {
        console.log(this.question);
        this._printAnswers();
    }

    _printAnswers() {
        this.answers.forEach((answer, i) => {
            console.log('%d. %s', i+1, answer.answer);
        });
    }

    isAnswerRight(answerPosition) {
        const answer = this.answers[answerPosition -1];
        return answer.isRight;
    }
}
