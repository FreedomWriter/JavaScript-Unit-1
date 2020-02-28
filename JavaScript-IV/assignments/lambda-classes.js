// CODE here for your Lambda Classes

class Person {
    constructor(personAttr){
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
    }//constructor

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }//speak

}//Person

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }//constructor

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }//demo

    grade(Student, subject) {
        console.log(`${Student.name} receives a perfect score on ${subject}.`);
    }//grade

    scoreTests(Student) {
        function testResults(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        } // function total score
        let thisGrade = testResults(-1, 20);
        Student.score = Student.score + thisGrade;
        console.log(`${Student.name} scored ${thisGrade} on this assesment`);
    }//scoreTests

}//Person

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.score = studentAttr.score;
    }//constructor

    listSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }//listSubjects

    prAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }//prAsssignment

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }//sprint

    graduate() {
        this.score >= 70 ? console.log(`Congradulations ${this.name}, you are an offical graduate!`) : console.log(`You're not quite there yet ${this.name}, but keep working and you will be ready soon!`)
    }

}//Student

class ProjectManagers extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }//constructor

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(Student, subject) {
        console.log(`${this.name} debugs ${Student.name}'s code on ${subject}.`);

    }
}//ProjectManagers

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    specialty: 'Front-end',
    favLanguage: 'CSS',
    catchPhrase: `Don't forget the homies`
  });

const betty = new Instructor({
    name: 'Betty',
    location: 'Rockford',
    age: 27,
    specialty: 'Back-End',
    favLanguage: 'Python',
    catchPhrase: `I prefer my rocks in my rings`
});

const wilma = new ProjectManagers({
    name: 'Wilma',
    location: 'Rockington',
    age: 35,
    specialty: 'Back-end',
    favLanguage: 'JavaScript',
    catchPhrase: `Home over homies`,
    gradClassName: 'ptPreIceAge',
    favInstructor: `Fred`
});

const barney = new ProjectManagers({
    name: 'Barney',
    location: 'Boulder',
    age: 55,
    specialty: 'Slack',
    favLanguage: 'English',
    catchPhrase: `Fake it til you make it`,
    gradClassName: 'ptPreIce',
    favInstructor: `Betty`
});

const pebbles = new Student({
    name: 'Pebbles',
    location: 'Flintstonia',
    age: 39,
    previousBackground: 'Drifter',
    className: `ptMezzazoic`,
    favSubjects: ['JavaScript', 'CSS', 'Memes'],
    score: 60
});

const bambam = new Student({
    name: 'Bam Bam',
    location: 'Quarrytown',
    age: 29,
    previousBackground: 'Rock Breaker',
    className: `ftMezzazoic`,
    favSubjects: ['HTML', 'Less', 'React'],
    score: 55
});

console.log(fred);
console.log(betty);
console.log(wilma);
console.log(barney);
console.log(pebbles);
console.log(bambam);

fred.speak();
betty.speak();
wilma.speak();
barney.speak();
pebbles.speak();
bambam.speak();

fred.demo('HTML');
fred.grade(pebbles, 'HTML');
fred.scoreTests(pebbles);
betty.demo('JavaScript');
betty.grade(bambam, 'JavaScript');
betty.scoreTests(bambam);

wilma.standUp(`ptMezazoic`);
wilma.debugsCode(pebbles, `HTML`);
barney.standUp(`Cartoon Network`);
barney.debugsCode(bambam, `JavaScript`);

pebbles.listSubjects();
pebbles.prAssignment('HTML');
pebbles.sprintChallenge('HTML');
console.log(pebbles.score);
pebbles.graduate();
bambam.listSubjects();
bambam.prAssignment('JavaScript');
bambam.sprintChallenge('JavaScript');
console.log(bambam.score);
bambam.graduate();

  