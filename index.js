var lootBoxes = 0;
var level = 1;
var experience = 0;

function addToObject(objectName, number) {
    var object = window[objectName];
    object = parseInt(object) + number;
    updateObject(objectName, object);
}

function updateObject(objectName, number) {
    document.getElementById(objectName).innerHTML = number;
    window[objectName] = number;
}

function save() {
    localStorage.setItem("lootBoxes", lootBoxes);
    localStorage.setItem("level", level);
    localStorage.setItem("experience", experience);
}

function addTextToConsole(text) {
    document.getElementById("console").innerHTML += text + "<br>";
}

function load() {
    lootBoxes = localStorage.getItem("lootBoxes");
    level = localStorage.getItem("level");
    experience = localStorage.getItem("experience");
    updateObject("lootBoxes", lootBoxes || 1);
    updateObject("level", level || 1);
    updateObject("experience", experience || 0);
    addTextToConsole("Welcome to Loot Box Simulator!");
    addTextToConsole("Your Level is currently " + level);
    addTextToConsole("You Experience is currently " + experience);
    addTextToConsole("You have " + lootBoxes + " unopened lootboxes.");
}

load();