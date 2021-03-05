const students = [
    { name: 'Jhon', test: 7.3, scholarshipHolder: false},
    { name: 'Mary', test: 9.2, scholarshipHolder: true},
    { name: 'Piter', test: 9.8, scholarshipHolder: false},
    { name: 'Anne', test: 8.7, scholarshipHolder: true}
]

console.log(students.map(s => s.test))
const result = students.map(s => s.test).reduce(function(accumulator, current) {
    console.log(accumulator, current)
    return accumulator + current
}, 0)

console.log(result)