// Parameters and returns are optional

function area(width , hight) {
    const area = width * hight
    if (area > 20) {
        console.log(`Values ​​above the allowed: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2 ,2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 4, 4))
console.log(area(5, 5))