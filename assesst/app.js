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
        if (number === '.' && this.currentResult.includes('.')) return
        this.currentResult = this.currentResult.toString() + number.toString();
        

    }
    chooseOperation(operation)
    {
        if (this.currentResult === '')return
        if (this.lastResult !== ''){
            this.compute()
        }
         this.operation = operation
         this.lastResult = this.currentResult
         this.currentResult = ''

    }
    compute(){
        let comp;
        const last = parseFloat(this.lastResult);
        const current = parseFloat(this.currentResult);
        if (isNaN(last) || isNaN(current))return;
        switch(this.operation)
        {
            case '+':
                comp = last + current
                break;
                case '-':
                comp = last - current
                break;
                case '*':
                comp = last * current
                break;
                case '÷':
                comp = last / current
                break;
                default:
                    return

                
        }
        this.currentResult = comp;
        this.operation = undefined;
        this.lastResult = '';




    }
    updateDisplay()
    {
        this.currentResultTxt.innerText = this.currentResult;
        this.lastResultTxt.innerText = this.lastResult;


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

opButtons.forEach(button => {
    button.addEventListener('click', () =>{
        console.log(button ,"clicked");
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()
    })
})



equalsButton.addEventListener ('click', button => {
    calculator.compute();
    calculator.updateDisplay()
})


clearButton.addEventListener ('click', button => {
    calculator.clear();
    calculator.updateDisplay()
})












