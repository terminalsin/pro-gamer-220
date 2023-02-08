export {};

const assert = require("assert");
const index = require("../src/bye");

// Describe what you are testing
describe('Bye World Test', () => {
    // what 'it' should return, and provide a function which tests it
        it('should return "bye world"', () => {
            // assert.equal is equivalent to '=='
            // assert.deepEqual is equivalent to '==='
            assert.deepEqual(index.returnBye(), "bye world");
        });
        // You can also chain these
        it('should also return "bye world"', () => {
            assert.deepEqual(index.returnBye(), "bye world");
        });
    }
);