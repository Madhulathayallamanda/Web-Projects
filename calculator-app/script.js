let displayScreen = document.getElementById('display-screen');
let calculateString = '';

function appendDisplay(value) {
    calculateString += value;
    displayScreen.value = calculateString;
}

function clearDisplay() {
    calculateString = '';
    displayScreen.value = calculateString;
}

function backspace() {
    calculateString = calculateString.slice(0, -1);
    displayScreen.value = calculateString;
}

function calculate(operator) {
    if (operator === '=') {
        try {
            displayScreen.value = eval(calculateString);
            calculateString = displayScreen.value;
        } catch (e) {
            displayScreen.value = 'Error';
            calculateString = '';
        }
    } else {
        appendDisplay(operator);
    }
}
