function Faction() {
    this.stats = {
        biography: "text",
        influence: 0, // influence among the world ?
        founds: 0, // money
        leader: {} // Person
    };

    this.loyalties = []; // List of Loyalites

    this.members = []; // List of Person

    this.planets = []; // List of Planet own by the faction

    this.ships = []; // List of Ship own by the faction

    this.stations = []; // List of Station own by the faction

    this.planetResourcesScanning = []; // wat?

    this.clans = []; // List of Clan of the faction
}