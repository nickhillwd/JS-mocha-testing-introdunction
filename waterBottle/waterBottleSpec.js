var bottle = require('./waterBottle');
var athlete = require('./athlete')
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
    bottle.sip(1);
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

describe('Athlete', function(){
  //hydration should start at 100%
  it('athlete should start with 100% hydration', function(){
    assert.equal(100, athlete.hydration)
  });
  //distance covered of 0
  it('should have distance covered of 0', function(){
    assert.equal(0, athlete.distance)
  });
  //pedometer should start at 0
  it('pedometer should read 0', function(){
    assert.equal(0, athlete.pedometer)
  });
  //run: increase distance, decrease hydration
  it('running should increase distance and decrease hydration', function(){
    athlete.run(5);
    assert.equal(5, athlete.distance);
    assert.equal(75, athlete.hydration);
  });
  it('should not be able to run if hydration === 0 should only run 19 miles this test', function(){
    athlete.run(100);
    assert.equal(20, athlete.distance);
  });
  it('should be able to increase hydration with a drink', function(){
    bottle.fill();
    athlete.drink(1);
    assert.equal(5, athlete.hydration);
    assert.equal(90, bottle.volume);
  });
})












