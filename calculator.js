
//Sets variable to display in display box
let display = document.getElementById('display');

let ACButton = document.getElementById('AC');
ACButton.addEventListener("click", allClear);

//Idea to add event listeners to buttons, will delete and rework this

// let one = document.getElementById('one');
// one.addEventListener("click", pressButton);

// let two = document.getElementById('two');
// two.addEventListener("click", pressButton);

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