
# wink-helpers

> Low level helper functions for Javascript arrays and objects used in wink

### [![Build Status](https://api.travis-ci.org/decisively/wink-helpers.svg?branch=master)](https://travis-ci.org/decisively/wink-helpers) [![Coverage Status](https://coveralls.io/repos/github/decisively/wink-helpers/badge.svg?branch=master)](https://coveralls.io/github/decisively/wink-helpers?branch=master)

<img align="right" src="https://decisively.github.io/wink-logos/logo-title.png" width="100px" >

**wink-helpers** is a part of **[wink](https://www.npmjs.com/~sanjaya)**, which is a family of Machine Learning NPM packages. They consist of simple and/or higher order functions that can be combined with NodeJS `stream` and `child processes` to create recipes for analytics driven business solutions.

It offers a set of useful APIs to work on Javascript array and object. These APIs are used in most of the **[wink](https://www.npmjs.com/~sanjaya)** packages.

## Installation
Use **[npm](https://www.npmjs.com/package/wink-helpers)** to install:
```
npm install wink-helpers --save
```


## Usage
```javascript

// Load wink helpers
var helpers = require( 'wink-helpers' );

console.log( helpers.array.isArray( [] ) );
// -> true

console.log( helpers.object.isObject( {} ) );
// -> true

console.log( helpers.object.isObject( new Set() ) )
// -> false

console.log( helpers.object.table( { mobile: 33, chargers: 45, usb: 27 } ) );
// -> [ [ "mobile", 33 ], [ "chargers", 45 ], [ "usb", 27 ] ]

var ppl = [ { name: 'john', age: 42 }, { name: 'marry', age: 37 } ];
console.log( ppl.sort( ascendingOn( 'age' ) ) );
// -> [ { "name": "marry", "age": 37 }, { "name": "john", "age": 42 } ]
```

## API
The helper functions are classified into 2 categories viz. [array](#array) and [object](#object).

### array

#### isArray( value )
Tests if argument `value` is a valid JS array; returns `true` if it is, otherwise returns `false`.

#### sorting compare functions
It is a set of handy [compare functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) for handling a variety of array sorting needs.

| compareFunction | Description |
| --- | --- |
| ascending | Sorts elements in an ascending order. |
| descending | Sorts elements in an descending order. |
| ascendingOnKey | It works on array of arrays, where each element is in the `[ key, value ]` format. Sorts elements in an ascending order on the `key`.  |
| descendingOnKey | It works on array of arrays, where each element is in the `[ key, value ]` format. Sorts elements in an descending order on the `key`.  |
| ascendingOnValue | It works on array of arrays, where each element is in the `[ key, value ]` format. Sorts elements in an ascending order on the `value`.  |
| descendingOnValue | It works on array of arrays, where each element is in the `[ key, value ]` format. Sorts elements in an descending order on the `value`.  |
| ascendingOn( `accessor1` [,`accessor2`] ) | A higher order function that returns a compare function for the accessors and can be directly used as the compare function for sort.It works on array of *arrays* or *objects*. Here the accessor specifies the key whose value will be used to determine the sort order. When both the accessors are supplied then the generated function sorts on a key composed of the two accessors and not on two different keys. |
| descendingOn( `accessor1` [,`accessor2`] ) | Same as above, but sorts in descending order. |



#### pluck( array, key, limit )
Plucks the values specified by the `key` from each element of the `array` of *arrays* or *objects*, and returns the resultant array. The default value of `key` is **0**. The number of elements to be plucked is defined by the `limit`, whose default value is `array.length`.

### object

#### isObject( v )
Tests if argument `v` is a JS object; returns `true` if it is, otherwise returns `false`.

#### keys( obj )
Returns keys of the `obj` in an `array`.

#### size( obj )
Returns the number of *keys* in the `obj`.

#### value( obj )
Returns all the *values* from each **key/value pair** in the `obj` in form of an array.

#### valueFreq( obj )
Returns the *frequency* or *count* of every unique value from each **key/value pair** in the `obj` in form of an array.

#### table( obj [, f] )
Converts each **key/value pair** in the `obj` into an array of `[ key, value ]` pairs in form of a table (i.e. an array of array). Second argument - `f` is optional; it is a function, which is called with each *value*.


## Need Help?
If you spot a bug and the same has not yet been reported, raise a new [issue](https://github.com/decisively/wink-porter2-stemmer/issues) or consider fixing it and sending a pull request.


## Copyright & License
**wink-helpers** is copyright 2017 GRAYPE Systems Private Limited.

It is licensed under the under the terms of the GNU Affero General Public License as published by the Free
Software Foundation, version 3 of the License.
