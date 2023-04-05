const express = require('express')
const app = express()
const bardata = require('./controllers/bardata')

// const app = () => {
//   var filename = './kurla_dataset.csv'
//   const book = XLSX.readFile(filename)
// }
app.use('/api/data', bardata)

module.exports = app
