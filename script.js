let display = document.getElementById('result');

function appendToDisplay(value) {
    display.value += value;
}

function clearScreen() {
    display.value = '';
}

function del() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}