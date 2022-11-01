function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, operator) {
    switch(operator) {
        case "+":
            return add(x,y);
        case "-":
            return subtract(x,y);
        case "x":
            return multiply(x,y);
        case "÷":
            return divide(x,y);
        default:
            return undefined;
    }
}

// Initialize buttons
(function () {
    let numbers = Array.from(document.querySelectorAll(".number"));
    let display = document.querySelector("#display");
    let firstVariable = document.querySelector("#x");
    let secondVariable = document.querySelector("#y");
    let activeOperator = document.querySelector("#activeOperator");
    let lastButtonIsOperator = false;

    display.textContent = "0";

    for(let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", e => {
            if((display.textContent != 0 || display.textContent.includes(".")) &&
                !lastButtonIsOperator) {
                let currentNum = display.textContent;
                currentNum += numbers[i].textContent;
                display.textContent = currentNum;
            } else {
                display.textContent = numbers[i].textContent;
            }
            lastButtonIsOperator = false;
        });
    }
 
    let dot = document.querySelector("#decimal");
    dot.addEventListener("click", event => {
        let displayText = display.textContent;
        if(!lastButtonIsOperator) {
            if(!displayText.includes(".")) {
                display.textContent = displayText.concat(".");
            }    
        } else {
            display.textContent = "0.";
        }
        lastButtonIsOperator = false;
    });

    let clear = document.querySelector("#clear");
    clear.addEventListener("click", event => {
        display.textContent = 0;
        lastButtonIsOperator = false;
        resetVariables();
    });

    let operators = document.querySelectorAll(".operator");
    operators.forEach(operator => {
        operator.addEventListener("click", e => {
            // If upperDisplay empty, add current value of display and the operator clicked
            // to upperDisplay and set display to 0. 
            // If not empty, change last operator in upperDisplay to one just clicked.

            // Once a second number has been entered, the next operator should 
            // automatically calculate and overwrite the numbers and operator in upperDisplay.
            
            if(display.textContent != "0" && !lastButtonIsOperator) {
                if(firstVariable.textContent != "") {
                    let result = operate(+firstVariable.textContent, 
                        +display.textContent, activeOperator.textContent);
                    firstVariable.textContent = result + " ";
                    activeOperator.textContent = operator.textContent;
                } else {
                    firstVariable.textContent = display.textContent + " ";
                    activeOperator.textContent = operator.textContent;
                }
            }

            lastButtonIsOperator = true;
        });
    });

    let equals = document.querySelector("#equals");
    equals.addEventListener("click", e => {
        secondVariable.textContent = display.textContent + " =";
        display.textContent = operate(+firstVariable.textContent, +display.textContent,
            activeOperator.textContent);
        resetVariables();
    });

    let negative = document.querySelector("#negative");
    negative.addEventListener("click", e => {
        if(display.textContent != "0") {
            let displayNumber = Number(display.textContent);
            displayNumber *= -1;
            display.textContent = displayNumber;
        } 
    });

    function resetVariables() {
        firstVariable.textContent = "";
        secondVariable.textContent = "";
        activeOperator.textContent = "";
    }


    function checkResultLength(result) {
        if(result.length > 11) {
            // if result is a non-decimal number, change to scientific notation
            
            // else if result is a decimal number, round to nearest 9th decimal place
        }
    }
})();
