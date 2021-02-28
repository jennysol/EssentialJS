// My map 
Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
       newArray.push(callback(this[i], i, this)) 
    }
    return newArray
}

const car = [
    '{"name": "eraser", "value": 3.45}',
    '{"name": "pencil" ,"value": 1.45}',
    '{"name": "notebook" ,"value": 9.45}',
    '{"name": "pen", "value": 2.45}'
]

// Return only the values

const forObjs = json => JSON.parse(json)
const OnlyValue = product => product.value

const result = car.map2(forObjs).map2(OnlyValue)
console.log(result)