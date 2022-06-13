
//Sets variable to display in display box
let display = document.getElementById('display');
let displayValue = 0; //global scope display number
let storedNumber = 0; //global scope storedNumber to hold first number in a calc;
let storedOperator = ""; //global scope stored operator to hold operator until second number is entered.
let afterDecimal = false; //global scope toggle for decimal switch.
let decimalDivider = 10; //global scope setting to determine places after decimal

let ACButton = document.getElementById('AC');
ACButton.addEventListener("click", allClear);

let zero = document.getElementById('zero');
zero.addEventListener("click", () => pressButton(0));

let one = document.getElementById('one');
one.addEventListener("click", () => pressButton(1));

let two = document.getElementById('two');
two.addEventListener("click", () => pressButton(2));

let three = document.getElementById('three');
three.addEventListener("click", () => pressButton(3));

let four = document.getElementById('four');
four.addEventListener("click", () => pressButton(4));

let five = document.getElementById('five');
five.addEventListener("click", () => pressButton(5));

let six = document.getElementById('six');
six.addEventListener("click", () => pressButton(6));

let seven = document.getElementById('seven');
seven.addEventListener("click", () => pressButton(7));

let eight = document.getElementById('eight');
eight.addEventListener("click", () => pressButton(8));

let nine = document.getElementById('nine');
nine.addEventListener("click", () => pressButton(9));

let divideButton = document.getElementById('divide');
divideButton.addEventListener("click", () => pressButton("/"));

let multiplyButton = document.getElementById('multiply');
multiplyButton.addEventListener("click", () => pressButton("*"));

let subtractButton = document.getElementById('subtract');
subtractButton.addEventListener("click", () => pressButton("-"));

let addButton = document.getElementById('add');
addButton.addEventListener("click", () => pressButton("+"));

let equalsButton = document.getElementById('equals');
equalsButton.addEventListener("click", () => equals(displayValue));

let point = document.getElementById('point');
point.addEventListener("click", () => pressButton("."))

//takes input and adds it to displayValue
function pressButton(button){
    //need to develop the rest ot this logic to sort
    if(isNumber(button)){ // if button is a number code here
        //for the first number just sets it as the button value
        if (displayValue == 0 && afterDecimal == false){ 
            //if for when display is empty and decimal is not clicked
            displayValue = button;
        } else if (displayValue == 0 && afterDecimal == true) { 
            // if nothing is entered, but the decimal is clicked
            displayValue = button / decimalDivider; // divides by 10 to start with
            decimalDivider = decimalDivider * 10; // multiplies the decimal by 10
        } else if (afterDecimal == true) { 
            //loop if decimal is clicked
            displayValue = displayValue + (button / decimalDivider)
            decimalDivider = decimalDivider * 10; //so that subsequent numbers add on new number at end

        } else{ //loop for when display already has a digit
            displayValue = displayValue * 10 + button; 
            //add the number*10 to the previous number, making the way base 10 numbers work explicit.
        }
    setDisplay(displayValue); //sets display based on displayValue determined in above logical statements

    } else if (isSymbol(button)){
        //if button pressed is a symbol
        //store existing Number, store the operator, if 
        storedNumber = displayValue; //stores the display value
        displayValue = 0; //resets the displayValue to zero to allow new input
        setDisplay(button); //displays the operator
        //store operator, which is just the button in this function- which is a string value
        storedOperator = button;
        resetDecimalDivider();

    } else if (button === "."){
        //If . button is pressed toggles state, and if . is set to active, then next number is divided by 10 and added.
        afterDecimal = true;
    }
}

//Wipes Display
function allClear(){
    //zero's displayValue
    clearStoredValue();
    //sets display to now zero'd displayValue
    setDisplay(displayValue);
}

//clears the stored value
function clearStoredValue() {
    displayValue = 0;
    storedNumber = 0;
    resetDecimalDivider();
}

//Sets Display after a button is pressed
function setDisplay(displayValue){
    display.textContent = displayValue;
}

function equals(){
    //function for thee equal sign. takes the display, identifies the function to use
    secondNumber = displayValue;

    switch (storedOperator) { //switch case, calls appropriate function depending on the operator clicked
        case "+":
            displayValue = operate(add, storedNumber, secondNumber);
            break;
        case "-":
            displayValue = operate(subtract, storedNumber, secondNumber);
            break;
        case "*":
            displayValue = operate(multiply, storedNumber, secondNumber);
            break;
        case "/":
            displayValue = operate(divide, storedNumber, secondNumber);
            break;
        default:
            break;
            }
    setDisplay(displayValue);
    afterDecimal = false;
    resetDecimalDivider();
}

//Takes an operator and 2 numbers and then calls one of the arithmetic functions on the numbers.
function operate(operator, x, y) {
    return operator(x, y);
}

//arithmetic functions
function add(x, y) {return x + y;}
function subtract(x, y) {return x - y;}
function multiply(x, y) {return x * y;}
function divide(x, y) {return x / y;}


//function to detect if input is one of four symbols
function isSymbol(symbol){
    if (symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/"  ){
        return true;
    } else return false;
}

//check the type and returns true if passed a number
function isNumber(num) {
 if (typeof num == "number"){
     return true
 } else return false
}

function resetDecimalDivider() {
    decimalDivider = 10;
}