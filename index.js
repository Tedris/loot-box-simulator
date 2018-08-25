var lootBoxElementById = document.getElementById("lootBoxes");

var lootBoxes = 0;

function openLootBox(numberOpened) {
    lootBoxes = parseFloat(lootBoxElementById.innerHTML);
    lootBoxes = lootBoxes + numberOpened;
    updateLootBoxes(lootBoxes);
}

function updateLootBoxes(lootBoxNum) {
    lootBoxElementById.innerHTML = lootBoxNum;
}

function save() {
    localStorage.setItem("lootBoxes", lootBoxes);
}

function load() {
    lootBoxes = localStorage.getItem("lootBoxes");
    updateLootBoxes(lootBoxes);
}

load();