//     wink-helpers
//     Functions for cross validation, shuffle, cartesian product and more
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
//
//     This file is part of “wink-helpers”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

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
      expect( helpers.array.isArray( test.whenInputIs ) ).to.equal( test.expectedOutputIs );
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

describe( 'ascending on dual accessors sort helpers - array', function () {
  var expectedOutputIs = [ { name: { fn: 'Mary', sn: 'Garcia' } }, { name: { fn: 'Julia', sn: 'Garcia' } }, { name: { fn: 'Maria', sn: 'Rodriguez' } }, { name: { fn: 'James', sn: 'Smith' } } ],
      whenInputIs = [ { name: { fn: 'James', sn: 'Smith' } }, { name: { fn: 'Mary', sn: 'Garcia' } }, { name: { fn: 'Julia', sn: 'Garcia' } }, { name: { fn: 'Maria', sn: 'Rodriguez' } } ];
  it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
    expect( whenInputIs.sort( helpers.array.ascendingOn( 'name', 'sn' ) ) ).to.deep.equal( expectedOutputIs );
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
      whenInputIs = [ [ 1, 'a' ], [ 1, 'a1' ], [ 2, 'b' ], [ 3, 'c' ], [ 6, 'c1' ], [ 4, 'd' ] ];
  it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
    expect( whenInputIs.sort( helpers.array.descendingOn( 0 ) ) ).to.deep.equal( expectedOutputIs );
  } );
} );

describe( 'descending on dual accessors sort helpers - array', function () {
  var expectedOutputIs = [ { name: { fn: 'James', sn: 'Smith' } }, { name: { fn: 'Maria', sn: 'Rodriguez' } }, { name: { fn: 'Mary', sn: 'Garcia' } }, { name: { fn: 'Julia', sn: 'Garcia' } } ],
      whenInputIs = [ { name: { fn: 'James', sn: 'Smith' } }, { name: { fn: 'Mary', sn: 'Garcia' } }, { name: { fn: 'Julia', sn: 'Garcia' } }, { name: { fn: 'Maria', sn: 'Rodriguez' } } ];
  it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
    expect( whenInputIs.sort( helpers.array.descendingOn( 'name', 'sn' ) ) ).to.deep.equal( expectedOutputIs );
  } );
} );

describe( 'descending on single accessor sort helpers - object', function () {
  var expectedOutputIs = [ { age: 4, gender: 'm' }, { age: 3, gender: 'f'  }, { age: 2, gender: 'm' }, { age: 1, gender: 'm'  } ],
      whenInputIs = [ { age: 1, gender: 'm' }, { age: 2, gender: 'm' }, { age: 3, gender: 'f' }, { age: 4, gender: 'm' } ];
  it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
    expect( whenInputIs.sort( helpers.array.descendingOn( 'age' ) ) ).to.deep.equal( expectedOutputIs );
  } );
} );

describe( 'pluck specific accessor with defined limit', function () {
  var expectedOutputIs = [ 1, 2, 3, 4 ],
      whenInputIs = [ { age: 1, gender: 'm' }, { age: 2, gender: 'm' }, { age: 3, gender: 'f' }, { age: 4, gender: 'm' } ];
  it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
    expect(  helpers.array.pluck( whenInputIs, 'age' ) ).to.deep.equal( expectedOutputIs );
  } );
} );

describe( 'pluck with default accessor and limit', function () {
  var expectedOutputIs = [ 'a', 'b', 'c', 'd' ],
      whenInputIs = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ];
    it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
      expect(  helpers.array.pluck( whenInputIs ) ).to.deep.equal( expectedOutputIs );
    } );
} );

describe( 'pluck with accessor and very large limit', function () {
  var expectedOutputIs = [ 1, 2, 3, 4 ],
      whenInputIs = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ];
  it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
    expect(  helpers.array.pluck( whenInputIs, 1, 10000 ) ).to.deep.equal( expectedOutputIs );
  } );
} );

describe( 'cartesian product', function () {
  var expectedOutputIs = [
        [ [ 9, 1 ], [ 9, 2 ], [ 8, 1 ], [ 8, 2 ] ],
        [ ],
        [
          [ 1, 4, 5 ],
          [ 1, 4, 6 ],
          [ 2, 4, 5 ],
          [ 2, 4, 6 ],
          [ 3, 4, 5 ],
          [ 3, 4, 6 ]
        ],
        [
          [ 1, 4, 6 ],
          [ 1, 4, 7 ],
          [ 1, 5, 6 ],
          [ 1, 5, 7 ],
          [ 2, 4, 6 ],
          [ 2, 4, 7 ],
          [ 2, 5, 6 ],
          [ 2, 5, 7 ],
          [ 3, 4, 6 ],
          [ 3, 4, 7 ],
          [ 3, 5, 6 ],
          [ 3, 5, 7 ]
        ]
      ],
      whenInputIs = [
        [ [ 9, 8 ], [ 1, 2 ] ],
        [ [ 9, 8 ], [ 1, 2 ], [ ] ],
        [ [ 1, 2, 3 ], [ 4 ], [ 5, 6 ] ],
        [ [ 1, 2, 3 ], [ 4, 5 ], [ 6, 7 ] ]
      ];

  whenInputIs.forEach( function ( input, i ) {
    it( 'should return ' + JSON.stringify( expectedOutputIs[ i ] ) + '\n\tif the input is ' + JSON.stringify( input ), function () {
      expect(  helpers.array.product( input ) ).to.deep.equal( expectedOutputIs[ i ] );
    } );
  } );
} );

describe( 'isObject', function () {
  var tests = [
    { whenInputIs: 'UPPERCASE', expectedOutputIs: false },
    { whenInputIs: 1, expectedOutputIs: false },
    { whenInputIs: null, expectedOutputIs: false },
    { whenInputIs: undefined,  expectedOutputIs: false },
    { whenInputIs: {}, expectedOutputIs: true },
    { whenInputIs: new Set( [ 1, 2, 3, 4 ] ), expectedOutputIs: false },
    { whenInputIs: [ 1, 2, 3, 4 ], expectedOutputIs: false },
    { whenInputIs: [ ], expectedOutputIs: false },
    { whenInputIs: { ietms: [ 1, 2, 3 ] }, expectedOutputIs: true },
  ];
  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( helpers.object.isObject( test.whenInputIs ) ).to.equal( test.expectedOutputIs );
    } );
  } );
} );

describe( 'object keys', function () {
  var expectedOutputIs = [ 'age', 'gender', 'name' ],
      whenInputIs = { name: 'john', age: 33, gender: 'm' };
  it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
    expect( helpers.object.keys( whenInputIs ).sort() ).to.deep.equal( expectedOutputIs );
  } );
} );

describe( 'object size', function () {
  var expectedOutputIs = 3,
      whenInputIs = { name: 'john', age: 33, gender: 'm' };
  it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
    expect( helpers.object.size( whenInputIs ) ).to.deep.equal( expectedOutputIs );
  } );
} );

describe( 'object values', function () {
  var expectedOutputIs = [ 'john', 33, 'm' ],
      whenInputIs = { name: 'john', age: 33, gender: 'm' };
  it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
    expect( helpers.object.values( whenInputIs ).sort() ).to.deep.equal( expectedOutputIs.sort() );
  } );
} );

describe( 'object values frequency', function () {
  var expectedOutputIs = { '6': 3, '12': 2, '9': 1 },
      whenInputIs = { delhi: 12, gurgaon: 12, noida: 9, meerut: 6, faridabad: 6, mumbai: 6 };
  it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
    expect( helpers.object.valueFreq( whenInputIs ) ).to.deep.equal( expectedOutputIs );
  } );
} );

describe( 'object table', function () {
  var expectedOutputIs = [ [ 'delhi', 12 ], [ 'noida', 9 ], [ 'meerut', 6 ], [ 'faridabad', 3 ] ],
      whenInputIs = { delhi: 12, noida: 9, meerut: 6, faridabad: 3 };
  it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
    expect( helpers.object.table( whenInputIs ).sort( helpers.array.descendingOnKey ) ).to.deep.equal( expectedOutputIs.sort( helpers.array.descendingOnKey ) );
  } );
} );

describe( 'object table', function () {
  var expectedOutputIs = [ [ 'delhi', 12 ], [ 'noida', 9 ], [ 'meerut', 6 ], [ 'faridabad', 3 ] ],
      whenInputIs = { delhi: 12, noida: 9, meerut: 6, faridabad: 3 },
      z = 0;
  var f = function ( ) {
    z += 1;
  };
  it( 'should return ' + JSON.stringify( expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( whenInputIs ), function () {
    expect( helpers.object.table( whenInputIs, f).sort( helpers.array.descendingOnKey ) ).to.deep.equal( expectedOutputIs.sort( helpers.array.descendingOnKey ) );
    expect( z ).to.equal( 4 );
  } );
} );

describe( 'validate finite integer', function () {
  var tests = [
    { expectedOutputIs: false, whenInputIs: undefined },
    { expectedOutputIs: false, whenInputIs: null },
    { expectedOutputIs: false, whenInputIs: Infinity },
    { expectedOutputIs: false, whenInputIs: -1.1 },
    { expectedOutputIs: false, whenInputIs: 1.00001 },
    { expectedOutputIs: false, whenInputIs: {} },
    { expectedOutputIs: false, whenInputIs: [] },
    { expectedOutputIs: true, whenInputIs: 1 },
    { expectedOutputIs: true, whenInputIs: 999999 },
    { expectedOutputIs: true, whenInputIs: -999999 }
  ];
  tests.forEach( function ( t ) {
    it( 'should return ' + JSON.stringify( t.expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( t.whenInputIs ), function () {
      expect( helpers.validate.isFiniteInteger( t.whenInputIs ) ).to.equal( t.expectedOutputIs );
    } );
  } );
} );

describe( 'validate finite number', function () {
  var tests = [
    { expectedOutputIs: false, whenInputIs: undefined },
    { expectedOutputIs: false, whenInputIs: null },
    { expectedOutputIs: false, whenInputIs: Infinity },
    { expectedOutputIs: true, whenInputIs: -1.1 },
    { expectedOutputIs: true, whenInputIs: 1.00001 },
    { expectedOutputIs: false, whenInputIs: {} },
    { expectedOutputIs: false, whenInputIs: [] },
    { expectedOutputIs: true, whenInputIs: 1 },
    { expectedOutputIs: true, whenInputIs: 999999 },
    { expectedOutputIs: true, whenInputIs: -999999 }
  ];
  tests.forEach( function ( t ) {
    it( 'should return ' + JSON.stringify( t.expectedOutputIs ) + '\n\tif the input is ' + JSON.stringify( t.whenInputIs ), function () {
      expect( helpers.validate.isFiniteNumber( t.whenInputIs ) ).to.equal( t.expectedOutputIs );
    } );
  } );
} );

describe( 'normalize string test cycle', function () {
  var words = [
                [ 'Renée', 'renee' ],
                [ 'Zoë', 'zoe' ],
                [ 'exposé', 'expose' ],
                [ 'résumé', 'resume' ],
                [ 'Nestlé', 'nestle' ],
                [ 'Citroën', 'citroen' ],
                [ 'ACME', 'acme' ],
                [ 'AbCdEf', 'abcdef' ],
                [ 'daïs', 'dais' ]
              ];

  words.forEach( function ( word ) {
    it( 'normalize ' + word[ 0 ] + ' must give ' + word[ 1 ], function () {
        expect( helpers.string.normalize( word[ 0 ] ) ).to.deep.equal( word[ 1 ] );
    } );
  } );
} );

describe( 'shuffle array test cycle', function () {
  var array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
  var originalArray = array.slice();
  var differences = 0;
  var totalDiff = 0;
  var trials = 1000;


  for ( let k = 0; k < trials; k += 1 ) {
    differences = 0;
    helpers.array.shuffle( array );
    for ( let i = 0; i < array.length; i += 1 ) {
      if ( array[ i ] !== originalArray[ i ] ) differences += 1;
    }
    totalDiff += differences;
  }

  it( 'average % difference over multiple trials should be >90%', function () {
      expect( ( ( totalDiff / trials ) / array.length ) > 0.9 ).to.equal( true );
  } );
} );

describe( 'cross validation test cycle', function () {
  var hvx = helpers.validate.cross;

  it( 'should throw labels must be array if undefined is passed', function () {
    expect( hvx.bind( null ) ).to.throw( 'cross validate: class labels must be an array.' );
  } );

  it( 'should throw min 2 labels required if array has one label', function () {
    expect( hvx.bind( null, [ 'one' ] ) ).to.throw( 'cross validate: at least 2 class labels are required.' );
  } );

  it( 'should compute metrics with proper evaluation', function () {
    var x = hvx( [ 'urgent', 'normal', 'spam' ] );
    // With proper data
    for ( let i = 0; i < 8; i += 1 ) x.evaluate( 'urgent', 'urgent' );
    for ( let i = 0; i < 10; i += 1 ) x.evaluate( 'normal', 'urgent' );
    for ( let i = 0; i < 1; i += 1 ) x.evaluate( 'spam', 'urgent' );

    for ( let i = 0; i < 5; i += 1 ) x.evaluate( 'urgent', 'normal' );
    for ( let i = 0; i < 60; i += 1 ) x.evaluate( 'normal', 'normal' );
    for ( let i = 0; i < 50; i += 1 ) x.evaluate( 'spam', 'normal' );

    for ( let i = 0; i < 3; i += 1 ) x.evaluate( 'urgent', 'spam' );
    for ( let i = 0; i < 30; i += 1 ) x.evaluate( 'normal', 'spam' );
    for ( let i = 0; i < 200; i += 1 ) x.evaluate( 'spam', 'spam' );

    var m = x.metrics();
    expect( m.avgPrecision ).to.equal( 0.6004 );
    expect( m.avgRecall ).to.equal( 0.6323 );
    expect( m.avgFMeasure ).to.equal( 0.6139 );

    // Reset test with incorrect truth & guess values
    x.reset();
    expect( x.metrics() ).to.equal( null );
    expect( x.evaluate( 'spam', 'unknown' ) ).to.equal( false );
    expect( x.evaluate( 'pam', 'sam' ) ).to.equal( false );

    // With missing labels
    expect( x.evaluate( 'spam', 'urgent' ) ).to.equal( true );
    m = x.metrics();
    expect( m.avgPrecision ).to.equal( 0 );
    expect( m.avgRecall ).to.equal( 0 );
    expect( m.avgFMeasure ).to.equal( 0 );
  } );
} );
