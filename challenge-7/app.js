import Question from './question.mjs';

const MAX_SCORE = 100;
const buttonStartQuiz = document.querySelector('.button-start-quiz');
let goodAnswers = 0;

const questions = [
    new Question(`What is the sea's color?`, [
        {answer: 'blue', isRight: true},
        {answer: 'White', isRight: false},
        {answer: 'Black', isRight: false}
    ]),
    new Question(`What is the earth's shape?`, [
        {answer: 'flat', isRight: false},
        {answer: 'spherical', isRight: true},
        {answer: 'square', isRight: false}
    ]),
    new Question(`What is the flavor of the honey?`, [
        {answer: 'sweat', isRight: true},
        {answer: 'salty', isRight: false},
        {answer: 'spicy', isRight: false}
    ]),
    new Question(`What is the computer's father?`, [
        {answer: 'Bill Gate', isRight: false},
        {answer: 'Steven Jobs', isRight: false},
        {answer: 'Alan Turing', isRight: true}
    ]),
    new Question(`What is the alphabet first letter?`, [
        {answer: 'Z', isRight: false},
        {answer: 'A', isRight: true},
        {answer: 'K', isRight: false}
    ])
];

/**
 * Start a new quiz
 */
buttonStartQuiz.onclick = () => {
    quiz(0);
}

/**
 * Run the quiz
 * 
 * @param {number} position - position of the question to do
 */
function quiz(position) {
    
    if (position < questions.length) {
        doQuestion(position);
    } else {
        finishQuiz();
    }
}

/**
 * Do a question
 * @param {number} position - position of the question
 */
function doQuestion(position) {

    const question = questions[position];
    question.printQuestion();
    const inputAnswer = prompt(question.question);

    if (isQuizFinish(inputAnswer)) {
        console.log('\n')
        finishQuiz();
        return;
    }

    const isAnswerRight = question.isAnswerRight(inputAnswer);
    printResult(isAnswerRight);

    quiz(++position);
}

/**
 * Evaluate if the quiz is finish
 * 
 * @param {number} inputAnswer - answer of the user
 * @returns {boolean} is true if the quiz is finish
 */
function isQuizFinish(inputAnswer) {
    return inputAnswer === 'exit' || inputAnswer === null;
}

/**
 * Print in console if the answer of the user is right or not
 * 
 * @param {boolean} isAnswerRight - the user's answer is right
 */
function printResult(isAnswerRight) {

    if (isAnswerRight) {
        console.log('This answer is right\n\n');
        goodAnswers++;
    } else {
        console.log('This answer is wrong\n\n');
    }
}

/**
 * Finish the quiz
 */
function finishQuiz() {
    const score = (MAX_SCORE / questions.length) * goodAnswers;
    console.log('Quiz finished');
    console.log(`Right answers: ${goodAnswers} of ${questions.length}`);
    console.log(`Score: ${score} of ${MAX_SCORE}`);
    goodAnswers = 0;
}
