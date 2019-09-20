import Player from './player.mjs';
import Score from './score.mjs';
import Dice from './dice.mjs';

// Elements
const elementsPlayer1  = {
    state: document.querySelector('.player-0-panel'),
    name: document.querySelector('#name-0'),
    score: document.querySelector('#current-0'),
    totalScore: document.querySelector('#score-0'),
}

const elementsPlayer2  = {
    state: document.querySelector('.player-1-panel'),
    name: document.querySelector('#name-1'),
    score: document.querySelector('#current-1'),
    totalScore: document.querySelector('#score-1'),
}

const diceElement1 = document.querySelector('#dice-0');
const diceElement2 = document.querySelector('#dice-1');
const newGameButton = document.querySelector('.btn-new');
const winningScoreElement = document.querySelector('.winning-score');
const rollDiceButton = document.querySelector('.btn-roll');
const holdButton = document.querySelector('.btn-hold');
const inputScore = document.querySelector('#input-score');
const buttonScore = document.querySelector('#button-score');

// Fields
const diceFaces = [
    'dice-1.png', 'dice-2.png',
    'dice-3.png', 'dice-4.png',
    'dice-5.png', 'dice-6.png'
];

let isGameFinish = false;
let isPlayer1Turn = true;
let isFirstRoll = true;
let winningScore = 100;
const player1 = new Player('Player 1', elementsPlayer1);
const player2 = new Player('Player 2', elementsPlayer2);
const dice1 = new Dice(diceElement1, diceFaces);
const dice2 = new Dice(diceElement2, diceFaces);
const score1 = new Score();
const score2 = new Score();

winningScoreElement.textContent = winningScore;

// Listeners
newGameButton.onclick = newGameListener;
rollDiceButton.onclick = rollDiceListener;
holdButton.onclick = holdListener;
inputScore.onchange = scoreListener;
buttonScore.onclick = scoreListener;

// Functions
function newGameListener() {

    const isDefaultPlayer = true;

    player1.resetPlayerState(isDefaultPlayer);
    player2.resetPlayerState(!isDefaultPlayer);

    isPlayer1Turn = true;
    isGameFinish = false;
    isFirstRoll = true;

    setDiceVisisbility(false);
}

function rollDiceListener() {

    if (isGameFinish) return;

    if (isFirstRoll) {
        setDiceVisisbility(true);
        isFirstRoll = false;
    }

    const randomPosition1 = getRandomPosition();
    const randomPosition2 = getRandomPosition();
    
    dice1.roll(randomPosition1);
    dice2.roll(randomPosition2);

    score1.updateScore(dice1.value);
    score2.updateScore(dice2.value);

    setScore(score1, score2);
}

function getRandomPosition() {
    return Math.trunc(Math.random() * diceFaces.length);
}

function setScore(score1, score2) {

    if (isPlayer1Turn) {
        player1.setScore(score1, score2);
    } else {
        player2.setScore(score1, score2);
    }
}

function holdListener() {

    if (isGameFinish) return;

    if (isPlayer1Turn) {
        player1.setTotalScore();
        score1.updateScore(0);
    } else {
        player2.setTotalScore();
        score2.updateScore(0);
    }

    isPlayer1Turn = !isPlayer1Turn;

    setNextPlayer();
    chooseWinner();
}

function setNextPlayer() {
    player1.setState(isPlayer1Turn);
    player2.setState(!isPlayer1Turn);
}

function chooseWinner() {

    const player1IsWinner = player1.isWinner(winningScore);
    const player2IsWinner = player2.isWinner(winningScore);

    if (player1IsWinner) player1.setWinner();
    if (player2IsWinner) player2.setWinner();

    isGameFinish = player1IsWinner || player2IsWinner;

    if (isGameFinish) setGameAsFinished();
}

function setGameAsFinished() {
    player1.setState(false);
    player2.setState(false);
    setDiceVisisbility(false);
}

function setDiceVisisbility(isVisible) {
    dice1.setVisibility(isVisible);
    dice2.setVisibility(isVisible);
}

function scoreListener() {
    winningScore = inputScore.value || 0;
    winningScoreElement.textContent = winningScore;
    inputScore.value = null;
    newGameListener();
}
