const students = [
    { name: 'Jhon', test: 7.3, scholarshipHolder: false},
    { name: 'Mary', test: 9.2, scholarshipHolder: true},
    { name: 'Piter', test: 9.8, scholarshipHolder: false},
    { name: 'Anne', test: 8.7, scholarshipHolder: true}
]

// #1 -> Are all students scholarship holders?
const allHolder = (result, holder) => result && holder
console.log(students.map(s => s.scholarshipHolder).reduce(allHolder))

// #2 -> Do any students have a scholarship?
const anyHold = (result, hold) => result || hold
console.log(students.map(s => s.scholarshipHolder).reduce(anyHold))