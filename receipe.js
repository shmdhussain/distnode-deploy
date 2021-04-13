module.exports = class Recipe {
    constructor(id) {
        this.id = Number(id);
        this.name = null;
    }
    async hydrate() { // Pretendd DB Lookup
        this.name = `Recipe: # ${ this . id } `;
    }
    toJSON() {
        return {
            id: this.id,
            name: this.name
        };
    }
};
