var decimalPresent = 0;
var num1 = 0;
var num2 = 0;
var clearField = 0;
var operatorSelected = "";
window.addEventListener("keypress", dealWithKeyboard, false);

function dealWithKeyboard(k) {
    switch (k.charCode) {
        case "0".charCodeAt(0):
            insertZero();
            break;

        case "1".charCodeAt(0):
            insertNumber(1);
            break;

        case "2".charCodeAt(0):
            insertNumber(2);
            break;

        case "3".charCodeAt(0):
            insertNumber(3);
            break;

        case "4".charCodeAt(0):
            insertNumber(4);
            break;

        case "5".charCodeAt(0):
            insertNumber(5);
            break;

        case "6".charCodeAt(0):
            insertNumber(6);
            break;

        case "7".charCodeAt(0):
            insertNumber(7);
            break;

        case "8".charCodeAt(0):
            insertNumber(8);
            break;

        case "9".charCodeAt(0):
            insertNumber(9);
            break;

        case ".".charCodeAt(0):
            decimal();
            break;

        case "+".charCodeAt(0):
            addition();
            break;

        case "-".charCodeAt(0):
            subtraction();
            break;

        case "*".charCodeAt(0):
            multiplication();
            break;

        case "/".charCodeAt(0):
            division();
            break;

        case "=".charCodeAt(0):
            calculate();
            break;

        case "c".charCodeAt(0):
            cellClear();
            break;

        case "a".charCodeAt(0):
            allClear();
            break;
    }
}


function insertNumber(number) {
    console.debug("Inserting Number: " + number);
    var displayField = document.getElementById('Display');

    //Clears the field if an operator (like +,-,/,x) has been pressed
    if (clearField == 1) {
        displayField.innerText = "";
        clearField = 0;
    }

    //Clears inital value from when the element with id 'display' is still in its inital state
    if (displayField.innerText == "0.") {
        displayField.innerText = "";
    }

    document.getElementById('Display').innerText = String(displayField.innerText + number);
}

function decimal() {
    decimalPresent = 1;
    console.debug("Decimal");
    var displayField = document.getElementById('Display');

    document.getElementById('Display').innerText += String(".");
}

function insertZero() {
    var displayField = document.getElementById('Display');

    if (displayField.innerText == "0.") {
        return;
    }
    else if (clearField == 1) {
        displayField.innerText = "0";
    }
    else {
        displayField.innerText += "0";
    }
}

function insertDoubleZero() {
    var displayField = document.getElementById('Display');

    if (displayField.innerText == "0.") {
        return;
    }
    else {
        displayField.innerText += "00";
    }
}

function addition() {
    console.debug("Addition");
    num1 = document.getElementById('Display').innerText;
    clearField = 1;
    operatorSelected = "+";

    //TODO: Maybe change style of selected operator like colour
}

function subtraction() {
    console.debug("subtraction");
    num1 = document.getElementById('Display').innerText;
    clearField = 1;
    operatorSelected = "-";
}

function division() {
    console.debug("division");
    num1 = document.getElementById('Display').innerText;
    clearField = 1;
    operatorSelected = "/";
}

function multiplication() {
    console.debug("multiplication");
    num1 = document.getElementById('Display').innerText;
    clearField = 1;
    operatorSelected = "*";
}

function calculate() {
    var displayField = document.getElementById('Display');

    num2 = displayField.innerText;

    switch (operatorSelected) {
        case "+":
            displayField.innerText = Number(num1) + Number(num2);
            break;
        case "-":
            displayField.innerText = Number(num1) - Number(num2);
            break;
        case "*":
            displayField.innerText = Number(num1) * Number(num2);
            break;
        case "/":
            displayField.innerText = Number(num1) / Number(num2);
            break;
    }

    clearField = 1;
}

function negativePositiveSwitch() {
    var displayField = document.getElementById('Display');

    if (displayField.innerText.charAt(0) != "-") {
        displayField.innerText = "-" + displayField.innerText;
    }
    else if(displayField.innerText.charAt(0) == "-"){
        displayField.innerText *= displayField.innerText;
    }
}

function allClear() {
    console.debug("ALL CLEAR");
    num1 = 0;
    num2 = 0;
    document.getElementById('Display').innerText = "0.";
}

function cellClear() {
    console.debug("CLEAR");
    document.getElementById('Display').innerText = "0.";
}
