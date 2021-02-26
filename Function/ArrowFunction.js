let double = function(a) {
    return 2 * a
}

double = (a) => {
    return 2 * a
}

double = a => 2 * a // Return is implicit
console.log(double(Math.PI))

let hi = function () {
    return 'Hi'
}

hi = () => 'Hi'
hi = _ => 'Hi' // One param
console.log(hi())