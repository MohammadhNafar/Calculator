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

        this.currentResult = this.currentResult.toString().slice(0, -1);
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



    displayNumber(number)
    {
        const stringNum = number.toString();
        const integerDig = parseFloat(stringNum.split('.')[0])
        const decimalDig = stringNum.split('.')[1]
        let integerDisplay;
        if (isNaN(integerDig))
        {
            integerDisplay = ''
        } else {
            integerDisplay = integerDig.toLocaleString('en',{
                maximumFractionDigits: 0
            })
        }
        if (decimalDig != null)
        {
            return `${integerDisplay}.${decimalDig}`
        }
        else
        {
            return integerDisplay
        }
        
    }





    updateDisplay()
    {
        this.currentResultTxt.innerText =
         this.displayNumber( this.currentResult);
        if (this.operation != null)
        {

            this.lastResultTxt.innerText =
             `${this.displayNumber(this.lastResult)} ${this.operation}`

        }
        else {
            this.lastResultTxt.innerText = ''

        }


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

deleteButton.addEventListener ('click', button => {
    calculator.delete();
    calculator.updateDisplay()
})










