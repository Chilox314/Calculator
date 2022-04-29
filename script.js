//To do:
//Add support for +/- sign
//Add support for Ans
//Add factorial
//Add support for floating points
//Add mathematical or syntax errors 
//Add keyboard support
//Add sqrt() support

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

addBtn.addEventListener("click", () => {input += "+"; inputField.textContent = input; output = ""; outputField.textContent = output});
substractBtn.addEventListener("click", () => {input += "-"; inputField.textContent = input; output = ""; outputField.textContent = output});
multiplyBtn.addEventListener("click", () => {input += "*"; inputField.textContent = input; output = ""; outputField.textContent = output});
divideBtn.addEventListener("click", () => {input += "/"; inputField.textContent = input; output = ""; outputField.textContent = output});
powerBtn.addEventListener("click", () => {input += "^"; inputField.textContent = input; output = ""; outputField.textContent = output});
ansBtn.addEventListener("click", () => {input += answer; inputField.textContent = input; output = ""; outputField.textContent = output})

oneBtn.addEventListener("click", () => {input += 1; inputField.textContent = input; output = ""; outputField.textContent = output});
twoBtn.addEventListener("click", () => {input += 2; inputField.textContent = input; output = ""; outputField.textContent = output});
threeBtn.addEventListener("click", () => {input += 3; inputField.textContent = input; output = ""; outputField.textContent = output});
fourBtn.addEventListener("click", () => {input += 4; inputField.textContent = input; output = ""; outputField.textContent = output});
fiveBtn.addEventListener("click", () => {input += 5; inputField.textContent = input; output = ""; outputField.textContent = output});
sixBtn.addEventListener("click", () => {input += 6; inputField.textContent = input; output = ""; outputField.textContent = output});
sevenBtn.addEventListener("click", () => {input += 7; inputField.textContent = input; output = ""; outputField.textContent = output});
eightBtn.addEventListener("click", () => {input += 8; inputField.textContent = input; output = ""; outputField.textContent = output});
nineBtn.addEventListener("click", () => {input += 9; inputField.textContent = input; output = ""; outputField.textContent = output});
zeroBtn.addEventListener("click", () => {input += 0; inputField.textContent = input; output = ""; outputField.textContent = output});

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
