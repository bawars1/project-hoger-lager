// Variables for game state
let credits = 10;
let currentSum = null;
let newSum = null;
let gameStarted = false;

// DOM Elements
const statusText = document.getElementById('status');
const creditsText = document.getElementById('credits');
const currentNumberText = document.getElementById('current-number');
const resultText = document.getElementById('result');
const startButton = document.getElementById('start-game');
const hogerButton = document.getElementById('hoger');
const lagerButton = document.getElementById('lager');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');

// Function to start the game
startButton.addEventListener('click', () => {
    gameStarted = true;
    credits = 10;
    currentSum = throwDice();
    updateUI();
    enableButtons();
    statusText.textContent = 'Gok of het volgende aantal ogen hoger of lager is!';
    resultText.textContent = '';
});

// Function to generate a random number between 1 and 6 (dice throw)
function throwDice() {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    
    // Update dice display
    dice1.textContent = die1;
    dice2.textContent = die2;

    return die1 + die2;
}

// Function to update the UI
function updateUI() {
    creditsText.textContent = credits;
    currentNumberText.textContent = currentSum;
}

// Function to enable the guess buttons
function enableButtons() {
    hogerButton.disabled = false;
    lagerButton.disabled = false;
    startButton.disabled = true;
}

// Function to disable the guess buttons
function disableButtons() 
    hogerButton.disabled = true;
 
