var minimatch = require('minimatch');
var assert = require('assert');

assert.equal(minimatch("bar.foo", "*.foo"), true);
assert.equal(minimatch("bar.foo", "*.+(bar|foo)"), true);
try {
  assert.equal(minimatch("dir/subdir/file.txt", "dir/*.txt"), true ); // Error
} catch(e) {
  console.log(e.message);
}

assert.equal(minimatch("dir/subdir/file.txt", "dir/*/*.txt"), true );

try {
  assert.equal(minimatch("dir/subdir/subdir/file.txt", "dir/*/*.txt"), true ); // Error
} catch(e) {
  console.log(e.message);
}

assert.equal(minimatch("dir/dir1/dir2/dir3/file.txt", "dir/**/*.txt"), true );


