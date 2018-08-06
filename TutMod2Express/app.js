const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(3000)

// // Imports
// const express = require('express') 
// // Instantiations
// const app = express() 
// // Routes
// app.get('/', (req, res)=>{
//   res.send('hello world')
// })
// // Bootup
// app.listen(3000)