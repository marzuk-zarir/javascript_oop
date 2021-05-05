/**
 * ! we can use getter setter to access private property outside of the constructor function
 * * Object.defineProperty(object_to_access, 'custom_property_name', { options })
 */

const Circle = function (radius) {
    this.radius = radius

    // private property
    let circlePosition = { x: 100, y: -55 }

    // getter-setter
    Object.defineProperty(this, 'position', {
        // get private property
        get: function () {
            return circlePosition
        },
        // set private property
        set: function (customPosition) {
            return (circlePosition = customPosition)
        },
    })
}

let circle = new Circle(25)

// read private property
console.log(circle.position)

// write in the private property
circle.position = { x: 10, y: 20 }
console.log(circle.position)
