/**
 * ! abstraction means hide some features from user
 * ? in other language => public, private, protected use to make abstraction but in js there is no keyword for abstraction
 *
 * * for private properties & methods we can declare local variable inside the construction function. so, local variable can't accessible outside the constructor function
 *
 * * for use 'this' keyword inside the private method we should use arrow function (bcz arw func always refer his parent's context 'this' inside him)
 * * or bind the whole method with our constructor function otherwise 'this' refer Window object and error occur
 */

const Rectangle = function (width, height) {
    this.width = width
    this.height = height

    // ? private properties
    const position = { x: 50, y: -80 }

    // ? private method
    // const draw = () => {
    //     console.log(`rectangle's width is: ${this.width}`)
    //     console.log(`rectangle's height is: ${this.height}`)
    // }
    // or
    const draw = function () {
        console.log(`rectangle's width is: ${this.width}`)
        console.log(`rectangle's height is: ${this.height}`)
    }.bind(this)

    this.printPosition = function () {
        console.log(
            `rectangle's position is X= ${position.x}, Y= ${position.y}`
        )
        draw()
    }
}

const rect = new Rectangle(80, 50)
rect.printPosition()
