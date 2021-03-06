// Operator ... rest and spread
// using rest as params function

// Spread as an object 
const employee = { name: 'Jennie', money: 0.00 }
const clone = { active: true, ...employee }
console.log(clone)

// Spread as an array 
const groupA = ['Matheus', 'Guilheme', 'Evio']
const groupEnd = ['Jennifer', 'Anna', ...groupA]
console.log(groupEnd)