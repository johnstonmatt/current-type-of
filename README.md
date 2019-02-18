[![Coverage Status](https://coveralls.io/repos/github/johnstonmatt/current-type-of/badge.svg?branch=master)](https://coveralls.io/github/johnstonmatt/current-type-of?branch=master)
[![Build Status](https://travis-ci.org/johnstonmatt/current-type-of.svg?branch=master)](https://travis-ci.org/johnstonmatt/current-type-of)
[![npm](https://img.shields.io/npm/v/current-type-of.svg)](https://npmjs.com/package/current-type-of)

### current-type-of
```js
var currentTypeOf = require('current-type-of');

var typeOfNull = currentTypeOf(null);
console.log(typeOfNull); // 'null'

var typeOfArray = currentTypeOf([]);
console.log(typeOfArray); // 'array'

// instead of

var unpredictableTypeOfNull = typeof null;
console.log(unpredictableTypeOfNull) // 'object'


var unpredictableTypeOfArray = typeof [];
console.log(unpredictableTypeOfArray) // 'object'
```
