const bardata = require('express').Router()
const XLSX = require('xlsx')
const fs = require('fs')

bardata.get('/', async (request, response) => {
  var filename = '../kurla_dataset.xlsx'
  //   const f = fs.readFile(filename)
  //   console.log(f)
  //   var file = filename[0]
  //   const fileData = await filename.arrayBuffer()
  //   var book = XLSX.readFile(fileData)
  //   const firstSheet = book.SheetNames[0]
  //   const worksheet = book.Sheets[firstSheet]
  //   console.log(worksheet)
  //   const book = XLSX.read(filename)
  //   console.log(book.SheetNames)
})

module.exports = bardata
