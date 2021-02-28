function Car(maximumSpeed = 200, delta = 5) {
    // Private attribute
    let speedActs = 0

    // Public Method
    this.speedUp = function () {
        if (speedActs + delta <= maximumSpeed) {
            speedActs += delta
        } else {
            speedActs = maximumSpeed
        }
    }

    //Public method 
    this.getSpeedActs = function () {
        return speedActs
    }
}

const uno = new Car
uno.speedUp()
console.log(uno.getSpeedActs())

const ferrari = new Car(350, 20)
ferrari.speedUp()
console.log(ferrari.getSpeedActs())

console.log(typeof Car)
console.log(typeof ferrari)
