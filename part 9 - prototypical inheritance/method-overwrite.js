function inherit(parent, child) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

// Shape(Parent)
function Shape() {}
Shape.prototype.draw = function () {
    console.log('I am common method from Shape Constructor')
}

// Rectangle(Child)
function Rectangle(width, height) {
    this.width = width
    this.height = height
}
inherit(Shape, Rectangle)

// Circle(Child)
function Circle(radius) {
    this.radius = radius
}
inherit(Shape, Circle)

// ? method overwrite
Circle.prototype.draw = function () {
    console.log(
        'I am from Circle Constructor... and I have overwrite draw method of Shape constructor'
    )
}

/**
 * ? method overwrite means overwrite parent constructor's method from child constructor
 * * when we declare method in parent's proto compiler looks 1st in child constructor's method
 * * if can not find then go to parent instance and then parent's proto
 * * if find same method then set this method
 *
 * - child's method priority is higher then parent's method
 */

// ! Prototypical Chain
// Rectangle -> Rectangle_Proto -> Shape -> Shape_Proto[draw()]
const rect = new Rectangle(20, 10)

// Circle -> Circle_Proto[draw()] -> Shape -> Shape_Proto[draw()]
const circle = new Circle(50)

rect.draw()
circle.draw()
