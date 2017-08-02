var emitter = require('./emitter');

var emitter = new emitter();

emitter.on("bad", function(){
    console.log('some subject gets a bad grade !');
});

emitter.on("bad", function(){
    console.log("have subject gets a bad grade, must report parents !");
});

var scores = [10, 4];

for (var item of scores) {
    if(item < 5 ){
        console.log("point low : ", item);
        emitter.emit("bad");
    }
}