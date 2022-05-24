
//Sets variable to display in display box
let display = document.getElementById('display');

let ACButton = document.getElementById('AC')
ACButton.addEventListener("click", allClear)

//Wipes Display
function allClear(){
    //wipes display to 0
    display.textContent = 0;
}

//Sets Display
function setDisplay(value){
    display.textContent = value;
}