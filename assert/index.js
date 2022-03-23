import assert from 'assert';

console.log('node running');

const a = 5;
const b = 7;
const c = 9;
const d = 5;

assert.equal(a,d)
assert.notEqual(a,7)
assert.ok(true)
assert.ok(2)
assert.equal(25,5**2,["Hello World!"])

console.log('code continuing');