Array Constructors
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns an array constructor corresponding to an array data type.


## Installation

``` bash
$ npm install dstructs-array-constructors
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var getCtor = require( 'dstructs-array-constructors' );
```

#### getCtor( dtype )

Returns an `array` constructor corresponding to an `array` data type.

``` javascript
var ctor = getCtor( 'int8' );
// returns Int8Array
```

The following `array` data types are supported:

| Data Type | Constructor |
|:----------|:------------|
| int8 | [`Int8Array`][Int8Array] |
| uint8 | [`Uint8Array`][Uint8Array] |
| uint8_clamped | [`Uint8ClampedArray`][Uint8ClampedArray] |
| int16 | [`Int16Array`][Int16Array] |
| uint16 | [`Uint16Array`][Uint16Array] |
| int32 | [`Int32Array`][Int32Array] |
| uint32 | [`Uint32Array`][Uint32Array] |
| float32 | [`Float32Array`][Float32Array] |
| float64 | [`Float64Array`][Float64Array] |
| generic | [`Array`][Array] |


## Examples

``` javascript
var getCtor = require( 'dstructs-array-constructors' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha][mocha] test framework with [Chai][chai] assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/dstructs-array-constructors.svg
[npm-url]: https://npmjs.org/package/dstructs-array-constructors

[travis-image]: http://img.shields.io/travis/dstructs/array-constructors/master.svg
[travis-url]: https://travis-ci.org/dstructs/array-constructors

[codecov-image]: https://img.shields.io/codecov/c/github/dstructs/array-constructors/master.svg
[codecov-url]: https://codecov.io/github/dstructs/array-constructors?branch=master

[dependencies-image]: http://img.shields.io/david/dstructs/array-constructors.svg
[dependencies-url]: https://david-dm.org/dstructs/array-constructors

[dev-dependencies-image]: http://img.shields.io/david/dev/dstructs/array-constructors.svg
[dev-dependencies-url]: https://david-dm.org/dev/dstructs/array-constructors

[github-issues-image]: http://img.shields.io/github/issues/dstructs/array-constructors.svg
[github-issues-url]: https://github.com/dstructs/array-constructors/issues

[mocha]: http://mochajs.org/
[chai]: http://chaijs.com
[istanbul]: https://github.com/gotwarlost/istanbul

[Int8Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array
[Uint8Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
[Uint8ClampedArray]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
[Int16Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array
[Uint16Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array
[Int32Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array
[Uint32Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array
[Float32Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
[Float64Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


