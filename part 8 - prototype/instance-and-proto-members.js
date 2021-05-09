/**
 * ! Instance members vs Prototype members
 * * instance members created when we create a object with this Constructor
 * * But prototype members store in prototype object and it doesn't duplicate or create a instance when we create a object from constructor.
 *
 * * prototype object allocate once when declare a constructor function. it does not create instance for every object....thats why we should declare all common method in constructor's prototype
 *
 * ? prototype members can access in the instance members and instance members can access all prototype members under same Constructor function
 * * thats why 'this' keyword can refer the constructor function though 'this' is store in prototype's method
 */

// Constructor Members
const Square = function (width) {
    this.width = width
}

// Prototype Members
Square.prototype = {
    draw: function () {
        console.log(`My width is ${this.width}`)
    }
}

const sqr1 = new Square(30)
const sqr2 = new Square(100)
sqr1.draw()
sqr2.draw()
