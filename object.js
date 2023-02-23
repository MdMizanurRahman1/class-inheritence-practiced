const student = {
    name: 'kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
}
//1
const { age } = student;
//2
const chemistry = student['marks']['chemistry'];
//3
const number = 'physics';
const subjectMarks = student.marks[number];


/// [subject] uporer line er varibale takey ashshey ja math k define kore ]


console.log(subjectMarks);
console.log(chemistry);
console.log(age);