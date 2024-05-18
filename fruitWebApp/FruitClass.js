class FruitClass {
    #name
    #family
    #nutritions

    constructor(name, family, nutritions) {
        this.#name = name;
        this.#family = family;
        this.#nutritions = nutritions; 
    }

    get name() {
        return this.#name;
    }

    get family() {
        return this.#family;
    }

    get nutritions() {
        var strNutrition = `calories: ${this.#nutritions.calories}\nfat: ${this.#nutritions.fat}\nsugar: ${this.#nutritions.sugar}\ncarbohydrates: ${this.#nutritions.carbohydrates},\nprotein: ${this.#nutritions.protein}`
        return strNutrition;
    }

    set name(newName) {
        this.#name = newName;
    }

    set family(newFamily) {
        this.#family = newFamily;
    }

    set nutritions(newNutritions) {
        this.#nutritions = newNutritions;
    }
}