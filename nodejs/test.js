var up = require('./index.js'),
    expect = require('chai').expect;

describe('my file', function() {
    it('should convert strings to upper case', function () {
        expect(up('hello')).to.equal('HELLO');
    })
})