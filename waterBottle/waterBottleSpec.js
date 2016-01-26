var bottle = require('./waterBottle');
var assert = require('assert');


//pass in string and function
describe('Water Bottle', function(){
  it('should be empty at start', function(){
    assert.equal(0, bottle.volume)
  });
});