const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('./index');

describe('greet', () => {
  it('returns a greeting with the given name', () => {
    assert.equal(greet('World'), 'Hello, World!');
  });

  it('returns a greeting with any name', () => {
    assert.equal(greet('Alice'), 'Hello, Alice!');
  });
});
