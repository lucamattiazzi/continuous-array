# Continuous Array

A function that turns a numeric array into a continuous array that can get float keys returning the linear interpolation for data.

```js
const { continuousArray } = require('continuous-array')
const array = [1, 2, 4]
const continuous = continuousArray(array)

continuous[0] // 1
continuous[0.5] // 1.5
continuous[1.5] // 3
```
