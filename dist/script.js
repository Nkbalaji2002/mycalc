"use strict";
const output = document.getElementById("output");
const buttons = document.querySelectorAll("button");
let currentInput = "";
let prevInput = "";
let operator = "";
function updateDisplay() {
    output.value = currentInput;
}
function handleNumberClick(value) {
    currentInput += value;
    updateDisplay();
}
function handleOperatorClick(value) {
    if (currentInput !== "") {
        if (prevInput !== "") {
            calculate();
        }
        operator = value;
        prevInput = currentInput;
        currentInput = "";
    }
}
function calculate() {
    const prevNum = parseFloat(prevInput);
    const currentNum = parseFloat(currentInput);
    switch (operator) {
        case "+":
            currentInput = (prevNum + currentNum).toString();
            break;
        case "-":
            currentInput = (prevNum - currentNum).toString();
            break;
        case "*":
            currentInput = (prevNum * currentNum).toString();
            break;
        case "/":
            currentInput = (prevNum / currentNum).toString();
            break;
    }
    prevInput = "";
    operator = "";
    updateDisplay();
}
function clearAll() {
    currentInput = "";
    prevInput = "";
    operator = "";
    updateDisplay();
}
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (!isNaN(parseFloat(value)) || value === ".") {
            handleNumberClick(value);
        }
        else if (value === "+" ||
            value === "-" ||
            value === "*" ||
            value === "/") {
            handleOperatorClick(value);
        }
        else if (value === "=") {
            calculate();
        }
        else if (value === "AC") {
            clearAll();
        }
        else if (value === "%") {
            currentInput = (parseFloat(currentInput) / 100).toString();
        }
        else if (value === "+/-") {
            currentInput = (-parseFloat(currentInput)).toString();
        }
    });
});
