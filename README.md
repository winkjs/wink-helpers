
# wink-helpers
Helper functions for Javascript array, object, and string

### [![Build Status](https://api.travis-ci.org/winkjs/wink-helpers.svg?branch=master)](https://travis-ci.org/winkjs/wink-helpers) [![Coverage Status](https://coveralls.io/repos/github/winkjs/wink-helpers/badge.svg?branch=master)](https://coveralls.io/github/winkjs/wink-helpers?branch=master) [![Inline docs](http://inch-ci.org/github/winkjs/wink-helpers.svg?branch=master)](http://inch-ci.org/github/winkjs/wink-helpers) [![devDependencies Status](https://david-dm.org/winkjs/wink-helpers/dev-status.svg)](https://david-dm.org/winkjs/wink-helpers?type=dev)

<img align="right" src="https://decisively.github.io/wink-logos/logo-title.png" width="100px" >

Perform commonly needed operations of array, object and string using **`wink-helpers`**. It is a part of [wink](http://winkjs.org/) — a growing family of high quality packages for Statistical Analysis, Natural Language Processing and Machine Learning in NodeJS.


## Installation
Use [npm](https://www.npmjs.com/package/wink-helpers) to install:
```
npm install wink-helpers --save
```


## Example [![Try on Runkit](https://badge.runkitcdn.com/wink-helpers.svg)](https://npm.runkit.com/wink-helpers)

```javascript
// Load wink helpers
var helpers = require( 'wink-helpers' );


/* Use array helpers */
console.log( helpers.array.isArray( [] ) );
// -> true

var ppl = [ { name: 'aiden', age: 42 }, { name: 'olivia', age: 37 } ];
console.log( ppl.sort( helpers.array.ascendingOn( 'age' ) ) );
// -> [ { "name": "olivia", "age": 37 }, { "name": "aiden", "age": 42 } ]

console.log( helpers.array.product( [ [ 9, 8 ], [ 1, 2 ] ] ) );
// -> [ [ 9, 1 ], [ 9, 2 ], [ 8, 1 ], [ 8, 2 ] ]


/* Use object helpers */
console.log( helpers.object.isObject( {} ) );
// -> true

console.log( helpers.object.isObject( new Set() ) );
// -> false

console.log( helpers.object.table( { mobile: 33, chargers: 45, usb: 27 } ) );
// -> [ [ "mobile", 33 ], [ "chargers", 45 ], [ "usb", 27 ] ]


/* Use string helper */
console.log( helpers.string.normalize( 'Résumé' ) );
// -> 'resume'
```

## API
The helper functions are classified into [array](#array), [object](#object), [string](#string) and [validate](#validate).

### array

#### isArray( value )
Tests if argument `value` is a valid JS array; returns `true` if it is, otherwise returns `false`.

#### sorting compare functions
It is a set of handy [compare functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) for handling a variety of array sorting needs.

| compareFunction | Description |
| --- | --- |
| ascending | Sorts elements in ascending order. |
| descending | Sorts elements in descending order. |
| ascendingOnKey | It works on array of arrays, where each element is in the `[ key, value ]` format. Sorts elements in ascending order on the `key`.  |
| descendingOnKey | Same as above, but sorts in descending order.  |
| ascendingOnValue | It works on array of arrays, where each element is in the `[ key, value ]` format. Sorts elements in ascending order on the `value`.  |
| descendingOnValue | Same as above, but sorts in descending order.  |
| ascendingOn( `accessor1` [,`accessor2`] ) | A higher order function that returns a compare function for the accessors — refers to a key whose value will be used to determine the sort order.<br/><br/>Can be directly used as the compare function for sort.<br/><br/>It works on array of *arrays* or *objects*. <br/><br/> When both the accessors are supplied, the combination is treated as a composite key for sort. |
| descendingOn( `accessor1` [,`accessor2`] ) | Same as above, but sorts in descending order. |



#### pluck( array, key, limit )
Plucks the values specified by the `key` from each element of the `array` of *arrays* or *objects*, and returns the resultant array. The default value of `key` is **0**. The number of elements to be plucked is defined by the `limit`, whose default value is `array.length`.

#### product( array )
Returns the *cartesian product* of the arrays present inside the `array` argument. For example, if the `array` argument is `[ [ 1, 2, 3 ], [ 4 ], [ 5, 6 ] ]`, then the return value will be:
```javascript
[
  [ 1, 4, 5 ],
  [ 1, 4, 6 ],
  [ 2, 4, 5 ],
  [ 2, 4, 6 ],
  [ 3, 4, 5 ],
  [ 3, 4, 6 ]
]
```

### object

#### isObject( value )
Tests if argument `value` is a JS object; returns `true` if it is, otherwise returns `false`.

#### keys( obj )
Returns keys of the `obj` in an `array`.

#### size( obj )
Returns the number of *keys* in the `obj`.

#### values( obj )
Returns all the *values* from each `key: value` pair in the `obj` in form of an array.

#### valueFreq( obj )
Returns the *frequency* or *count* of every unique value from each `key: value` pair in the `obj` in form of an object.

#### table( obj [, f] )
Converts each `key: value` pair in the `obj` into an array of `[ key, value ]` pairs. Note the returned value be an array of array. Second argument - `f` is optional; it is a function, which is called with each *value*.

### string

#### normalize( str )
Normalizes the `str` by converting it to lower case and stripping the diacritical marks (if any).

### validate

#### isArray( value )
Alias for `array.isArray()`.

#### isObject( value )
Alias for `object.isObject()`.

#### isFiniteInteger( value )
Tests if argument `value` is a finite integer; returns `true` if it is, otherwise returns `false`.

#### isFiniteNumber( value )
Tests if argument `value` is a finite number; returns `true` if it is, otherwise returns `false`.


## Need Help?
If you spot a bug and the same has not yet been reported, raise a new [issue](https://github.com/winkjs/wink-helpers/issues) or consider fixing it and sending a pull request.


## Copyright & License
**wink-helpers** is copyright 2017-18 [GRAYPE Systems Private Limited](http://graype.in/).

It is licensed under the under the terms of the GNU Affero General Public License as published by the Free
Software Foundation, version 3 of the License.
