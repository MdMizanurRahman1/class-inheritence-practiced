class Person {
    name;
    location;
    developer = 'front-end developer'
    designation = 'skilled at react.js';
    constructor(number, even) {
        this.name = number;
        this.location = even;
    }
    setSupportSession(time) {
        console.log(`tumi ki raat ${time} tay support suru korte parbe?`);
    }
    setPermission(day) {
        console.log(`${day} time e tomar permission dorkar nai`)
    }

}

const garibUllah = new Person('Mizan', 'Finland');

console.log(garibUllah);

garibUllah.setSupportSession(10.00);
garibUllah.setPermission('10 am to 8 pm');