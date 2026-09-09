process.on('exit',function() {
    console.log('good')
})

const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.on("lunch", () => {
  console.log("welcome");
});

eventEmitter.emit("lunch");