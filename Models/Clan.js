function Clan() {
    this.stats = {
        biography: "texxt",
        leader: {}, // Person
        planetResourcesScanning: {}, // wat?
        founds: 0 // money
    };

    this.members = []; // List of Person

    this.loyalties = []; // List of Loyalty

    this.planets = []; // List of Planet

    this.stations = []; // List of Station

}