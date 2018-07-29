const EventEmitter = require("events")

class job extends EventEmitter {}

job = new job()

job.on("done", function (timeDone){
    console.log("Job was pronounced done at", timeDone)
})

job.emit("done", new Date())
job.removeAllListeners()// remove all observer
//