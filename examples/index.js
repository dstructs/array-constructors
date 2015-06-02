'use strict';

var getCtor = require( './../lib' );

console.log( getCtor( 'int8' ) );
// returns Int8Array

console.log( getCtor( 'uint8' ) );
// returns Uint8Array

console.log( getCtor( 'uint8_clamped' ) );
// returns Uint8ClampedArray

console.log( getCtor( 'int16' ) );
// returns Int16Array

console.log( getCtor( 'uint16' ) );
// returns Uint16Array

console.log( getCtor( 'int32' ) );
// returns Int32Array

console.log( getCtor( 'uint32' ) );
// returns Uint32Array

console.log( getCtor( 'float32' ) );
// returns Float32Array

console.log( getCtor( 'float64' ) );
// returns Float64Array

console.log( getCtor( 'generic' ) );
// returns Array

console.log( getCtor( null ) );
// returns null

console.log( getCtor( 'object' ) );
// returns null

console.log( getCtor( 'array' ) );
// returns null

console.log( getCtor( {} ) );
// returns null

console.log( getCtor( [] ) );
// returns null
