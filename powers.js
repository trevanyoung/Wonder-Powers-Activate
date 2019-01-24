

function flightHandlerFunction () {
    document.getElementById("flight").classList.remove("disabled");
    document.getElementById("flight").classList.add("enabled");
}

function mindReadingFunction () {
    document.getElementById("mindreading").classList.remove("disabled");
    document.getElementById("mindreading").classList.add("enabled");
}

function xRayFunction () {
    document.getElementById("xray").classList.remove("disabled");
    document.getElementById("xray").classList.add("enabled");
}

function enableAllFunctions () {
    //all classes with "power" in class are stored in the variable newPowers
    const newPowers = document.querySelectorAll(".power");
    //for loop while loop through the classes
    for (i = 0; i < newPowers.length; i++){
    //newPowers stored in variable currentPower
    const currentPower = newPowers[i]
    currentPower.classList.remove("disabled");
    currentPower.classList.add("enabled");
    }
}

function disableAllFunctions () {
    const newPowers = document.querySelectorAll(".power");
    for (i = 0; i < newPowers.length; i++){
    const currentPower = newPowers[i]
    currentPower.classList.remove("enabled");
    currentPower.classList.add("disabled");
    }
}
        
