/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	getCtor = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'dstructs-array-constructors', function tests() {

	it( 'should export a function', function test() {
		expect( getCtor ).to.be.a( 'function' );
	});

	it( 'should return array constructors', function test() {
		assert.strictEqual( getCtor( 'int8' ), Int8Array );

		assert.strictEqual( getCtor( 'uint8' ), Uint8Array );

		assert.strictEqual( getCtor( 'uint8_clamped' ), Uint8ClampedArray );

		assert.strictEqual( getCtor( 'int16' ), Int16Array );

		assert.strictEqual( getCtor( 'uint16' ), Uint16Array );

		assert.strictEqual( getCtor( 'int32' ), Int32Array );

		assert.strictEqual( getCtor( 'uint32' ), Uint32Array );

		assert.strictEqual( getCtor( 'float32' ), Float32Array );

		assert.strictEqual( getCtor( 'float64' ), Float64Array );

		assert.strictEqual( getCtor( 'generic' ), Array );
	});

	it( 'should return `null` if provided an unrecognized/unsupported array data type', function test() {
		var values = [
			'object',
			'array',
			'function',
			true,
			NaN,
			null,
			undefined,
			{},
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isNull( getCtor( values[ i ] ), values[ i ] );
		}
	});

});
