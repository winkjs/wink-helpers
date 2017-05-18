//     wink-helpers
//     Low level helper functions for Javascript
//     arrays and objects.
//
//     Copyright (C) 2017  GRAYPE Systems Private Limited
//
//     This file is part of “wink-helpers”.
//
//     “wink-helpers” is free software: you can redistribute it
//     and/or modify it under the terms of the GNU Affero
//     General Public License as published by the Free
//     Software Foundation, version 3 of the License.
//
//     “wink-helpers” is distributed in the hope that it will
//     be useful, but WITHOUT ANY WARRANTY; without even
//     the implied warranty of MERCHANTABILITY or FITNESS
//     FOR A PARTICULAR PURPOSE.  See the GNU Affero General
//     Public License for more details.
//
//     You should have received a copy of the GNU Affero
//     General Public License along with “wink-helpers”.
//     If not, see <http://www.gnu.org/licenses/>.

//
/* eslint-disable no-sync */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var helpers = require( '../src/wink-helpers.js' );


var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;


describe( 'isArray', function () {
  var tests = [
    { whenInputIs: 'UPPERCASE', expectedOutputIs: false },
    { whenInputIs: 1, expectedOutputIs: false },
    { whenInputIs: null, expectedOutputIs: false },
    { whenInputIs: undefined,  expectedOutputIs: false },
    { whenInputIs: {}, expectedOutputIs: false },
    { whenInputIs: new Set( [ 1, 2, 3, 4 ] ), expectedOutputIs: false },
    { whenInputIs: [ 1, 2, 3, 4 ], expectedOutputIs: true },
    { whenInputIs: [ ], expectedOutputIs: true },
    { whenInputIs: [ {} ], expectedOutputIs: true },
  ];
  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( helpers.array.isArray( [] ) ).to.equal( true );
    } );
  } );
} );

describe( 'ascending sort helpers', function () {
  var expectedOutputIs = [ 1, 2, 2, 3, 4 ],
      whenInputIs = [ 3, 4, 1, 2, 2 ];
    it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
      expect( whenInputIs.sort( helpers.array.ascending ) ).to.deep.equal( expectedOutputIs );
    } );
} );

describe( 'descending sort helpers', function () {
  var expectedOutputIs = [ 4, 3, 2, 2, 1 ],
      whenInputIs = [ 3, 4, 1, 2, 2 ];
    it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
      expect( whenInputIs.sort( helpers.array.descending ) ).to.deep.equal( expectedOutputIs );
    } );
} );

describe( 'ascending on key sort helpers', function () {
  var expectedOutputIs = [ [ 1, 'a' ], [ 1, 'a1' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, 'd' ], [ 6, 'c1' ] ],
      whenInputIs = [ [ 4, 'd' ], [ 3, 'c' ], [ 6, 'c1' ], [ 2, 'b' ], [ 1, 'a' ], [ 1, 'a1' ] ];
    it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
      expect( whenInputIs.sort( helpers.array.ascendingOnKey ) ).to.deep.equal( expectedOutputIs );
    } );
} );

describe( 'descending on key  sort helpers', function () {
  var expectedOutputIs = [ [ 11, 'a' ], [ 6, 'x' ], [ 4, 'd' ], [ 3, 'c' ], [ 2, 'b' ], [ 1, 'a' ], [ 1, 'a1' ] ],
      whenInputIs = [ [ 1, 'a' ], [ 1, 'a1' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, 'd' ], [ 11, 'a' ], [ 6, 'x' ] ];
    it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
      expect( whenInputIs.sort( helpers.array.descendingOnKey ) ).to.deep.equal( expectedOutputIs );
    } );
} );

describe( 'ascending on value sort helpers', function () {
  var expectedOutputIs = [ [ 1, 'a' ], [ 11, 'a' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, 'd' ], [ 6, 'x' ] ],
      whenInputIs = [ [ 4, 'd' ], [ 3, 'c' ], [ 2, 'b' ], [ 1, 'a' ], [ 11, 'a' ], [ 6, 'x' ] ];
    it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
      expect( whenInputIs.sort( helpers.array.ascendingOnValue ) ).to.deep.equal( expectedOutputIs );
    } );
} );

describe( 'descending on value sort helpers', function () {
  var expectedOutputIs = [ [ 6, 'x' ], [ 4, 'd' ], [ 3, 'c' ], [ 2, 'b' ], [ 1, 'a' ], [ 11, 'a' ] ],
      whenInputIs = [ [ 4, 'd' ], [ 3, 'c' ], [ 2, 'b' ], [ 1, 'a' ], [ 11, 'a' ], [ 6, 'x' ] ];
    it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
      expect( whenInputIs.sort( helpers.array.descendingOnValue ) ).to.deep.equal( expectedOutputIs );
    } );
} );

describe( 'ascending on single accessor sort helpers - array', function () {
  var expectedOutputIs = [ [ 1, 'a' ], [ 1, 'a1' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, 'd' ], [ 6, 'c1' ] ],
      whenInputIs = [ [ 4, 'd' ], [ 3, 'c' ], [ 6, 'c1' ], [ 2, 'b' ], [ 1, 'a' ], [ 1, 'a1' ] ];
    it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
      expect( whenInputIs.sort( helpers.array.ascendingOn( 0 ) ) ).to.deep.equal( expectedOutputIs );
    } );
} );

describe( 'ascending on single accessor sort helpers - object', function () {
  var expectedOutputIs = [ { age: 1, gender: 'm' }, { age: 2, gender: 'm' }, { age: 3, gender: 'f' }, { age: 4, gender: 'm' } ],
      whenInputIs = [ { age: 4, gender: 'm' }, { age: 3, gender: 'f'  }, { age: 2, gender: 'm' }, { age: 1, gender: 'm'  } ];
    it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
      expect( whenInputIs.sort( helpers.array.ascendingOn( 'age' ) ) ).to.deep.equal( expectedOutputIs );
    } );
} );

describe( 'descending on single accessor sort helpers - array', function () {
  var expectedOutputIs = [  [ 6, 'c1' ], [ 4, 'd' ], [ 3, 'c' ], [ 2, 'b' ], [ 1, 'a' ], [ 1, 'a1' ] ],
      whenInputIs = [ [ 1, 'a' ], [ 1, 'a1' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, 'd' ], [ 6, 'c1' ] ];
    it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
      expect( whenInputIs.sort( helpers.array.descendingOn( 0 ) ) ).to.deep.equal( expectedOutputIs );
    } );
} );

describe( 'descending on single accessor sort helpers - object', function () {
  var expectedOutputIs = [ { age: 4, gender: 'm' }, { age: 3, gender: 'f'  }, { age: 2, gender: 'm' }, { age: 1, gender: 'm'  } ],
      whenInputIs = [ { age: 1, gender: 'm' }, { age: 2, gender: 'm' }, { age: 3, gender: 'f' }, { age: 4, gender: 'm' } ];
    it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
      expect( whenInputIs.sort( helpers.array.descendingOn( 'age' ) ) ).to.deep.equal( expectedOutputIs );
    } );
} );
