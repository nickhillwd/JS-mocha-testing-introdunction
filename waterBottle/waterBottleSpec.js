var bottle = require('./waterBottle');
var assert = require('assert');


//pass in string and function
describe('Water Bottle', function(){
  //shoule be empty at start
  it('should be empty at start', function(){
    assert.equal(0, bottle.volume);
  });
  //should be 100 when full
  it('should be 100 when full', function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
  });
  //should go down by 10 when drink
  it('should go down by 10 when drunk', function(){
    bottle.sip();
    assert.equal(90, bottle.volume);
  });
  //should go to 0 when emptied
  it('should go to 0 when emptied', function(){
    bottle.empty();
    assert.equal(0, bottle.volume); 
  });
  //should not be able to go below 0
  it('should not be able to go below 0', function(){
    bottle.spill();
    bottle.notMinus();
    assert.equal(0, bottle.volume);
  });
});

