let buttonOnePressed = false;
let buttonTwoPressed = false;
let buttonThreePressed = false;
let buttonFourPressed = false;
updateUI();

// BUTTON EVENTS (fixed: no parentheses)
document.getElementById("chalOne").addEventListener("click", changeVarOne);
document.getElementById("chalTwo").addEventListener("click", changeVarTwo);
document.getElementById("chalThree").addEventListener("click", changeVarThree);
document.getElementById("killSwitchButton").addEventListener("click", changeVarFour);


// MAIN CONTROLLER FUNCTION
function updateUI() {

    // Challenge One
    if (buttonOnePressed) {
        displayChalOne();
    } else {
        hideChalOne();
    }

    // Challenge Two
    if (buttonTwoPressed) {
        displayChalTwo();
    } else {
        hideChalTwo();
    }

    // Challenge Three
    if (buttonThreePressed) {
        displayChalThree();
    } else {
        hideChalThree();
    }

    // Kill Switch
    if (buttonFourPressed) {
        buttonFourPressed = false;

        buttonOnePressed = false;
        buttonTwoPressed = false;
        buttonThreePressed = false;

        hideChalOne();
        hideChalTwo();
        hideChalThree();
    }
}


// SHOW / HIDE FUNCTIONS
function displayChalOne() {
    document.getElementById("chalOneContent").style.display = "block";
}

function hideChalOne() {
    document.getElementById("chalOneContent").style.display = "none";
}

function displayChalTwo() {
    document.getElementById("chalTwoContent").style.display = "block";
}

function hideChalTwo() {
    document.getElementById("chalTwoContent").style.display = "none";
}

function displayChalThree() {
    document.getElementById("chalThreeContent").style.display = "block";
}

function hideChalThree() {
    document.getElementById("chalThreeContent").style.display = "none";
}


// VARIABLE CHANGES (fixed logic + calls updateUI)
function changeVarOne() {
    buttonOnePressed = true;
    buttonTwoPressed = false;
    buttonThreePressed = false;
    updateUI();
}

function changeVarTwo() {
    buttonOnePressed = false;
    buttonTwoPressed = true;
    buttonThreePressed = false;
    updateUI();
}

function changeVarThree() {
    buttonOnePressed = false;
    buttonTwoPressed = false;
    buttonThreePressed = true;
    updateUI();
}

function changeVarFour() {
    buttonFourPressed = true;
    updateUI();
}