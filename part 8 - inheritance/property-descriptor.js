/**
 * ! Property Descriptor
 * * with property descriptor we can prevent to modify and iterate our object's property
 *
 * ? get property descriptor
 * * we can print property descriptor with Object.getOwnPropertyDescriptor(obj_which_want_to_describe, 'property_name_in_string')
 *
 * ? write property descriptor
 * * we can define property descriptor with Object.defineProperty(obj, 'property_name', { / * descriptor object * / })
 */

// toString()'s property descriptor
const emptyObject = Object.getPrototypeOf(new Object())
const toStringDes = Object.getOwnPropertyDescriptor(emptyObject, 'toString')
console.log(toStringDes)
// ? { writable: true, enumerable: false, configurable: true, value: ƒ }
// - all are default true and value is none
// writable => is redefine value from outside of the object
// enumerable => is iterate this property
// configurable => is delete or configure this property
// value => default value of property. it is overwrite acutal property value

const person = { name: 'marzuk zarir' }
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: 'marzuk'
})

// cant write bcz writable false
person.name = 'zarir'
console.log(person) // { name: "marzuk" }

// cant traverse bcz enumerable false
for (let personName in person) {
    console.log(personName)
}

// cant delete name property bcz configurable is false
delete person.name
console.log(person) // { name: "marzuk" }
