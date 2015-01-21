function Person () {
    this.stats = {
        name: "name",
        surname: "surname",
        race : "race",
        age: "age",
        faction: "faction"
    };

    this.skills = []; // List of Skill

    this.relations = []; // List of Relation

    this.behaviors = []; // List of Behavior

    this.equipement = []; // List of Equipment;

    this.biography = {
        origin: "Text",
        actions: "text",
        decorations: [], // List of decorations
        punishments: [] // List of Punishments
    }

}