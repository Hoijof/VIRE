function Planet() {
    this.stats = {
        name: "",
        age: 0,
        biography: {
            history: "",
            actions: "",
            environmentEvents: {
                natural: "",
                lifeAlterations: "",
                satelliteAlterations: "",
                orbitChanges: ""
            },
            nonNaturalEvents: {
                battles: "",
                diplomaticAgreements: "",
                planetaryDecisions: "",
                accidents: ""
            }
        }
    };

    this.physics = {
        size: 0,
        mass: 0,
        atmosphere: {}, // Atmosphere
        satellites: [], // List of Satellites
        orbitType: "", // orbit type?
        gravityEffectZone: 0,
        resourcesRatio: 0.3 //0 ... 1
    };

    this.cities = []; // List of City

    this.planetLife = {
        creatures: [], // List of Creature
        plants: [], // List of Plant
        biomes: [] // List of Biome
    };


}