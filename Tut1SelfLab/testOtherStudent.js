//code for other user, git : sachungo, not mine.

const fs = require('fs')
const path = require('path')
const csv = require("csvtojson")

const csvFilePath = 'customer-data.csv'
const jsonFilePath = 'customer-data.json'

csv()
.fromFile(path.join(__dirname,csvFilePath))
.then((jsonObj)=>{
  console.log(`Converting ${csvFilePath} to JSON`)
  fs.writeFileSync(path.join(__dirname, jsonFilePath), JSON.stringify(jsonObj,null,2))
  console.log(`Completed JSON at ${path.join(__dirname,jsonFilePath)}`)
})