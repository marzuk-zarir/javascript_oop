/**
 * * In JavaScript, all functions are object bcz we create a function with 'Function' constructor
 * * also functions have some methods..if function is not a object then where is from method came from??
 * note: functions are special type of object
 */

// ? first arguments of 'Function' grab all argument in string of declare function and last arguments grab declared function body
// * Function( function_arguments..., function_body )
const sum = new Function('a', 'b', `console.log(a + b)`)
sum(5, 10)

// ? if functions are not object where is length, name method came from?
console.log(sum.length) // 2 -> arguments length
console.log(sum.name) // anonymous
