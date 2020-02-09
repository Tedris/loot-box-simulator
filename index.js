let player = new Player(1, 1, 0);

function addToObject(objectName, number) {
    var object = window[objectName];
    object = parseInt(object) + number;
    updateObject(objectName, object);
}

function updateObject(objectName, number) {
    document.getElementById(objectName).innerHTML = number;
    window[objectName] = number;
}

function addToLootboxes(number) {
    addToObject("lootBoxes", number);
    player.setLootboxes(parseInt(player.getLootboxes()) + number);
}

function addToExperience(number) {
    addToObject("experience", number);
    player.setExperience(parseInt(player.getExperience()) + number);
}

function updateLootboxes(number) {
    updateObject("lootBoxes", number);
}

function updateLevel(number) {
    updateObject("level", number);
}

function updateExperience(number) {
    updateObject("experience", number);
}

function save() {
    localStorage.setItem("player", JSON.stringify(player));
}

function addTextToConsole(text) {
    document.getElementById("console").innerHTML += text + "<br>";
}

function updateFromPlayerData(player) {
    updateLootboxes(player.getLootboxes() || 1);
    updateLevel(player.getLevel() || 1);
    updateExperience(player.getExperience() || 0);
}

function load() {
    try {
        player = Player.fromJSON(localStorage.getItem("player"));
    }
    catch(error) {
        console.error(error);
    }
    if (!player) {
        player = new Player(1, 1, 0);
    }
    updateFromPlayerData(player);
    addTextToConsole("Welcome to Loot Box Simulator!");
    addTextToConsole("Your Level is currently " + player.getLevel());
    addTextToConsole("You Experience is currently " + player.getExperience());
    addTextToConsole("You have " + player.getLootboxes() + " unopened lootboxes.");
}

load();