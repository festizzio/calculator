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

    // decimal is being added onto result instead of overwriting with 0..
    // Also, if the result also has a decimal, then pressing decimal followed by
    // any other numbers will concatenate them onto the end. 
    let dot = document.querySelector("#decimal");
    dot.addEventListener("click", event => {
        let displayText = display.textContent;
        if(!displayText.includes(".")) {
            display.textContent = displayText.concat(".");
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
                    // display.textContent = "0";
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

    // When the + button is pressed, need to store the value in
    // the display currently. The next number entered should overwrite
    // what was already in the display, and when another operator
    // button is pressed, add the two values together and display them

    // Add super script (another row of text) in the display, above the
    // currently active value along with whatever operator was entered.
    // Operator can change if user presses another operator button before
    // the next number. After, we can 0 out the active number.


    function resetVariables() {
        firstVariable.textContent = "";
        secondVariable.textContent = "";
        activeOperator.textContent = "";
    }
})();

function checkResultLength(result) {
    if(result.length > 11) {
        // if result is a non-decimal number, change to scientific notation

        // else if result is a decimal number, round to nearest 9th decimal place
    }
}