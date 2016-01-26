var waterBottle = require('./waterBottle');

var athelete = {
  hydration: 100,
  distance: 0,
  pedometer: 0,
  run: function(miles){
    for(var i = 0; i < miles; i++){
      if(this.hydration >= 5){
        this.distance += 1;
        this.pedometer += 1;
        this.hydration -= 5;
      }else{
        console.log("you could only run "+i+" miles: Hydration too low")
        break;
      }
    }
  },
  drink: function(sips){
    this.hydration += (5*sips);
    waterBottle.sip(sips);
  }
}

module.exports = athelete;