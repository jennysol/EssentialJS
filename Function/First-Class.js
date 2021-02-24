// First-Class Object (Citizens)/ Higher-order function
// Sendi functions worked as data

// Create literally
function fun1() { }

// You store a function in a variable
const fun2 = function () { }

// Store a function within an array
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Store in an object attribute
const obj = {}
obj.say = function () { return 'Opa' }
console.log(obj.say())

// Passing a function as a parameter to another function
function run(fun) {
    fun()
}

run(function () {console.log('Executando...') })

// A function can return / contain a function
function sun(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
sun(2, 3)(4)
const fiveMore = sun(2, 3)
fiveMore(4)
