let comparing_with_this = function (param) {
    console.log( this == param)
}

comparing_with_this(global)

const obj = {}
comparing_with_this = comparing_with_this.bind(obj)
comparing_with_this(global)
comparing_with_this(obj)

let comparing_with_thisArrow = param => console.log(this === param)
comparing_with_thisArrow(global)
comparing_with_thisArrow(module.exports)

comparing_with_thisArrow = comparing_with_thisArrow.bind(obj)
comparing_with_thisArrow(obj)
comparing_with_thisArrow(module.exports)

// This associated with an arrow function is an this associeated with the context in which the function was written.