const nums = [1, 2, 3, 4, 5,]

// Repetition with purpose

let result = nums.map(function(e) {
    return e * 2
})

console.log(result)

const sun10 = e => e + 10
const triple = e => e * 3
const money = e  => `$ ${parseFloat(e).toFixed(2).replace('.',',')}`

result = nums.map(sun10).map(triple).map(money)
console.log(result)