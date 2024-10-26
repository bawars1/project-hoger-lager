// Variabelen om alles bij te houden
let credits = 10;
let currentSum = null;
let newSum = null;

// Deze variabelen pakken de ID's van onze elementen
const statusText = document.getElementById('status');
const creditsText = document.getElementById('credits');
const currentNumberText = document.getElementById('current-number');
const resultText = document.getElementById('result');
const startButton = document.getElementById('start-game');
const hogerButton = document.getElementById('hoger');
const lagerButton = document.getElementById('lager');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');

// Start de game
startButton.addEventListener('click', () => {
    credits = 10;
    currentSum = throwDice();
    updateUI();
    enableButtons();
    statusText.textContent = 'Gok of de volgende worp hoger of lager wordt!';
    resultText.textContent = '';
});

// Simpele functie om de dobbelstenen te gooien en te laten draaien
function throwDice() {
    // Zet draai-animatie aan
    dice1.classList.add('roll');
    dice2.classList.add('roll');

    // Zet de draai animatie na een halve seconde uit, zodat hij opnieuw kan draaien
    setTimeout(() => {
        dice1.classList.remove('roll');
        dice2.classList.remove('roll');
    }, 500);

    // Willekeurige getallen voor de dobbelstenen
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    
    // Dobbelsteen cijfers aanpassen
    dice1.textContent = die1;
    dice2.textContent = die2;

    return die1 + die2;
}

// Update UI met credits en huidig nummer
function updateUI() {
    creditsText.textContent = credits;
    currentNumberText.textContent = currentSum;
}

// Knoppen activeren en uitschakelen
function enableButtons() {
    hogerButton.disabled = false;
    lagerButton.disabled = false;
    startButton.disabled = true;
}

function disableButtons() {
    hogerButton.disabled = true;
    lagerButton.disabled = true;
    startButton.disabled = false;
}

// Functie voor het verwerken van de keuze hoger of lager
function handleGuess(guess) {
    newSum = throwDice();
    resultText.textContent = `Nieuwe worp: ${newSum}.`;

    if ((guess === 'hoger' && newSum > currentSum) || (guess === 'lager' && newSum < currentSum)) {
        credits += 2;
        statusText.textContent = 'Goed geraden!';
    } else {
        credits -= 1;
        statusText.textContent = 'Jammer, fout gegokt!';
    }

    currentSum = newSum;
    updateUI();

    // Check of er credits zijn
    if (credits <= 0) {
        statusText.textContent = 'Geen credits meer, einde spel!';
        disableButtons();
    }
}

// Event listeners voor de knoppen Hoger en Lager
hogerButton.addEventListener('click', () => handleGuess('hoger'));
lagerButton.addEventListener('click', () => handleGuess('lager'));
