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
    it( 'should return ' + test.expectedOutputIs + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( helpers.array.isArray( [] ) ).to.equal( true );
    } );
  } );
} );

describe( 'ascending sort helpers', function () {
  var expectedOutputIs = [ 1, 2, 3, 4 ],
      whenInputIs = [ 3, 4, 1, 2 ];
    it( 'should return ' + expectedOutputIs + ' if the input is ' + whenInputIs, function () {
      expect( whenInputIs.sort( helpers.array.ascending ) ).to.deep.equal( expectedOutputIs );
    } );
} );

describe( 'descending sort helpers', function () {
  var expectedOutputIs = [ 4, 3, 2, 1 ],
      whenInputIs = [ 3, 4, 1, 2 ];
    it( 'should return ' + expectedOutputIs + ' if the input is ' + whenInputIs, function () {
      expect( whenInputIs.sort( helpers.array.descending ) ).to.deep.equal( expectedOutputIs );
    } );
} );
