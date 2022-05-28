
//Sets variable to display in display box
let display = document.getElementById('display');

let ACButton = document.getElementById('AC');
ACButton.addEventListener("click", allClear);


//list of all divs
let buttonList = document.querySelectorAll('div.button');
//list of values to assign to divs
let divListValues = ["Display", "AC", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="]
//variable names to assign to each iteration over the divs
let buttonVariableName = ["displayButton", "ACButton", "divide", "seven", "eight", "nine", "multiply", 
                          "four", "five", "six", "subtract", "one", "two", "three", "addition", 
                          "zero", "point", "equals"]
//iterate over the divs to assign variable name and then variable value
for(i=0; i<=buttonList.length; i++){
    //assigns each div a property value from array
    //buttonList[i].divListValues = divListValues[i];
    //buttonVariableName[i].addEventListener("click", () => pressButton(divListValues[i]))
}

//let one = document.getElementById('one');
//one.addEventListener("click", () => pressButton(1));

//Wipes Display
function allClear(){
    //wipes display to 0
    display.textContent = 0;
}

//Sets Display
function setDisplay(value){
    display.textContent = value;
}

function pressButton(button){
    display.textContent = button;
    console.log(button);
}

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