const products = [
    {name: 'Notebook', value: 5000, fragile: true},
    {name: 'iPad Pro', value: 3000, fragile: true},
    {name: 'Glass', value: 100, fragile: true},
    {name: 'GlassPlastic', value: 100, fragile: false},
]

console.log(products.filter(function (p) {
    return false
}))

const manyMoney = product => product.value >= 500
const fragile = product => product.fragile

console.log(products.filter(manyMoney).filter(fragile))