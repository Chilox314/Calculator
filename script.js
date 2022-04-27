//variables
let input = "";
let output = "";

const addBtn = document.getElementById("add");
const substractBtn = document.getElementById("substract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const powerBtn = document.getElementById("power");

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

addBtn.addEventListener("click", () => {input += "+"; inputField.textContent = input});
substractBtn.addEventListener("click", () => {input += "-"; inputField.textContent = input});
multiplyBtn.addEventListener("click", () => {input += "*"; inputField.textContent = input});
divideBtn.addEventListener("click", () => {input += "/"; inputField.textContent = input});
powerBtn.addEventListener("click", () => {input += "^"; inputField.textContent = input});

oneBtn.addEventListener("click", () => {input += 1; inputField.textContent = input});
twoBtn.addEventListener("click", () => {input += 2; inputField.textContent = input});
threeBtn.addEventListener("click", () => {input += 3; inputField.textContent = input});
fourBtn.addEventListener("click", () => {input += 4; inputField.textContent = input});
fiveBtn.addEventListener("click", () => {input += 5; inputField.textContent = input});
sixBtn.addEventListener("click", () => {input += 6; inputField.textContent = input});
sevenBtn.addEventListener("click", () => {input += 7; inputField.textContent = input});
eightBtn.addEventListener("click", () => {input += 8; inputField.textContent = input});
nineBtn.addEventListener("click", () => {input += 9; inputField.textContent = input});
zeroBtn.addEventListener("click", () => {input += 0; inputField.textContent = input});

allClearBtn.addEventListener("click", () => {input = ""; inputField.textContent = input; output = ""; outputField.textContent = output});
deleteBtn.addEventListener("click", () => {
    input = input.substring(0,input.length - 1);
    inputField.textContent = input;
});

equalsBtn.addEventListener("click", () => {
    calculate(input);
    input = "";
})

//main function calcualte

function calculate(input) {
    const inputArray = input.split("");
    console.log(inputArray)
    for (let i = inputArray.length - 1; i >= 0; i-- ) {
        if (isNaN(inputArray[i]) === false && isNaN(inputArray[i-1]) === false) {
            inputArray[i-1] = inputArray[i-1] + inputArray[i];
            inputArray.splice(i, 1);
        }
    };
    while (inputArray[2] != undefined) {
        inputArray[0] = operate(Number(inputArray[0]),inputArray[1],Number(inputArray[2]));
        inputArray.splice(2,1);
        inputArray.splice(1,1);
        console.log(inputArray)
    };
    output = inputArray[0];
    outputField.textContent = "=" + output;
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
