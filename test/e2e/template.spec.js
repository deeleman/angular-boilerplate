'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('No specs at all', function() {
    it('should still do normal tests', function() {
        expect(true).to.equal(true);
    });
});
