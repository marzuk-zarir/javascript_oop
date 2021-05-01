/**
 * ! this keyword in js:
 * * this always refer his object
 * * 'this' s value is set in executional phase that why we can change 'this' s value outside of the object
 */

const circle1 = {
    radius: 50,
    getThis() {
        console.log(this)
    },
    getRadius() {
        console.log(this.radius)
    },
    getArea() {
        console.log(3.1416 * this.radius ** 2)
    },
}

circle1.getThis() // refer circle 1 object
circle1.getRadius() // 50
circle1.getArea() // 7854

// ? if 'this' is not bind with specific object then it refers Window/Global object
function getWindowThis() {
    console.log(this)
}
getWindowThis() // refer window object

// 'this' value is set on executional phase thats why it's value set in
const circle2 = {
    radius: 20,
    printRadius: circle1.getRadius,
}
circle2.printRadius() // 20 -> 'this' refer circle2's radius though it is define in circle1
