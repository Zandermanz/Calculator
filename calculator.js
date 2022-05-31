
//Sets variable to display in display box
let display = document.getElementById('display');
let displayValue = 0;

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
    if(isNumber(button)){
        // if button is a number code here
        //for the first number just sets it as the button value
        if (displayValue == 0){ //if for when display is empty
            displayValue = button;
            setDisplay(button);
        } else{ //loop for when display already has a digit
            displayValue = displayValue * 10 + button; //add the number*10 to the previous number, making base 10 explicit, 
                                                       //we just don't think about it
            setDisplay(displayValue);
        }

    } else if (isSymbol(button)){
        //if button pressed is a symbol
        //store existing Number, store the operator
    }


    //console.log(button);
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
}


//Sets Display after a button is pressed
function setDisplay(displayValue){
    display.textContent = displayValue;
}

function equals(displayValue){
    //idea, when equals is hit, takes the display, identifies the function to use in what I think would be a string
    //may come back to this one, but this is the function for thee equal sign
    setDisplay();
}

//arithmetic functions
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

//an takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, x, y) {
    return operator(x, y);
}

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

//idea put numbers back to number type when symbol button is pressed, store the first number, record the symbol, and make new variable for next number. 
// this way it keeps the values separate from the operators. Use isSymbol to test on input to determine when to store first number

