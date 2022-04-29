//To do:
//Add support for +/- sign
//Add mathematical or syntax errors 

//variables
let input = "";
let output = "";
let answer = "";

const addBtn = document.getElementById("add");
const substractBtn = document.getElementById("substract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const powerBtn = document.getElementById("power");
const ansBtn = document.getElementById("answer");
const sqrtBtn = document.getElementById("sqrt");
const factorialBtn = document.getElementById("factorial")

const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const zeroBtn = document.getElementById("zero");

const equalsBtn = document.getElementById("equals");
const allClearBtn = document.getElementById("allClear");
const deleteBtn = document.getElementById("delete");
const pointBtn = document.getElementById("point");

const inputField = document.getElementById("input");
const outputField = document.getElementById("output");

//wiring of all the buttons

function setInput(setInp) {
    input += setInp; inputField.textContent = input; output = ""; outputField.textContent = output;
};

addBtn.addEventListener("click", () => setInput("+"));
substractBtn.addEventListener("click", () => setInput("-"));
multiplyBtn.addEventListener("click", () => setInput("*"));
divideBtn.addEventListener("click", () => setInput("/"));
powerBtn.addEventListener("click", () => setInput("^"));
ansBtn.addEventListener("click", () => setInput(answer));
sqrtBtn.addEventListener("click", () => setInput("√"));
factorialBtn.addEventListener("click", () => setInput("!"));

oneBtn.addEventListener("click", () => setInput("1"));
twoBtn.addEventListener("click", () => setInput("2"));
threeBtn.addEventListener("click", () => setInput("3"));
fourBtn.addEventListener("click", () => setInput("4"));
fiveBtn.addEventListener("click", () => setInput("5"));
sixBtn.addEventListener("click", () => setInput("6"));
sevenBtn.addEventListener("click", () => setInput("7"));
eightBtn.addEventListener("click", () => setInput("8"));
nineBtn.addEventListener("click", () => setInput("9"));
zeroBtn.addEventListener("click", () => setInput("0"));

pointBtn.addEventListener("click", () => {setInput(".")});

allClearBtn.addEventListener("click", () => {input = ""; inputField.textContent = input; output = ""; outputField.textContent = output});
deleteBtn.addEventListener("click", () => {
    input = input.substring(0,input.length - 1);
    inputField.textContent = input;
    output = ""; 
    outputField.textContent = output;
});

equalsBtn.addEventListener("click", () => {
    calculate(input);
})

//buttons for keyboard support

document.addEventListener("keydown", function (event) {
    if (event.key === "1") {
        setInput("1");
    }
    if (event.key === "2") {
        setInput("2");
    }
    if (event.key === "3") {
        setInput("3");
    }
    if (event.key === "4") {
        setInput("4");
    }
    if (event.key === "5") {
        setInput("5");
    }
    if (event.key === "6") {
        setInput("6");
    }
    if (event.key === "7") {
        setInput("7");
    }
    if (event.key === "8") {
        setInput("8");
    }
    if (event.key === "9") {
        setInput("9");
    }
    if (event.key === "0") {
        setInput("0");
    }
    if (event.key === "+") {
        setInput("+");
    }
    if (event.key === "-") {
        setInput("-");
    }
    if (event.key === "*") {
        setInput("*");
    }
    if (event.key === "/" ) {
        setInput("/");
    }
    if (event.key === "^") {
        setInput("^");
    }
    if (event.key === "!") {
        setInput("!");
    }
    if (event.key === "." || event.key === ",") {
        setInput(".");
    }
    if (event.key === "Enter") {
        calculate(input);
    }
    if (event.key === "Backspace") {
        input = input.substring(0,input.length - 1);
        inputField.textContent = input;
        output = ""; 
        outputField.textContent = output;
    }
    if (event.key === "Enter" && event.key === "Control") {
        input = ""; inputField.textContent = input; output = ""; outputField.textContent = output
    }
})

//main function calcualte

function calculate(input) {
    const inputArray = input.split("");
    for (let i = inputArray.length - 1; i >= 0; i-- ) {
        if (isNaN(inputArray[i]) === false && isNaN(inputArray[i-1]) === false) {
            inputArray[i-1] = inputArray[i-1] + inputArray[i];
            inputArray.splice(i, 1);
        }
        else if (inputArray[i-1] === "." && isNaN(inputArray[i]) === false && isNaN(inputArray[i-2]) === false) {
            inputArray[i-2] = inputArray[i-2] + "." + inputArray[i];
            inputArray.splice(i-1, 2);
        }
        else if (inputArray[i-1] === "√" && isNaN(inputArray[i]) === false) {
            inputArray[i-1] = Math.sqrt(inputArray[i]);
            inputArray.splice(i, 1);
        }
        else if (inputArray[i] === "!" && isNaN(inputArray[i-1]) === false ) {
            inputArray[i-1] = factorial(inputArray[i-1]);
            inputArray.splice(i, 1);
        }
    };
    while (inputArray[2] != undefined) {
        inputArray[0] = operate(Number(inputArray[0]),inputArray[1],Number(inputArray[2]));
        inputArray.splice(2,1);
        inputArray.splice(1,1);
    };
    output = inputArray[0];
    answer = output;
    outputField.textContent = output;
}

//operating functions

function add(num1,num2) {
    return num1+num2;
};

function substract(num1,num2) {
    return num1-num2;
};

function multiply(num1,num2) {
    return num1*num2;
};

function divide(num1,num2) {
    if (num2 === 0) {
        return "Don't try this you ****!"
    }  
    else {return num1/num2};
};

function power(num1,num2) {
    return num1**num2;
};

function factorial(num) {
    let result = 1;
    for (let i = 1; i<=num; i++ ) {
        result *= i;
    };
    return result;
};

function operate(num1,operator,num2) {
    if (operator === "+") {
        return add(num1,num2);
    }
    else if (operator === "-") {
        return substract(num1,num2);
    }
    else if (operator === "*") {
        return multiply(num1,num2);
    }
    else if (operator === "/") {
        return divide(num1,num2);
    }
    else if (operator === "^") {
        return power(num1,num2);
    }
}
