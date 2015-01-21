function CrewMember() {
    Person.call(this);

    this.stats.rank = "rank";
    this.function = {}; // a Function
    this.specialization = {}; // a Specialization
    this.effectiveness = 0; // Effectiveness of the officer 0 .. 1
    this.payment = 0; // Payment of the officer 0 .. 1
}

CrewMember.prototype = Person.prototype;
CrewMember.prototype.constructor = CrewMember;