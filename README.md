
# wink-helpers

> Low level helper functions for Javascript arrays and objects used in wink

### [![Build Status](https://api.travis-ci.org/decisively/wink-helpers.svg?branch=master)](https://travis-ci.org/decisively/wink-porter2-stemmer) [![Coverage Status](https://coveralls.io/repos/github/decisively/wink-helpers/badge.svg?branch=master)](https://coveralls.io/github/decisively/wink-porter2-stemmer?branch=master)

<img align="right" src="https://decisively.github.io/wink-logos/logo-title.png" width="100px" >

**wink-helpers** is a part of **[wink](https://www.npmjs.com/~sanjaya)**, which is a family of Machine Learning NPM packages. They consist of simple and/or higher order functions that can be combined with NodeJS `stream` and `child processes` to create recipes for analytics driven business solutions.

It offers a set of APIs to work on Javascript array and object. These APIs are used in most of the **[wink](https://www.npmjs.com/~sanjaya)** packages.

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
```

## Need Help?
If you spot a bug and the same has not yet been reported, raise a new [issue](https://github.com/decisively/wink-porter2-stemmer/issues) or consider fixing it and sending a pull request.


## Copyright & License
**wink-porter2-stemmer** is copyright 2017 GRAYPE Systems Private Limited.

It is licensed under the under the terms of the GNU Affero General Public License as published by the Free
Software Foundation, version 3 of the License.
