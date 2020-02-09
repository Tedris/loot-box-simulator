class Player {
    constructor (lootBoxes, level, experience) {
        this.lootBoxes = lootBoxes;
        this.level = level;
        this.experience = experience;
    }
    
    getLootboxes() {
        return this.lootBoxes;
    }

    setLootboxes(lootBoxes) {
        this.lootBoxes = lootBoxes;
    }

    getLevel() {
        return this.level;
    }

    setLevel(level) {
        this.level = level;
    }

    getExperience() {
        return this.experience;
    }

    setExperience(experience) {
        this.experience = experience;
    }

    static fromJSON(jsonString) {
        return Object.assign(new Player(), JSON.parse(jsonString));
    }
}