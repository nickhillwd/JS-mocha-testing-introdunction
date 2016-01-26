var waterBottle = {
  volume: 0,
  fill: function(){
    this.volume = 100;
  },
  sip: function(sips){
    this.volume -= (10*sips);
    this.notMinus();
  },
  empty: function(){
    this.volume = 0;
  },
  spill: function(){
    this.volume -= 101;
  },
  notMinus: function(){
    if(this.volume < 0){
      console.log("Opps, think its all gone: bottle empty")
      this.volume = 0;
    }
  }
}

//have to explicitly export the object to spec file, where it's required
module.exports = waterBottle;
