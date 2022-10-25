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
        case "*":
            return multiply(x,y);
        case "/":
            return divide(x,y);
        default:
            return undefined;
    }
}

(function () {
    let numbers = Array.from(document.querySelectorAll(".number"));
    let display = document.querySelector("#display");
    display.textContent = "0";
    for(let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", e => {
            if(display.textContent != 0 || display.textContent.includes(".")) {
                let currentNum = display.textContent;
                currentNum += numbers[i].textContent;
                display.textContent = currentNum;
            } else {
                display.textContent = numbers[i].textContent;
            }
        });
    }

    let dot = document.querySelector("#decimal");
    dot.addEventListener("click", event => {
        let displayText = display.textContent;
        if(!displayText.includes(".")) {
            display.textContent = displayText.concat(".");
        }
    });

    let clear = document.querySelector("#clear");
    clear.addEventListener("click", event => {
        display.textContent = 0;
    });

    let upperDisplay = document.querySelector("#upperDisplay");

    let operators = document.querySelectorAll(".operator");
    operators.forEach(operator => {
        operator.addEventListener("click", e => {
            // If upperDisplay empty, add current value of display and the operator clicked
            // to upperDisplay and set display to 0. 
            // If not empty, change last operator in upperDisplay to one just clicked.

            // Once a second number has been entered, the next operator should 
            // automatically calculate and overwrite the numbers and operator in upperDisplay.

            let firstVariable = document.querySelector("#x");
            let activeOperator = document.querySelector("#activeOperator");

            if(display.textContent != "0") {
                console.log("text content is not 0");
                if(firstVariable == NaN) {
                    console.log("firstVariable is empty");
                    firstVariable.textContent = display.textContent + " ";
                    activeOperator.textContent = operator.textContent;
                
                    // if(upperDisplay.textContent != "") {
                    //     let upperDisplayContent = upperDisplay.textContent.split(" ");
                    //     if(upperDisplayContent[upperDisplayContent.length - 1].match("\D")) {
    
                    //     } else {
                            
                    //     }
                    // } else {
                    //     upperDisplay.textContent = display.textContent + " " + 
                    //                                 operator.textContent + " ";
                    // }
                    display.textContent = 0;
                } 
            }
        });
    });

    // When the + button is pressed, need to store the value in
    // the display currently. The next number entered should overwrite
    // what was already in the display, and when another operator
    // button is pressed, add the two values together and display them

    // Add super script (another row of text) in the display, above the
    // currently active value along with whatever operator was entered.
    // Operator can change if user presses another operator button before
    // the next number. After, we can 0 out the active number.


})();