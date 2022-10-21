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
    for(let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", e => {
            if(display.textContent != 0) {
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
})();