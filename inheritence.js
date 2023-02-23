class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`)
    }
}
class Instructor extends TeamMember {

    designation = 'web course Instructor'
    team = 'web team'
    location;
    name;
    constructor(name, location) {
        super(name, location)
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }

}

class Developer extends TeamMember {

    designation = 'web course Instructor'
    team = 'web team'
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`pls develop the ${feature}`)
    }
    release(version) {
        console.log(`please release the ${version}`)
    }

}


class JobPlacement extends TeamMember {
    designation = 'Job Placement Commandos'
    team = 'Job Placement'
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    developFeature(feature) {
        console.log(`pls develop the ${feature}`)
    }
    release(version) {
        console.log(`please release the ${version}`)
    }
}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();

const bipasha = new JobPlacement('bipasha', 'kolkata', 'India');
console.log(bipasha);
bipasha.provideFeedback();

const aamir = new Instructor('aamir', 'dhaka', 'bd');
console.log(aamir);

aamir.startSupportSession('9.00');
aamir.createQuiz(60);