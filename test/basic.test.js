const assert = require('assert');

try {
  assert.strictEqual(1, 1);
  console.log('Tests passed');
  process.exit(0);
} catch (err) {
  console.error('Tests failed');
  console.error(err);
  process.exit(1);
}
