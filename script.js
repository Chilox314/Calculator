//variables
let input;

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

//wiring of all the buttons

addBtn.addEventListener("click", () => inputField.textContent += "+");
substractBtn.addEventListener("click", () => inputField.textContent += "-");
multiplyBtn.addEventListener("click", () => inputField.textContent += "*");
divideBtn.addEventListener("click", () => inputField.textContent += "/");
powerBtn.addEventListener("click", () => inputField.textContent += "^");

oneBtn.addEventListener("click", () => inputField.textContent += "1");
twoBtn.addEventListener("click", () => inputField.textContent += "2");
threeBtn.addEventListener("click", () => inputField.textContent += "3");
fourBtn.addEventListener("click", () => inputField.textContent += "4");
fiveBtn.addEventListener("click", () => inputField.textContent += "5");
sixBtn.addEventListener("click", () => inputField.textContent += "6");
sevenBtn.addEventListener("click", () => inputField.textContent += "7");
eightBtn.addEventListener("click", () => inputField.textContent += "8");
nineBtn.addEventListener("click", () => inputField.textContent += "9");
zeroBtn.addEventListener("click", () => inputField.textContent += "0");

allClearBtn.addEventListener("click", () => inputField.textContent = "");
deleteBtn.addEventListener("click", () => {
    let inputFieldText = inputField.textContent;
});

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
    return num1/num2;
};

function power(num1,num2) {
    return num1**num2;
};

function operate(operator,num1,num2) {
    if (operator === "+") {
        add(num1,num2);
    }
    else if (operator === "-") {
        substract(num1,num2);
    }
    else if (operator === "*") {
        multiply(num1,num2);
    }
    else if (operator === "/") {
        divide(num1,num2);
    }
    else if (operator === "**") {
        power(num1,num2)
    }
}