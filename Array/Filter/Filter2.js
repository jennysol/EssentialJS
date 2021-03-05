// Understanding filter from the inside
Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const products = [
    {name: 'Notebook', value: 5000, fragile: true},
    {name: 'iPad Pro', value: 3000, fragile: true},
    {name: 'Glass', value: 100, fragile: true},
    {name: 'GlassPlastic', value: 100, fragile: false},
]

// console.log(products.filter(function (p) {
//     return false
// }))

const manyMoney = product => product.value >= 500
const fragile = product => product.fragile

console.log(products.filter2(manyMoney).filter(fragile))