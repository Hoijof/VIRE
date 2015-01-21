
function Ship() {

    this.stats = {
        name: "nameOfShip",
        type: "typeOfShip",
        maxLength: "maxLengthOfShip",
        maxWidth: "maxWithOfShip",
        emptyWeight: "weight when empty",
        maxWeight: "max weight",
        qualityRatio: "Quality of the ship 0..1",
        shipSchema: { // An object ship schema (It has all the parts of a ship and a boolean saying if they're available or not for this ship.

        }
    };

    this.places = { // Define the places
        crewPlaces: [], // List of CrewPlaces
        personalPlaces: [] // List of more advanced places
    };

    this.components = {
        installedComponents: [] // List of installed components (SHIELDS, WEAPONS, COMMUNICATION SYSTEMS, HYPERJUMP SYSTEMS, ENGINES, RADARS, FUEL TANKS)
    };

    this.crew = {
        advancedCrewMembers: [], // a list of advanced crew members
        basicCrewMembers: [] // a list of basic crew members
    }
}

