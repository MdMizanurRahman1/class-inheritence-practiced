const fish = {
    name: 'king Fish',
    address: 'chandpur',
    color: 'silver',
    phone: '0171455555',
    price: 4000
};

//let numbers = [1, 2, 3, 4, 6];
//let [, d, , , e] = numbers;

//console.log(d, e);

const { color } = fish;
const { price } = fish;
console.log(color);
console.log(price);

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((previous, current) => previous * current, 1);

console.log(result);

const student = {
    name: 'kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
};

const { marks } = student;
console.log(marks)