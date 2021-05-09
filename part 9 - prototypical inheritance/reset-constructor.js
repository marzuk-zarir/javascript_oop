/**
 * * we can create a object from Constructor func with constructor_func.prototype.constructor() method
 *
 * * if we don't reset constructor name above method not working...bcz it can not find any constructor then it will go its parent and create a object  from parents constructor function
 *
 * ? so we should reset after inheritance
 */

function Vehicle() {}
Vehicle.prototype.vehicleInfo = function () {
    console.log('General Vehicle method for every type')
}

function Car(company) {
    this.company = company
}
Car.prototype = Object.create(Vehicle.prototype)
// reset constructor
Car.prototype.constructor = Car
Car.prototype.printInfo = function () {
    console.log(`This car is made by ${this.company}`)
}

const car2 = new Car('BMW')
car2.printInfo()

// it can not work properly without reset constructor
const car3 = new Car.prototype.constructor('toyota')
car3.printInfo()
