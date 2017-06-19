var leftPad = require('left-pad');
var assert = require('assert');

assert(leftPad('foo', 5), '  foo');
assert(leftPad('foobar', 6), 'foobar');
assert(leftPad(1, 2, '0'), '01');
assert(leftPad(17, 5, 0), "00017");