lootBoxElementById = document.getElementById("lootBoxes");

function openLootBox(numberOpened) {
    var lootBoxes = parseFloat(lootBoxElementById.innerHTML);
    lootBoxes = lootBoxes + numberOpened;
    updateLootBoxes(lootBoxes);
}

function updateLootBoxes(lootBoxNum) {
    lootBoxElementById.innerHTML = lootBoxNum;
}