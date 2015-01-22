function Location() {
    this.stats = {
        name: "",
        description: ""
    };

    this.crewAssigment = []; // List of CrewMember

    this.materials = []; // List of {quantity, Material}

    this.position = []; // Position of the Location

    this.passiveEffects = []; // List of Effects
}