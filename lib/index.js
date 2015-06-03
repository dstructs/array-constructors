'use strict';

// CTORS //

var CTORS = require( './ctors.js' );


// GET CTOR //

/**
* FUNCTION: getCtor( dtype )
*	Returns an array constructor corresponding to an input data type.
*
* @param {String} dtype - data type
* @returns {Function|Null} array constructor or null
*/
function getCtor( dtype ) {
	return CTORS[ dtype ] || null;
} // end FUNCTION getCtor()


// EXPORTS //

module.exports = getCtor;
