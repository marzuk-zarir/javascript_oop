/**
 *
 * @param {*} extendObj - which want to extend
 * @param {*} inherit - from which constructor
 */
function inherit(extendObj, inherit) {
    extendObj.prototype = Object.create(inherit.prototype)
    extendObj.prototype.constructor = extendObj
}

function Shape(color) {
    this.color = color
}
Shape.prototype.draw = function () {
    console.log(`I am drawing with ${this.color} color`)
}

/**
 * * we can inherit parent class property with super call
 *
 * * normally we can parent function call in our child class but parent's 'this' refer Window object but we need to execute in our child class context
 * * thats why we should use call/apply method in super call
 */

// Rectangle
function Rectangle(width, height, rectColor) {
    this.width = width
    this.height = height
    // super call
    Shape.call(this, rectColor)
}
inherit(Rectangle, Shape)

const rect1 = new Rectangle(20, 10, 'green')
rect1.draw()
