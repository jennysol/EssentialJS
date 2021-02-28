const sun = function (x, y) {
    return x + y
}

const printResult = function (a, b, operation = sun) {
    console.log(operation(a, b))
}

printResult(3, 4)
printResult( 3, 4 , sun)
printResult(3 , 4, function (x, y) {
    return x - y //Passing a function as a parameter
})

printResult( 3, 4, (x, y) => x * y)

const people = {
    say: function() { // or say() {}
        console.log('Hi')
    }
}

people.say()