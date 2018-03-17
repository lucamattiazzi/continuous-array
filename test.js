const { continuousArray } = require('./dist/index')
const array = [1, 2, 4]
const continuous = continuousArray(array)

console.log(continuous[0])
console.log(continuous[0.5])
console.log(continuous[1.5])
