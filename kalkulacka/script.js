const numberButtons = document.getElementsByClassName("number")
const operationButtons = document.getElementsByClassName("operation")
const equalsButton = document.getElementById("equals")
const clearButton = document.getElementById("clear")
const deleteButton = document.getElementById("delete")
const currentOperandElement =
const currentOperandElement =
const calculator = new Calculator(document.g)


Array.from(numberButtons).forEach(button=>{button.addEventListener("click", ()=>{addNumber(button.innerText)
    updateDisplay()

})})

Array.from(operationButtons).forEach(button=>{
    button.addEventListener("click", ()=>{
        addOperation(button.innerText)
    updateDisplay()

})})

equalsButton.addEventListener("click", ()=>{addNumber(button.innerText)
    updateDisplay()
})

deleteButton.addEventListener("click", ()=>{addNumber(button.innerText)
    updateDisplay()
})

clearButton.addEventListener("click", ()=>{addNumber(button.innerText)
    updateDisplay()
})

class Calculator {
    constructor(previousOperandElement, currentOperandElement){
        this.previousOperandElement = previousOperandElement
        this,previousOperandElement = previousOperandElement
        this.clear()
    }
    addNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }
    updateDisplay(){
        this.currentOperandElement.innerText = this.currentOperand
    }
}
