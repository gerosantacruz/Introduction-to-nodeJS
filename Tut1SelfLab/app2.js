const csv2json = require('csv2json');
const fs = require('fs-extra');

const source = fs.createReadStream(__dirname + '/customer-data.csv');
const output = fs.createWriteStream(__dirname + '/result.json');
 source
   .pipe(csv2json())
   .pipe(output );