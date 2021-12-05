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
        this.operation = 2;
    }
    delete(){

    }

    appendNumber(number){
        this.currentResult = this.currentResult.toString() + number.toString();
        console.log(this.operation);
        console.log(this.currentResult);

    }
    chooseOperation(operation)
    {

    }
    compute(){

    }
    updateDisplay()
    {
        this.currentResultTxt.innerText = this.currentResult;
        

    }
}











const numButtons = document.querySelectorAll(`[data-number]`);
const opButtons = document.querySelectorAll(`[data-operation`);
const equalsButton = document.querySelector(`[data-equals]`);
const deleteButton = document.querySelector(`[data-delete]`);
const clearButton = document.querySelector(`[data-clear]`);
const lastResultTxt = document.querySelector(`[data-last-result]`);
const currentResultTxt = document.querySelector(`[data-current-result]`);

const calculator = new Calculator(lastResultTxt ,
     currentResultTxt);
    
numButtons.forEach(button => {
    button.addEventListener('click', () =>{
        console.log(button ,"clicked");
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
    })
})















