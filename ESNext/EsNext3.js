//ES8: Object.values/Object.entries

const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Improvements in literal notation

const names = "Jenni"
const people = {
    names,
    hi() {
        return 'Hi People'
    }
}

console.log(people.names, people.hi())

// Class
class Animal {}
class Dog extends Animal {
    say() {
        return 'Au au!'
    }
}
console.log(new Dog().say())