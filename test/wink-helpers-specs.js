/* eslint-disable no-sync */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var helpers = require( '../src/wink-helpers.js' );


var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;


describe( 'isArray1', function () {
  it( 'should return stemmed output correctly for the stem input', function () {
      expect( helpers.array.isArray( [] ) ).to.equal( true );
  } );
} );
