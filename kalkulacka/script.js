class Calculator {
  constructor(previousOperandElement, currentOperandElement) {
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = null;
  }

  addNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  updateDisplay() {
    this.currentOperandElement.value = this.currentOperand;
  }
  addOperation(operation) {
    if (this.currentOperand === "") return;
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
}

const numberButtons = document.getElementsByClassName("number");
const operationButtons = document.getElementsByClassName("operation");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

const currentOperandElement =
  document.getElementsByClassName("current-operand")[0];
const previousOperandElement =
  document.getElementsByClassName("previous-operand")[0];
const calculator = new Calculator(
  currentOperandElement,
  previousOperandElement
);

Array.from(numberButtons).forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addNumber(button.value);
    calculator.updateDisplay();
  });
});

Array.from(operationButtons).forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addOperation(button.value);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  //addNumber(button.innerText);
  //updateDisplay();
});

deleteButton.addEventListener("click", () => {
  //addNumber(button.innerText);
  //updateDisplay();
});

clearButton.addEventListener("click", () => {
  //addNumber(button.innerText);
  //updateDisplay();
});
