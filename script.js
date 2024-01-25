"use strict";

let display = document.getElementById('display');
let currentInput = '0';

function appendDigit(digit) {
  if (currentInput === '0' || currentInput === '-0') {
    currentInput = digit;
  } else {
    currentInput += digit;
  }
  updateDisplay();
}

function appendSymbol(symbol) {
  currentInput += symbol;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === '' || currentInput === '-') {
    currentInput = '0';
  }
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  display.textContent = currentInput;
}

// Keyboard event listener
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  const key = event.key;

  if (/[0-9]/.test(key)) {
    appendDigit(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    appendSymbol(key);
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'c' || key === 'C') {
    clearDisplay();
  } else if (key === '.') {
    appendSymbol(key);
  }
}
