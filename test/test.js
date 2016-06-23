const arrayItemToggle = require('../index');
const expect = require('chai').expect;

describe('Testing with number inputs', function() {
    describe('Test when the number exists in the array', function() {
        it('should return the array without the provided item', function() {
            expect(
                arrayItemToggle([1, 2, 3], 1)
            ).to.deep.equal([2, 3]);
            expect(
                arrayItemToggle([10, 25, 10000], 10000)
            ).to.deep.equal([10, 25]);
        });
    });
    describe('Test when the number doesn\'t exist in the array', function() {
        it('should return the array with the provided item included', function() {
            expect(
                arrayItemToggle([2, 3], 1)
            ).to.deep.equal([2, 3, 1]);
            expect(
                arrayItemToggle([10, 25], 10000)
            ).to.deep.equal([10, 25, 10000]);
        })
    })
});

describe('Testing with string inputs', function() {
    describe('Test when the string exists in the array', function() {
        it('should return the array without the provided item', function() {
            expect(
                arrayItemToggle(['where', 'you', 'at'], 'you')
            ).to.deep.equal(['where', 'at']);
            expect(
                arrayItemToggle(['where', 'you', 'from'], 'from')
            ).to.deep.equal(['where', 'you']);
        });
    });
    describe('Test when the string doesn\'t exist in the array', function() {
        it('should return the array with the provided item included', function() {
            expect(
                arrayItemToggle(['now', 'please'], 'don\'t')
            ).to.deep.equal(['now', 'please', 'don\'t']);
            expect(
                arrayItemToggle(['give', 'me'], 'reason')
            ).to.deep.equal(['give', 'me', 'reason']);
        })
    })
});

describe('Testing with non-primitives', function() {
    describe('Test with objects', function() {
        it('should not match identical objects', function() {
            expect(
                arrayItemToggle([{}, {}], {})
            ).to.deep.equal([{}, {}, {}]);
            expect(
                arrayItemToggle([{foo: 'bar'}, {foo: 'bar'}], {foo: 'bar'})
            ).to.deep.equal([{foo: 'bar'}, {foo: 'bar'}, {foo: 'bar'}])
        })
    });
    // describe('Test with function', function() {
    //     it('should not match identical functions', function() {
    //         expect(
    //             arrayItemToggle([function() {}, function() {}], function() {})
    //         ).to.deep.equal([function() {}, function() {}, function() {}])
    //     })
    // })
});