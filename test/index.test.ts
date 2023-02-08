export {};

const assert = require("assert");
const index = require("../src/index");

// Describe what you are testing
describe('Hello World Test', () => {
    // what 'it' should return, and provide a function which tests it
        it('should return "hello world"', () => {
            // assert.equal is equivalent to '=='
            // assert.deepEqual is equivalent to '==='
            assert.deepEqual(index.returnHello(), "hello world");
        });
        // You can also chain these
        it('should also return "hello world"', () => {
            assert.deepEqual(index.returnHello(), "hello world");
        });
    }
);