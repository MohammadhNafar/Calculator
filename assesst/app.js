class Calculator {
    constructor(lastResultTxt , currentResultTxt)
    {
        this.lastResultTxt = lastResultTxt;
        this.currentResultTxt = currentResultTxt;
        this.clear();
    }
    clear()
    {

        this.currentResult = '';
        this.lastResult = '';
        this.operation = undefined;
    }
    delete(){

    }

    appendNumber(number){
        this.currentResult = this.currentResult.toString() + number.toString();

    }
    chooseOperation(operation)
    {

    }
    compute(){

    }
    updateDisplay()
    {
        

    }
}











const numButtons = document.querySelectorAll(`[data-number]`);
const opButtons = document.querySelectorAll(`[data-operation`);
const equalsButton = document.querySelector(`[data-equals]`);
const deleteButton = document.querySelector(`[data-delete]`);
const clearButton = document.querySelector(`[data-clear]`);
const lastResultTxt = document.querySelector(`[last-result]`);
const currentResultTxt = document.querySelector(`[current-result]`);

const calculator = new Calculator(lastResultTxt ,
     currentResultTxt);
    
numButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})


